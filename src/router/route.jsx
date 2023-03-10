import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AgentList from "../pages/agent-list/agent-list";
import Faq from "../pages/faq/faq";
import HouseDetail from "../pages/house-detail/house-detail";
import TermsAndCondition from "../pages/terms-and-condition/terms-and-condition";
import Service from "../pages/service/Service";
import BlogList from "../pages/blog-list/blog-list";
import HouseList from "../pages/house-list/house-list";
import Gallery from "../pages/gallery/gallery";
import BlogSingle from "../pages/blog-single/blog-single";
import Contact from "../pages/contact/contact";
import About from "../pages/about/about";
import ErrorPage from "../pages/404-error/errorPage";
import Home from "../pages/home/home";
import AgentSingle from "../pages/agent-single/agent-single";
import { dataAdapter } from "../utils/utils";
import MyProperties from "../pages/my-properties/my-properties";
import MyFavourites from "../pages/my-properties/my-favourite";
import MainDashboard from "../pages/main-dashboard/main-dashboard";
import SavedSearch from "../pages/saved-search/saved-search";
import MyPackage from "../pages/package/my-package";
import { DashBoardLayout, Layout } from "../layout/layout";
import Reviews from "../pages/reviews/reviews";
import DashboardProfile from "../pages/dashboard-profile/dashboard-profile";
import Message from "../pages/message/message";
import AddNewProperty from "../pages/add-new-property/myProperties";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout children={<Home />} />} />
      <Route path="agents" element={<Layout children={<AgentList />} />} />
      <Route
        path="agents/:id"
        element={<Layout children={<AgentSingle />} />}
      />
      <Route path="houses" element={<Layout children={<HouseList />} />} />
      <Route
        path="houses/:id"
        element={<Layout children={<HouseDetail />} />}
        loader={({ params: { id } }) =>
          dataAdapter({ type: "get", url: `houses/${id}` })
        }
      />
      <Route path="login" element={<Layout children={<Login />} />} />
      <Route path="register" element={<Layout children={<Register />} />} />
      <Route path="faq" element={<Layout children={<Faq />} />} />
      <Route path="about" element={<Layout children={<About />} />} />
      <Route path="contact" element={<Layout children={<Contact />} />} />
      <Route
        path="terms-and-conditions"
        element={<Layout children={<TermsAndCondition />} />}
      />
      <Route path="gallery" element={<Layout children={<Gallery />} />} />
      <Route path="service" element={<Layout children={<Service />} />} />
      <Route path="blogs" element={<Layout children={<BlogList />} />} />
      <Route
        path="blogs/:id"
        element={<Layout children={<BlogSingle />} />}
        loader={({ params: { id } }) =>
          dataAdapter({ type: "get", url: `blog-list/${id}` })
        }
      />
      <Route path="*" element={<Layout children={<ErrorPage />} />} />
      <Route path="dashboard">
        <Route
          path="*"
          element={<DashBoardLayout children={<ErrorPage />} />}
        />
        <Route
          path=""
          element={<DashBoardLayout children={<MainDashboard />} />}
        />
        <Route
          path="my-properties"
          element={<DashBoardLayout children={<MyProperties />} />}
        />
        <Route
          path="my-favourites"
          element={<DashBoardLayout children={<MyFavourites />} />}
        />
        <Route
          path="profile"
          element={<DashBoardLayout children={<DashboardProfile />} />}
        />
        <Route
          path="my-packages"
          element={<DashBoardLayout children={<MyPackage />} />}
        />
        <Route
          path="reviews"
          element={<DashBoardLayout children={<Reviews />} />}
        />
        <Route
          path="message"
          element={<DashBoardLayout children={<Message />} />}
        />
        <Route
          path="my-saved-searchs"
          element={<DashBoardLayout children={<SavedSearch />} />}
        />
        <Route
          path="add-new-property"
          element={<DashBoardLayout children={<AddNewProperty />} />}
        />
      </Route>
    </>
  )
);
export default router;
