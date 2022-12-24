import { TableContainerCon } from "./customComponents"
import { Stack, useMediaQuery, Box, Divider } from "@mui/material"
import { ListingTitle, Action } from "./table"
import { useState, useEffect } from "react"
import { dataFetch, useDispatch, useSelector, dataSelector, totalPageSelector } from "../../utils/reducers"
const FavorItem = ({ image, price, name, location, tags, id, setRefresh }) => {
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
            <Action id={id} setWatcher={setRefresh} />
        </Stack>
    )
}

const MyFavourites = () => {
    const dispatch = useDispatch()
    const data = useSelector(dataSelector) ?? []
    const totalCount = useSelector(totalPageSelector)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState()
    const [filter, setFilter] = useState("default")
    const [searched, setSearched] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        searched || query
            ? dispatch(dataFetch([`my-favourites?q=${query}`, "all", "", 4]))
            : dispatch(dataFetch([`my-favourites`, "all", "", 4]))
    }, [searched])

    useEffect(() => {
        searched || query
            ? dispatch(dataFetch([`my-favourites?q=${query}&&_page=${page}&&_limit=${4}`, "get"]))
            : dispatch(dataFetch([`my-favourites?_page=${page}&&_limit=${4}`, "get"]))
    }, [searched, page, refresh])
    return (
        <TableContainerCon
            name={"Favourites"}
            search={searched}
            setSearch={setSearched}
            query={query}
            setQuery={setQuery}
            page={page}
            setPage={setPage}
            totalPage={totalCount}
            filter={filter}
            setFilter={setFilter}
            sx={{ paddingTop: 0 }}
        >
            {data.map((o) => (
                <Box key={o.id}>
                    <FavorItem
                        setRefresh={setRefresh}
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

export default MyFavourites
