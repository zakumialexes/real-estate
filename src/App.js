import logo from "./logo.svg"
import "./App.css"
import Home from "./pages/home"
import { createTheme, ThemeProvider } from "@mui/material"
import { typography } from "@mui/system"
const customTheme = createTheme({
    palette: {
        primary: {
            main: "#ff5a5f"
        }
    },
    typography: {
        fontFamily: 'Nunito'
    }
})

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={customTheme}>
                <Home/>
            </ThemeProvider>
           
        </div>
    )
}

export default App
