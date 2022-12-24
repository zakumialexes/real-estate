import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3500",
})

// use this reducer for async api calls
// Example in app.jsx
// Caution: pass arguments in this order in an array url(eg:agent/1), method(get,post,etc...), body(with data when make an update)
export const dataFetch = createAsyncThunk("database", async ([url, method, body, entryPerPage]) => {
    try {
        switch (method) {
            case "get": {
                const { data } = await api.get(url)
                return data
            }
            case "delete": {
                await api.delete(url)
                return true
            }
            case "all": {
                const { data } = await api.get(url)
                return Math.ceil(data.length / entryPerPage)
            }
            default: {
                await api["method"](url, body)
                return true
            }
        }
    } catch (error) {
        const rejectionError = new Error(error.response.status + " " + error.response.statusText)
        return Promise.reject(rejectionError)
    }
})
const fetchReducer = createSlice({
    name: "data",
    initialState: { data: null, error: "", totalPage: 0 },
    reducers: {
        handleRouteChange: (state) => {
            state.data = null
        },
        setTotalPage: (state, { payload }) => {
            state.totalPage = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
            let type = typeof payload
            state.error = ""
            if (type === "boolean") return
            if (type === "number") {
                state.totalPage = payload
            } else {
                state.data = payload
            }
        })
        builder.addCase(dataFetch.rejected, (state, action) => {
            state.data = null
            state.totalPage = 0
            state.error = action.error.message
        })
    },
})
const main = createSlice({
    name: "main",
    initialState: {
        dark: false,
        isAuthenticated: false,
        credentials: {},
    },
    reducers: {
        updateConfidentails: (state, action) => {
            state.credentials = action.payload
        },
        updateTheme: (state, action) => {
            state.dark = action.payload
        },
        updateIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
    },
})
const reducers = [main.reducer, fetchReducer.reducer]
export const { updateConfidentails, updateTheme, updateIsAuthenticated } = main.actions
export const { handleRouteChange } = fetchReducer.actions
export const dataSelector = (state) => state.data.data
export const totalPageSelector = (state) => state.data.totalPage
export { useDispatch, useSelector } from "react-redux"
export default reducers
