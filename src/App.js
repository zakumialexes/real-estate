import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./router/route"
import { Layout } from "./layout/layout"

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    )
}

export default App
