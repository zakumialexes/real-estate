import { Box } from "@mui/material"
import usePaginate from "../agent-list/pagination"
import ListTable from "./table"
import { useState } from "react"
import { TableContainerCon } from "./customComponents"

const MyProperties = ({}) => {
    const source = "my-properties"
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [searched, setSearched] = useState(false)
    const [filter, setFilter] = useState("default")
    const {
        totalPageCount,
        paginatedData: paginatedProperties,
        deleteF,
        setDeleteF,
    } = usePaginate(source, page, 4, query, searched, filter)

    const action = () => {
        let random = Math.random()
        while (random === searched) random = Math.random()
        setSearched(random)
        setPage(1)
    }
    console.log(filter)

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
        >
            <ListTable properties={paginatedProperties} source={source} deleteF={deleteF} setDeleteF={setDeleteF} />
        </TableContainerCon>
    )
}

export default MyProperties
