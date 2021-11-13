import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import ColumnMenu from '@mui/icons-material/Menu'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    menuIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    buttons: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))

const NavBar = () => {
    let navigate = useNavigate();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick= (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl);
    }
    const handleClose = () => {
        setAnchorEl(null);
      };

    const navigateToData = () => {
        navigate('/data');
    }

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <AppBar
            color="transparent"
            sx={{ 
                position: "static",
                // backgroundColor: "#000e7e", // #FFF6F3
                boxShadow: 0, 
                height: "50px",
                display: "flex", 
            }}
        >
            <Toolbar
                style={{
                    padding: 0
                }}
            >

            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center"
                }}
            >   

                <img 
                    src="/images/icon.png"
                    alt="logo"
                    width="40px"
                    height="40px"
                    onClick={navigateHome}
                />

                <IconButton
                    size="large"
                    // edge="end"
                    color="inherit"
                    aria-label="menu"
                    // sx={{ mr: 2 }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >

                    <ColumnMenu 
                        className={classes.menuIcon}
                    />

                </IconButton>   

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}
                >
                    <MenuItem onClick={navigateToData}>Get Statistics</MenuItem>
                    <MenuItem>Contact Us</MenuItem>
                </Menu>
            </Box>

            <Box
                className={classes.buttons}
                sx={{
                    display:"flex",
                    justifyContent: "flex-end", 
                    width: '50%'
                }}
            >

                <Button 
                    variant="text" 
                    size="large" 
                    style={{ 
                        color: "#000080",
                        padding: "7px 20px", 
                        fontSize: "1.1rem",
                        fontFamily: "Source Serif Pro, serif",
                    }} 
                > 
                    Contact Us
                </Button>
                
                <Button 
                    variant="text" 
                    size="large" 
                    style={{ 
                        color: "#000080",
                        padding: "7px 20px", 
                        fontSize: "1.1rem",
                        fontFamily: "Source Serif Pro, serif",
                    }} 
                    onClick={navigateToData}
                > 
                    Covid-19
                </Button>
              
            </Box>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;