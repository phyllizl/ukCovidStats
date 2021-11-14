import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    chart: {
        width: '48%',
        justifyContent: 'center',
        textAlign: 'center',
        margin: theme.spacing(1,0.5),

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

const Chart = ({text, data, dataKey}) => {

    const classes = useStyles()

    return (
        
        <Card className={classes.chart}>
            <CardContent>
                <Typography variant='h6'>{text}</Typography>
                
                <ResponsiveContainer
                    width="99%"
                    aspect={1.5}
                >
                <AreaChart 
                    width={300} 
                    height={200} 
                    data={data} //englandChartData.current?.slice(0, 30)
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                        type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" //dataKey="uv"
                    />
                </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}

export default Chart