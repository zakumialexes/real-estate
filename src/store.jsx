import { configureStore } from "@reduxjs/toolkit"
import reducers from "./utils/reducers"
const store = configureStore({
    reducer: {
        main: reducers[0],
        data: reducers[1],
    },
})

export default store
