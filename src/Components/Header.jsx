import React from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        height: "400px",
        width: "100%",
        alignContent: "center",
        paddingTop: "20px",
        display: "inline-flex",

        [theme.breakpoints.down("md")] : {
            height: "300px",
            paddingTop: "30px"
        },

        [theme.breakpoints.down("sm")] : {
            height: "240px",
            paddingTop: "10px"
        },

    }, 
    image: {
        width: "100%",
        objectFit:"cover",
    },
    textBox: {
        top: "40%",
        position: "absolute",
        paddingLeft: "30px",
        width: "80%",

        [theme.breakpoints.down('sm')]: {
            paddingLeft: "20px"
        },

        [theme.breakpoints.down('xs')]: {
            top: "40%",
            paddingLeft: "10px"
        },
    },
    title: {
        fontFamily: "Source Serif Pro, serif",
        fontWeight: "bold",
        fontSize: '3.5rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },
    },
    subtitle: {
        fontFamily: "'Source Serif Pro', serif;",

        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem'
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem'
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem'
        },

    }
}))

const Header = ({src, title, subtitle}) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img 
                src={src}
                alt="here" 
                className={classes.image}
            />

            <Box className={classes.textBox}>
                <Typography
                    variant='h1'
                    className={classes.title}
                >
                    {title}
                </Typography>

                <Typography
                    className={classes.subtitle}
                >
                    {subtitle}
                </Typography>
            </Box>

        </Box>
    ) 
}

export default Header;