import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles (theme => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    cardContent: {
        padding: theme.spacing(3, 3, 3, 0),
    }, 
}))

const Banner = () => {
    const classes = useStyles();

    return (
        <Card 
            sx={{ 
                display: 'flex', 
                flexDirection: 'row',  
                alignItems: "center",
                boxShadow: "none",
                border: "none",
                height: ""
            }}
            className={classes.root}
        >
            <CardMedia
                sx={{ width: "50%"}}
                component="img"
                sc={{width: 100}}
                image="https://i.stack.imgur.com/y9DpT.jpg"
                alt="image"
            >
            </CardMedia>
            
            <CardContent 
                sx={{ 
                    width: "50%", 
                    justifyContent: "center",
                    textAlign: "center",
                }}
                classes={{root: classes.cardContent}}
            >
                <Typography component="div" variant="h5"> Daily updated Covid-19 Statistics </Typography>  
                <Typography variant="subtitle1">data derived from coronavirus.data.gov.uk</Typography>

            </CardContent>

        </Card>
    )
}

export default Banner;