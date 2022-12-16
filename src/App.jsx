import { RouterProvider } from "react-router-dom"
import router from "./router/route"
import { Context, reducer } from "./utils/utils"
import { useReducer, useContext } from "react"
import { Layout } from "./layout/layout"
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
    const [state, dispatch] = useReducer(reducer, useContext(Context))
    return (
        <ThemeProvider theme={theme}>
            <Context.Provider value={[state, dispatch]}>
                <RouterProvider router={router} />
            </Context.Provider>
        </ThemeProvider>
    )
}

export default App
