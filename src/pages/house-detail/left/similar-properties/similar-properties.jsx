import { Grid } from "@mui/material"
import GridHouseCard from "../../../house-list/grid-house-card/grid-house-card"
import { useEffect, useState } from "react"

const SimilarProperties = () => {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        fetch("http://localhost:3500/houses?_limit=4")
            .then((response) => response.json())
            .then((data) => {
                setHouses(data)
            })
    }, [])
    return (
        <Grid
            container
            marginTop="30px "
            sx={{ display: "grid", gridTemplateColumns: { lg: "1fr 1fr", md: "1fr" } }}
            gap={4}
        >
            {houses.map((house, i) => (
                <GridHouseCard house={house} key={i} />
            ))}
        </Grid>
    )
}
export default SimilarProperties
