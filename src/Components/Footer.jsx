import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const Footer = () => {

    return (
        <Box
            display='flex'
            flexWrap="wrap"
            sx={{
                height: '200px',
                backgroundColor: '#FFF6F3',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}
        >
            <Typography
                variant='h5'
                sx={{
                    color: '#000080',
                    fontWeight: 'light',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '1rem'
                }}
            >
            Stay up to date with the latest statistics. 
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    color: '#000080',
                    fontWeight: 'light',
                    width: '100%',
                    textAlign: 'center',
                    fontSize: '0.6rem'
                }}
            >
            Data driven from https://coronavirus.data.gov.uk
            </Typography>
        </Box>
    )
}

export default Footer;