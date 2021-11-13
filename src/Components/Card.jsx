import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import makeStyles from "@mui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
    cardRoot: {
        width: '30%',
        padding: theme.spacing(2),

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
        color: theme.palette.secondary.main
    }
}))

const CardFeature = ({image, content}) => {
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
                alt='imageText'
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
                    variant='h6'
                    className={classes.text}
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardFeature;