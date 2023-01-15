import React from "react"
import FloorPlan from "./floor-plan/floorPlan"
import PropertiesMedia from "./properties-media/propertiesMedia"
import Typography from "@mui/material/Typography"
import "./myProperties.scss"
import CreateListing from "./create-listing/createListing"
import DetailInformation from "./detail-information/detailInformation"
import { createTheme, useTheme, ThemeProvider } from "@mui/material"
import { blue, red } from "@mui/material/colors"

const customTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "&:focus fieldset": {
                            borderColor: "#3E68A8",
                            borderWidth: "0.15rem",
                        },
                    },
                },
            },
        },
    },
})

const AddNewProperty = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <div className="myProperties">
                <Typography className="myph4" variant="h4">
                    Add New Property
                </Typography>
                <Typography mt={2}>We are glad to see you again!</Typography>
            </div>
            <CreateListing />
            <DetailInformation />
            <PropertiesMedia />
            <FloorPlan />
        </ThemeProvider>
    )
}

export default AddNewProperty
