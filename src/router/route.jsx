import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import AgentList from "../pages/agent-list/agent-list"
import Login from "../pages/authentication/Login"
import Register from "../pages/authentication/Register"
import Faq from "../pages/faq/faq"
import TermsAndCondition from "../pages/terms-and-condition/terms-and-condition"
import BlogList from "../pages/blog-list/blog-list";
import HouseList from "../pages/house-list/house-list";
import BlogSingle from "../pages/blog-single/blog-single";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="agents" element={<AgentList />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="faq" element={<Faq />} />
            <Route path="terms-and-conditions" element={<TermsAndCondition />} />
            <Route path="blogs" element={<BlogList/>}/>
            <Route path="blog-single" element={<BlogSingle/>}/>
            <Route path="houses" element={<HouseList/>}/>
        </Route>
    )
)

export default router
