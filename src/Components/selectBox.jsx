import { useRef, useState, useEffect } from 'react'
import Chart from "./Chart"

import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  selectBox: {
    marginTop: '20px',
    width: '100%',
  },
  charts: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
})

function SelectBox() {

    const classes = useStyles()

    const postcode = useRef(null)
    const newCasesArr = useRef(null) // array in reCharts format
    const areaObj = useRef({
        areaType: '', 
        areaName: ''
    })
    const [vaccinated, setVaccinated] = useState(null);
    const [areaType, setAreaType] = useState('region');

    const areaTypes = ['nation', 'region', 'utla', 'ltla']

    const handleAreaTypeChange = (event) => {
      setAreaType(event.target.value)
    }

    const fetchAPI = async () => {
      let response = await fetch (
      `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=${areaObj.current.areaType};areaName=${areaObj.current.areaName}` + 
      `&structure={
          "date":"date",
          "vaccinated":"cumVaccinationFirstDoseUptakeByVaccinationDatePercentage",
          "newcases":"newCasesBySpecimenDate"
      }` 
      );
      const data = await response.json(); // the data object from API
      let dataArray = data.data // and array of objects
      console.log({dataArray}) //dataArray[1].newcases
      
      // update newCasesArr.current with data retrieved
      newCasesArr.current = dataArray.reduce( (acc, { date: name, newcases: pv } ) => {
        acc.push({name, pv});
        return acc;
      }, [])
      console.log('newCasesArr', newCasesArr.current)

      setVaccinated(dataArray[0])
    }
    
    const fetchAreaData = async () => {
      let response = await fetch (`https://api.coronavirus.data.gov.uk/generic/code/postcode/${postcode.current}`)
      const data = await response.json();
      
      areaObj.current.areaName = data[`${areaObj.current.areaType}Name`]
      console.log(areaObj.current)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        //get the postcode
        postcode.current = document.getElementById('postcode').value
        // let select = document.getElementById('areaType');

        // areaObj.current.areaType = select.options[select.selectedIndex].value;
        areaObj.current.areaType = areaType
        
        fetchAreaData();
        setTimeout(() => fetchAPI(), 500)
        // fetchAPI();
    }

    useEffect(() => {

    }, [vaccinated])

  return (
    <Box  className={classes.root} >

      <Box
        className={classes.selectBox}
      >

        <Typography variant='h4' fontWeight="bold"> What's the situation in your local area? </Typography>
        <Typography variant='h6'> View data for your local area</Typography>

        <Box
          component="form"
          noValidate
        >
          <InputLabel htmlFor="postcode" sx={{ root: {marginBottom: "5px"} }}>Enter a postcode:</InputLabel>
          <TextField id="postcode" label="postcode" variant="outlined" margin="dense"/>
          <InputLabel htmlFor="areaType" sx={{ root: {marginBottom: "5px"} }}>Choose your area type:</InputLabel>
          <Select
            id="areaType"
            label="areaType"
            value={areaType}
            onChange={handleAreaTypeChange}
            sx={{
              marginBottom: "10px"
            }}
          >
            {areaTypes.map((type) => <MenuItem value={type} key={type}>{type}</MenuItem>)}  
          </Select><br />
          <Button onClick={onSubmit} variant='contained' color="inherit" sx={{ "$.MuiButton-outlined": {color: "primary.main"}}} >get data</Button>

        </Box>

      </Box>

        { vaccinated &&
          <Box
            sx={{
              marginTop: 10,
              padding: 5,
              backgroundColor: "primary.blue",
              color: "secondary.main",
              fontFamily: "Source Serif Pro, serif"
            }}
          >
            <div>
              <Typography variant="h4">Your selected area is <b>{areaObj.current.areaName}</b>.</Typography>
              <Typography > As of <b>{vaccinated.date}</b>, the percentage of people vaccinated with at least the first dose of vaccine is <b>{vaccinated.vaccinated}%</b>. There were <b>{vaccinated.newcases}</b> reported new cases on {vaccinated.date}.</Typography>
            </div>
        </Box>
        }

      <div
        className={classes.charts}
      >

      { newCasesArr.current &&
        <>
          <Chart
            text="New cases 30-day trend"
            data={newCasesArr.current.slice(0, 30)}
            dataKey="pv"
          />

          <Chart
            text="New cases lifetime trend"
            data={newCasesArr.current}
            dataKey="pv"
          />
        </>
      }
      
      </div>

    </Box>
  );
}

export default SelectBox;


        {/* <form onSubmit={onSubmit}>
          <label htmlFor="postcode">Enter a postcode:</label>
          <input type="text" id="postcode" name="postcode" /> <br />
          <label htmlFor="areaType">Choose your area type:</label>
              <select id="areaType" name="areaType" >
                  {areaTypes.map((type) => <option value={type} key={type}>{type}</option>)}   
              </select>
          <input type="submit" /> <br />
        </form> */}
