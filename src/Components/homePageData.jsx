import { useEffect, useRef, useState } from 'react';
import Chart from "./Chart"
import BasicCard from './BasicCard'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    numberField: {
        width: '33%',
        margin: '5px',
        backgroundColor: theme.palette.primary.main,

        [theme.breakpoints.down('sm')]: {
            width: "100%",
            lineHeight: "0.3"
        },
    },
    chart: {
        width: '48%',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '5px',

        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
    },
    cardText: {
        fontSize: '1rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1 rem'
        },
    },
}))

const HomePageData = () => {
    const classes = useStyles()

    const englandRawData = useRef(null)
    const englandChartData = useRef(null)
    const [state, setState] = useState(false)

    const fetchAPI = async () => {
        let response = await fetch (`https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england` + 
        `&structure={
            "date":"date",
            "vaccine":"cumVaccinesGivenByPublishDate",
            "newcases":"newCasesByPublishDate",
            "totalCases":"cumCasesByPublishDate",
            "hospital":"newAdmissions",
            "percentageFirstDose":"cumVaccinationFirstDoseUptakeByVaccinationDatePercentage",
            "percentageComplete":"cumVaccinationCompleteCoverageByVaccinationDatePercentage"
        }`)
        const data = await response.json();
        englandRawData.current = data.data 
        console.log({englandRawData})

        // manipulate data with reduce() to fit chart data
        englandChartData.current = englandRawData.current?.reduce( (acc, { date: name, newcases: uv } ) => {
            acc.push({name, uv});
            return acc;
        }, [])
        console.log({englandChartData})
        setState(true)
        
    }

    useEffect(() => {
        fetchAPI()
        console.log('fetch')
    }, [state])


    return (
    <>
        { englandRawData.current &&
            
        <>
            <Box
                display='flex'
                width='100%'
                flexWrap="wrap"
                // sx={{
                //     backgroundColor: "primary.green"
                // }}
            >
                <BasicCard 
                    text="New Cases on:"
                    data={englandRawData.current[0].date}
                    number={englandRawData.current[0].newcases}
                    cardColor="primary.green"
                />

                <BasicCard
                    text="Total Vaccines given: "
                    data={englandRawData.current[1].date}
                    number={englandRawData.current[1].vaccine}
                />

                <BasicCard
                    text="New Hospital Admissions on "
                    data={englandRawData.current[2].date} 
                    number={englandRawData.current[2].hospital}
                />

            </Box>

            <Box
                display="flex"
                width="100%"
                flexWrap="wrap"
            >

                <Chart 
                    text="Covid-19 30-day Trend"
                    data={englandChartData.current?.slice(0, 30)}
                    dataKey="uv"
                />

                <Chart 
                    text="Covid-19 Lifetime Trend"
                    data={englandChartData.current}
                    dataKey="uv"
                />      

            </Box>
        </>
        }
    </>
    )
}

export default HomePageData;

                // <Card
                //     className={classes.chart}
                // >
                //     <CardContent>
                //         <Typography variant='h6'>Covid-19 England LifeTime Trend: </Typography>
                        
                //         <LineChart width={800} height={200} data={englandChartData.current}>
                //             <Line type="monotone" dataKey="uv" stroke="#8884d8"
                //             dot={''} />
                //         </LineChart>
                //     </CardContent>
                // </Card>

                {/* <Line 
                    type="monotone" dataKey="uv" stroke="#8884d8"
                    dot={''} 
                /> */}