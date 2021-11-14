import { useEffect, useRef, useState } from 'react';
import Chart from "./Chart"
import BasicCard from './BasicCard'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: "16px",

        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap"
        },
    },
    text: {
        fontSize: '2rem',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    paragraph: {
        width: '60%',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'justify',
        },
    },
    numberCards: {
        width: '40%',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '2rem'
        },
    }
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

    //percentage completed first dose: 77.4 .percentageFirstDose
    //percentage completed: 70.6 .percentageComplete
    return (
    <>
        { englandRawData.current &&
            
        <>
            <Box
                display='flex'
                width='100%'
                className={classes.root}
                // flexWrap="wrap"
                // sx={{
                //     backgroundColor: "primary.green"
                // }}
            >   
                <Box className={classes.paragraph}>
                    <Typography className={classes.text} variant="h2">There were <b>{englandRawData.current[0].newcases}</b> new cases <b>yesterday</b>. </Typography><br/>
                    <Typography className={classes.text} variant="h2">
                        As of <b>{englandRawData.current[1].date}</b>, the percentage of population that have completed their first dose of the vaccine is <b>{englandRawData.current[1].percentageFirstDose}%</b>. The percentage of population with complete coverage by vaccination is <b>{englandRawData.current[1].percentageComplete}%</b>.
                    </Typography><br/>
                    <Typography variant="body1" sx={{fontWeight: 'light'}}>This data is constantly updated from the latest information available on the official UK government's covid-19 website.</Typography>
                </Box>

                <Box className={classes.numberCards}>
                <BasicCard 
                    text="New Cases on:"
                    data={englandRawData.current[0].date}
                    number={englandRawData.current[0].newcases}
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

            </Box>

            <Box
                display="flex"
                width="100%"
                flexWrap="wrap"
                sx={{
                    padding: "16px",
                }}
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