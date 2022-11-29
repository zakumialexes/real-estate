import {useCallback, useEffect, useMemo, useState} from "react";

export default function usePaginate(pageLink, pageNumber, limit) {
    const [allData, setAllData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const fetchCallBack = useCallback(() => {
        const url = {
            all: `http://localhost:3500/${pageLink}`,
            curPage: `http://localhost:3500/${pageLink}?_page=${pageNumber}&&_limit=${limit}`
        }

        async function fetchData() {
            const [all, currentPageData] = await Promise.all([
                fetch(url.all).then(data => data.json()), fetch(url.curPage).then(data => {
                    return data.json()
                })
            ])
            setAllData(all)
            setPaginatedData(currentPageData)
            setLoading(false)
        }

        fetchData().catch((error) => setError(error))
    }, [pageNumber, limit, pageLink])
    const totalPageCount = useMemo(() => {
        return Math.ceil(allData.length / limit);
    }, [allData, limit])
    useEffect(() => {
        fetchCallBack()
    }, [fetchCallBack])
    return {
        allData, paginatedData, loading, error, totalPageCount
    }
}