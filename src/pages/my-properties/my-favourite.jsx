import { TableContainerCon } from "./customComponents"
import { Stack, useMediaQuery, Box, Divider } from "@mui/material"
import { ListingTitle, Action } from "./table"
import { useState } from "react"
import { useGetByParametersFavouriteListQuery } from "../../api/api"

const FavorItem = ({ image, price, name, location, tags, id }) => {
    const screen = useMediaQuery("(max-width: 550px )")
    const style = {
        width: "100%",
        height: "fit-content",
        margin: "25px 0",
    }
    return (
        <Stack
            direction={screen ? "column" : "row"}
            justifyContent={screen ? "flex-start" : "space-between"}
            alignItems="center"
            sx={style}
            spacing={5}
        >
            <ListingTitle image={image} price={price} name={name} location={location} tags={tags} screen={screen} />
            <Action id={id} favourite={true} />
        </Stack>
    )
}

const MyFavourites = () => {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState()
    const [filter, setFilter] = useState("default")
    const [searched, setSearched] = useState(false)
    const { data: totalData, isSuccess: success1 } = useGetByParametersFavouriteListQuery(
        `/my-favourites${searched ? `?q=${searched}` : ""}`
    )
    const { data: displayData, isSuccess: success2 } = useGetByParametersFavouriteListQuery(
        `/my-favourites?_page=${page}&_limit=${4}${searched ? `&q=${searched}` : ""}`
    )
    if (success1 && success2) {
        return (
            <TableContainerCon
                name={"Favourites"}
                search={searched}
                setSearch={setSearched}
                query={query}
                setQuery={setQuery}
                page={page}
                setPage={setPage}
                totalPage={Math.ceil(totalData.length / 4)}
                filter={filter}
                setFilter={setFilter}
                sx={{ paddingTop: 0 }}
            >
                {displayData.map((o) => (
                    <Box key={o.id}>
                        <FavorItem
                            image={o.image}
                            price={o.price}
                            name={o.name}
                            location={o.location}
                            tags={o.tags}
                            id={o.id}
                        />
                        <Divider />
                    </Box>
                ))}
            </TableContainerCon>
        )
    }
}

export default MyFavourites
