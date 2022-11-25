import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./router/route"
import { Layout } from "./layout/layout"
import { createTheme, ThemeProvider, useTheme } from "@mui/material"

const theme = createTheme({
    components: {
        MuiRating: {
            defaultProps: { style: { color: "#FFE700", fontSize: "18px" } },
        },
    },
    typography: {
        allVariants: { lineHeight: "1rem" },
    },
    palette: {
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
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </ThemeProvider>
    )
}

export default App
