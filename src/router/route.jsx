import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import AgentList from "../pages/agent-list/agent-list"
import Login from "../pages/authentication/Login"
import Register from "../pages/authentication/Register"
import Faq from "../pages/faq/faq"
import HouseDetail from "../pages/house-detail/house-detail"
import TermsAndCondition from "../pages/terms-and-condition/terms-and-condition"
import Service from "../pages/service/Service"
import BlogList from "../pages/blog-list/blog-list"
import HouseList from "../pages/house-list/house-list"
import Gallery from "../pages/gallery/gallery"
import BlogSingle from "../pages/blog-single/blog-single"
import Contact from "../pages/contact/contact"
import About from "../pages/about/about"
import ErrorPage from "../pages/404-error/errorPage"
import Home from "../pages/home/home"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="agents" element={<AgentList />} />
            <Route path="houses" element={<HouseList />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="faq" element={<Faq />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms-and-conditions" element={<TermsAndCondition />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="house-detail" element={<HouseDetail />} />
            <Route path="service" element={<Service />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blog-single" element={<BlogSingle />} />
            <Route path="houses" element={<HouseList />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="home" element={<Home />} />
        </Route>
    )
)

export default router
