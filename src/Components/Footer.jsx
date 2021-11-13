import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {

    return (
        <Box
            display='flex'
            sx={{
                height: '200px',
                backgroundColor: '#FFF6F3',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}
        >
            <Typography
                variant='h5'
                sx={{
                    color: '#000080'
                }}
            >
            Stay up to date with the latest statistics. 
            </Typography>
        </Box>
    )
}

export default Footer;