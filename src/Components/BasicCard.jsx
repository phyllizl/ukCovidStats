import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    numberField: {
        width: '33%',
        margin: '5px',

        [theme.breakpoints.down('sm')]: {
            width: "100%",
            lineHeight: "0.3"
        },
    },
    cardText: {
        fontSize: '1rem',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1 rem'
        },
    },
}))


const BasicCard = ({text, data, number, cardColor}) => {

    const classes = useStyles()

    return (
        <Card 
            variant="outlined"
            className={classes.numberField}
        >
            <CardContent>
                <Typography 
                    variant='h6'
                    className={classes.cardText}
                >
                    {text}
                </Typography><br/>
                <u><Typography 
                    variant='h6'
                    className={classes.cardText}
                >
                    {data}
                </Typography></u><br/>
                <Typography 
                    variant='h4'
                    color='#000080'
                > 
                    {number}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BasicCard;