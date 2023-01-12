import { configureStore } from "@reduxjs/toolkit"
import reducers from "./utils/reducers"
import { api } from "./api/api"

const store = configureStore({
    reducer: {
        main: reducers[0],
        data: reducers[1],
        [api.reducerPath]: api.reducer,
    },
    middleware: (getCustomerMiddlewares) => getCustomerMiddlewares().concat(api.middleware),
})

export default store
