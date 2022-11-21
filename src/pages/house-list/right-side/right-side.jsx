import {useState} from "react";

// Files
import SearchOverlay from "../../agent-list/right-side/search-overlay/search-overlay";
import FeaturedProperties from "../../agent-list/right-side/featured-properties/featured-properties";
import RecentlyViewed from "../../agent-list/right-side/recently-viewed/recently-viewed";
import rightSideStyle from "./right-side.module.scss"


// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import HouseSearch from "./house-search/house-search";
import CategoriesProperties from "../categories-properties/categories-properties";

export default function RightSide({showSearchOverlay, setShowSearchOverlay}) {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("property type");
    const [status, setStatus] = useState("status");
    const [price, setPrice] = useState([52229, 98514])
    const [bathrooms, setBathrooms] = useState("bathrooms")
    const [bedrooms, setBedrooms] = useState("bedrooms")
    const [garages, setGarage] = useState("garages")
    const [yearBuilt, setYearBuilt] = useState("year built")

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    const handleBathroomChange = (event) => {
        setBathrooms(event.target.value);
    };
    const handleBedroomChange = (event) => {
        setBedrooms(event.target.value);
    };
    const handleGarageChange = (event) => {
        setGarage(event.target.value)
    }
    const handleYearBuiltChange = (event) => {
        setYearBuilt(event.target.value)
    }
    const houseSearchProps = {
        keyword,
        handleKeywordChange,
        location,
        handleLocationChange,
        type,
        handleTypeChange,
        status,
        handleStatusChange,
        bathrooms,
        handleBathroomChange,
        bedrooms,
        handleBedroomChange,
        garages,
        handleGarageChange,
        yearBuilt,
        handleYearBuiltChange,
        price,
        setPrice
    }
    return (
        <>
            <div className={rightSideStyle.rightSide}>
                <div className={rightSideStyle.houseSearch}>
                    <HouseSearch {...houseSearchProps}/>
                </div>
                <SearchOverlay doesShow={showSearchOverlay}>
                    <h4 className={rightSideStyle.h4}>
                        Advanced Search
                        <span className={rightSideStyle.overlayHide} onClick={() => setShowSearchOverlay(false)}>
                        <small>Hide Filter</small>
                        <FontAwesomeIcon icon={faXmark}/>
                    </span>
                    </h4>
                    <HouseSearch {...houseSearchProps}/>
                </SearchOverlay>
                <FeaturedProperties/>
                <CategoriesProperties/>
                <RecentlyViewed/>
            </div>
        </>
    )
}