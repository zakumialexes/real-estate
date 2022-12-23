import { RouterProvider } from "react-router-dom"
import router from "./router/route"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
    components: {
        MuiRating: {
            defaultProps: { style: { color: "#FFE700", fontSize: "18px" } },
        },
    },
    typography: {
        allVariants: { lineHeight: "1.2rem" },
        fontFamily: "Nunito",
    },
    palette: {
        primary: {
            main: "#ff5a5f",
        },
        text: {
            main: "#484848",
        },
        reviewSubmitButton: {
            main: "#ff5a5f",
            contrastText: "#fff",
        },
    },
})
function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
