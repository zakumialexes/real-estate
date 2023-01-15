import ListTable from "./table"
import { useState } from "react"
import { TableContainerCon } from "./customComponents"
import { useGetByParametersPropertyListQuery } from "../../api/api"
const MyProperties = () => {
    const pageName = "Properties"
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [searched, setSearched] = useState(false)
    const [filter, setFilter] = useState("default")
    const { data: totalData, isSuccess: success1 } = useGetByParametersPropertyListQuery(
        `/my-properties${searched ? `?q=${searched}` : ""}`,
        "Property"
    )
    const { data: displayData, isSuccess: success2 } = useGetByParametersPropertyListQuery(
        `/my-properties?_page=${page}&_limit=${4}${searched ? `&q=${searched}` : ""}`,
        "Property"
    )
    if (success1 && success2) {
        return (
            <TableContainerCon
                name={pageName}
                search={searched}
                setSearch={setSearched}
                query={query}
                setQuery={setQuery}
                page={page}
                setPage={setPage}
                totalPage={totalData.length / 4}
                filter={filter}
                setFilter={setFilter}
            >
                <ListTable properties={displayData} />
            </TableContainerCon>
        )
    }
}

export default MyProperties
