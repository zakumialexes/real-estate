import { Box } from "@mui/material"
import React from "react"
import Plan from "./plan/plan"
import Detail from "./detail/detail"
import Video from "./video/video"
import Location from "./location/location"
import PropertyChart from "./property-chart/property-chart"
import CommentSection from "../../blog-single/comment-section/comment-section"
import SimilarProperties from "./similar-properties/similar-properties"

const Left = () => {
    return (
        <Box sx={{ width: { xs: "100%", lg: "70%" } }}>
            <Detail />
            <Location />
            <Plan />
            <Video />
            <PropertyChart />
            <CommentSection />
            <SimilarProperties />
        </Box>
    )
}

export default Left
