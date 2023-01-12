import { Grid } from "@mui/material"
import { useGetByParametersQuery } from "../../../../api/api"
import GridHouseCard from "../../../house-list/grid-house-card/grid-house-card"

const SimilarProperties = () => {
    const { data: houses, isSuccess } = useGetByParametersQuery("/houses?_limit=4")
    if (isSuccess)
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
