import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    cardRoot: {
        width: '30%',
        padding: theme.spacing(2, 0),

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    cardMedia: {
        height: '70',

        [theme.breakpoints.down('sm')]: {
            height: '150px',
            objectFit: 'contain'
        }
    }, 
    text: {
        fontSize: '1.3rem',
        color: theme.palette.secondary.main,
        "& .MuiTypography-root" : {
            fontWeight: 'light',
        }
    },
    biggerText: {
        fontSize: '2rem',
        color: theme.palette.secondary.main
    }
}))

const CardFeature = ({image, content='', alt, bigText=''}) => {
    const classes = useStyles();

    return (
        <Card 
            className={classes.cardRoot}
            elevation={0}
        >
            <CardMedia
                className={classes.cardMedia}
                component="img"
                image={image}
                alt={alt}
                >
            </CardMedia>
            <CardContent style={{ 
                textAlign: 'center',
                padding: 1,
                '& .MuiTypography-root': {
                    lineHeight: '0rem',
                    fontFamily: 'Source Serif Pro, serif',
                }
            }}>
                <Typography
                    variant='body1'
                    className={classes.text}
                >
                    {content}
                </Typography>
                <Typography
                    variant='h4'
                    className={classes.biggerText}
                >
                    {bigText}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardFeature;