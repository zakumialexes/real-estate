import { TableContainerCon } from "./customComponents"
import { Stack, useMediaQuery, Box, Divider } from "@mui/material"
import { ListingTitle, Action } from "./table"
import { useState } from "react"
import usePaginate from "../agent-list/pagination"
const FavorItem = ({ image, price, name, location, tags, id, source, action, deleteF, setDeleteF }) => {
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
            <Action id={id} source={source} deleteF={deleteF} setDeleteF={setDeleteF} />
        </Stack>
    )
}

const MyFavourites = () => {
    const source = "my-favourites"
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState()
    const [filter, setFilter] = useState("default")
    const [searched, setSearched] = useState(false)
    console.log(query)
    console.log(searched)
    const {
        totalPageCount,
        paginatedData: paginatedProperties,
        deleteF,
        setDeleteF,
    } = usePaginate(source, page, 4, query, searched)
    const action = () => {
        let random = Math.random()
        while (random === searched) random = Math.random()
        setSearched(random)
        setPage(1)
    }
    return (
        <TableContainerCon
            search={searched}
            setSearch={setSearched}
            query={query}
            setQuery={setQuery}
            action={action}
            page={page}
            setPage={setPage}
            totalPage={totalPageCount}
            filter={filter}
            setFilter={setFilter}
            sx={{ paddingTop: 0 }}
        >
            {paginatedProperties.map((o) => (
                <Box key={o.id}>
                    <FavorItem
                        deleteF={deleteF}
                        setDeleteF={setDeleteF}
                        image={o.image}
                        price={o.price}
                        name={o.name}
                        location={o.location}
                        tags={o.tags}
                        id={o.id}
                        source={source}
                    />
                    <Divider />
                </Box>
            ))}
        </TableContainerCon>
    )
}

export default MyFavourites
