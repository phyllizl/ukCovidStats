import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    numberField: {
        width: '100%',
        margin: theme.spacing(1,0),
        padding: theme.spacing(0,2),
        backgroundColor: theme.palette.primary.blue,

        [theme.breakpoints.down('sm')]: {
            lineHeight: "0.3"
        },
    },
    cardText: {
        fontSize: '1rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1 rem'
        },
    },
    number: {
        [theme.breakpoints.up('sm')]: {
            fontSize: '2rem'
        },
    }
}))


const BasicCard = ({text, data, number}) => {

    const classes = useStyles()

    return (
        <Card 
            variant="outlined"
            className={classes.numberField}
        >
            <CardContent
                sx={{
                    backgroundColor:"primary.blue"
                }}
            >
                <Typography 
                    variant='h3'
                    className={classes.cardText}
                >
                    {text}
                </Typography><br/>
                <u><Typography 
                    variant='body2'
                    className={classes.cardText}
                >
                    {data}
                </Typography></u><br/>
                <Typography 
                    variant='h3'
                    color='#000080'
                    className={classes.number}
                > 
                    {number}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BasicCard;