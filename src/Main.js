
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import Container from '@mui/material/Container'
import NavBar from './Components/Navbar'


// pages
import RenderData from './Pages/RenderData'
import Home from './Pages/Home'

const Main = () => {

    let theme = createTheme({
        palette: {
            primary: {
                main: '#FFF6F3',
                bold: '#f9d8cc',
                green: '#d7eecb',
                blue: '#cccfe5',
            },
            secondary: {
                main: '#000080',
            }
        },
        typography: {
            h1: {
                fontWeight: 800, 
                fontSize: 4,
                fontFamily: 'Source Serif Pro, serif'
            }
        },
    });

    theme = responsiveFontSizes(theme);

    return (
        <Container style={{
            backgroundColor: "white",
            disableGutters: true,
            maxWidth: "800px"
        }}>

        <Router>
            <ThemeProvider theme={theme} >
                <NavBar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/data" element={<RenderData />} />
                    </Routes>
            </ThemeProvider>
        </Router>
        </Container>
    )
}

export default Main;