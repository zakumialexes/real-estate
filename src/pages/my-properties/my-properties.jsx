import { Box } from "@mui/material"
import usePaginate from "../agent-list/pagination"
import ListTable from "./table"
import { useState } from "react"
import { TableContainerCon } from "./customComponents"
import { useDispatch, useSelector } from "react-redux"
import { dataFetch } from "../../utils/reducers"
import { useEffect } from "react"
const MyProperties = ({}) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data) ?? []
    const pageName = "Properties"
    const totalCount = Math.ceil(useSelector((state) => state.data.totalCount) / 4)
    console.log(totalCount)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [searched, setSearched] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [filter, setFilter] = useState("default")
    useEffect(() => {
        searched || query
            ? dispatch(dataFetch([`my-properties?q=${query}`, "all"]))
            : dispatch(dataFetch([`my-properties`, "all"]))
    }, [searched])
    useEffect(() => {
        searched || query
            ? dispatch(dataFetch([`my-properties?q=${query}&&_page=${page}&&_limit=${4}`, "get"]))
            : dispatch(dataFetch([`my-properties?_page=${page}&&_limit=${4}`, "get"]))
        console.log(query)
    }, [searched, page, refresh])

    return (
        <TableContainerCon
            name={pageName}
            search={searched}
            setSearch={setSearched}
            query={query}
            setQuery={setQuery}
            page={page}
            setPage={setPage}
            totalPage={totalCount}
            filter={filter}
            setFilter={setFilter}
        >
            <ListTable properties={data} setWatcher={setRefresh} />
        </TableContainerCon>
    )
}

export default MyProperties
