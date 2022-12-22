import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

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
                return await api["method"](url)
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
    initialState: { data: {}, error: "" },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(dataFetch.fulfilled, (state, { type, payload }) => {
            state.data = payload
            state.error = ""
        })
        builder.addCase(dataFetch.rejected, (state, action) => {
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

const reducers = [main.reducer, fetchReducer.reducer]
export default reducers
