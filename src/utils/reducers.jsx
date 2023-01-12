import { createSlice } from "@reduxjs/toolkit"

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
