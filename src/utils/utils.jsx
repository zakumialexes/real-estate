import { createContext } from "react"
import axios from "axios"

const adapter = axios.create({ baseURL: "http://localhost:3500" })

const Context = createContext({
    theme: "dark",
    isAuthenticated: "false",
    userCredentials: {},
})
const reducer = (state, action) => {
    switch (action.type) {
        case "theme":
            return { ...state, theme: action.payload.theme }
        case "authentication":
            return { ...state, isAuthenticated: action.payload.isAuthenticated }
        case "userCredentials":
            return { ...state, userCredentials: action.payload.userCredentials }
        default:
            return state
    }
}
const dataAdapter = async (action) => {
    switch (action.type) {
        // function call example dispatch({type:get, url: "customer"})
        case "get":
            return await adapter.get(action.url).catch((error) => console.error(error))
        // function call example dispatch({type:post, url: "customer",data: {...} })
        case "post":
            return await adapter.post(action.url, action.data).catch((error) => console.error(error))
        // function call example dispatch({type:put or patch, url: "customer/1",data: {...} })
        case "put or patch":
            return await adapter[action.type](action.url, action.data).catch((error) => console.error(error))
        // function call example dispatch({type:delete, url: "customer/1"})
        case "delete":
            return await adapter.delete(action.url).catch((error) => console.error(error))
        default:
            return
    }
}

export { dataAdapter, reducer, Context }
