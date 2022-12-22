import { RouterProvider } from "react-router-dom"
import router from "./router/route"
import { createTheme, ThemeProvider } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { dataFetch } from "./utils/reducers"
import { useEffect } from "react"

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
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    console.log(data)
    useEffect(() => {
        dispatch(dataFetch(["properties/1", "get"]))
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
