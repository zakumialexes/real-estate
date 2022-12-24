import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useSelector } from "react-redux"

const api = axios.create({
    baseURL: "http://localhost:3500",
})

// use this reducer for async api calls
// Example in app.jsx
// Caution: pass arguments in this order in an array url(eg:agent/1), method(get,post,etc...), body(with data when make an update)
export const dataFetch = createAsyncThunk("database", async ([url, method, body]) => {
    try {
        switch (method) {
            case "get": {
                const { data } = await api.get(url)
                return data
            }
            case "delete": {
                api[method](url).then(() => {
                    return "deleted"
                })
            }
            case "all": {
                const { data } = await api.get(url)
                return data.length
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
    initialState: { data: null, error: "", totalCount: 0 },
    reducers: {
        handleRouteChange: (state) => {
            state.data = null
        },
        setTotalCount: (state, { payload }) => {
            state.totalCount = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(dataFetch.fulfilled, (state, { payload }) => {
            let type = typeof payload
            if (type !== "number" && payload !== "deleted") {
                state.data = payload
            } else {
                state.totalCount = payload
            }

            state.error = ""
        })
        builder.addCase(dataFetch.rejected, (state, action) => {
            state.data = null
            state.totalCount = 0
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
export const { updateConfidentails, updateTheme, updateIsAuthenticated } = main.actions
export const { handleRouteChange } = fetchReducer.actions
const reducers = [main.reducer, fetchReducer.reducer]
export default reducers
