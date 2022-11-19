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

export default function RightSide({showSearchOverlay, setShowSearchOverlay}) {
    const [type, setType] = useState("property type");
    const [status, setStatus] = useState("status");
    const [bathrooms, setBathrooms] = useState("bathrooms")
    const [bedrooms, setBedrooms] = useState("bedrooms")

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
    const houseSearchProps = {
        type,
        handleTypeChange,
        status,
        handleStatusChange,
        bathrooms,
        handleBathroomChange,
        bedrooms,
        handleBedroomChange
    }
    return (
        <>
            <div className={rightSideStyle.rightSide}>
                {/* Agent Search Section Start */}
                <div className={rightSideStyle.agentSearch}>
                    <h4 className={rightSideStyle.h4}>Agent Search</h4>
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
                </SearchOverlay>
                {/*  Agent Search Section End  */}
                <FeaturedProperties/>
                <RecentlyViewed/>
            </div>
        </>
    )
}