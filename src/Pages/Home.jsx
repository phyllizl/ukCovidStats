import Header from '../Components/Header'
import Banner from '../Components/Banner'
import CardFeature from '../Components/Card'
import Footer from '../Components/Footer'
import HomePageData from '../Components/homePageData'

import Box from '@mui/material/Box'
import makeStyles from '@mui/styles/makeStyles'
import Typography from '@mui/material/Typography'


const useStyles = makeStyles(theme => ({
    box: {
       display: 'flex',
       paddingTop: '20px',

       [theme.breakpoints.down('sm')]: {
           flexDirection: 'column'
       }
    },
    paragraph: {
        padding: theme.spacing(4, 0, 1, 0),
        color: theme.palette.secondary.main,
        fontFamily: 'Source Serif Pro, serif',
        fontWeight: 600,
        fontSize: 40,
    }
}))
 
const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Header 
                src={'/images/header3.png'} 
                title={'Covid-19 Stats UK'}
                subtitle={'LATEST COVID-19 STATISTICS'}
            />

            <Typography 
                className={classes.paragraph}
                align='center'
                variant='h3'
            >
                Latest England Statistics
            </Typography>

            <Typography 
                align='justify'
                variant='body1'
                sx={{
                    margin: 2,
                    color: "#000080"
                }}
            >
                This information comes from the official UK Government's website. This document explains the key statistics presented on the UK Coronavirus (COVID-19) Dashboard. 
            </Typography>
            
            <HomePageData />

            <Typography 
                className={classes.paragraph}
                align='center'
                variant='h6'
            >
                Get to know your Covid-19 statistics and stay protected.
            </Typography>

            <Box className={classes.box}>
                <CardFeature 
                    image={'/images/6.png'}
                    content={'Location specific'}
                />
                <CardFeature 
                    image={'/images/7.png'}
                    content={'NHS admittance'}
                />
                <CardFeature 
                    image={'/images/8.png'}
                    content={'Vaccination rate'}
                />
            </Box>


            <Footer />
        </>
    )
}

export default Home;