import { useCallback, useEffect, useMemo, useState } from "react"

export default function usePaginate(pageLink, pageNumber, limit, query, searched, filter) {
    const [allData, setAllData] = useState([])
    const [paginatedData, setPaginatedData] = useState([])
    const [loading, setLoading] = useState(true)
    const [deleteF, setDeleteF] = useState("")
    const [error, setError] = useState("")
    const fetchCallBack = useCallback(() => {
        console.log(pageNumber)
        const url = searched
            ? {
                  all: `http://localhost:3500/${pageLink}?q=${query}`,
                  curPage: `http://localhost:3500/${pageLink}?q=${query}&&_page=${pageNumber}&&_limit=${limit}`,
              }
            : {
                  all: `http://localhost:3500/${pageLink}${filter === "Old Review" ? `_sort=view&_order=desc` : ""}`,
                  curPage: `http://localhost:3500/${pageLink}?_page=${pageNumber}&&_limit=${limit}${
                      filter === "Old Review" ? `_sort=view&_order=desc` : ""
                  }`,
              }

        async function fetchData() {
            const [all, currentPageData] = await Promise.all([
                fetch(url.all).then((data) => data.json()),
                fetch(url.curPage).then((data) => {
                    return data.json()
                }),
            ])
            setAllData(all)
            setPaginatedData(currentPageData)
            setLoading(false)
        }

        fetchData().catch((error) => setError(error))
    }, [pageNumber, limit, pageLink, searched, filter])
    console.log(allData)
    console.log(paginatedData)
    const totalPageCount = useMemo(() => {
        return Math.ceil(allData.length / limit)
    }, [allData, limit])
    useEffect(() => {
        fetchCallBack()
    }, [fetchCallBack, deleteF])
    return {
        allData,
        paginatedData,
        loading,
        error,
        totalPageCount,
        deleteF,
        setDeleteF,
    }
}
