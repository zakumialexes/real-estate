import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<>Home</>}></Route>))

export default router
