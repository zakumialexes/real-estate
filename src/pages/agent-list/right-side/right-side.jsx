import rightSideStyle from "./right-side.module.scss"
import {useState} from "react";
import AgentSearch from "./agent-search";
import SearchOverlay from "./search-overlay/search-overlay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import FeaturedProperties from "./featured-properties/featured-properties";
import RecentlyViewed from "./recently-viewed/recently-viewed";

export default function RightSide({showSearchOverlay, setShowSearchOverlay}) {
    const [category, setCategory] = useState("all");
    const [city, setCity] = useState("all");

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <>
            <div className={rightSideStyle.rightSide}>
                {/* Agent Search Section Start */}
                <div className={rightSideStyle.agentSearch}>
                    <h4 className={rightSideStyle.h4}>Agent Search</h4>
                    <AgentSearch category={category} city={city} handleCategoryChange={handleCategoryChange}
                                 handleCityChange={handleCityChange}/>
                </div>
                <SearchOverlay doesShow={showSearchOverlay}>
                    <h4 className={rightSideStyle.h4}>
                        Advanced Search
                        <span className={rightSideStyle.overlayHide} onClick={() => setShowSearchOverlay(false)}>
                        <small>Hide Filter</small>
                        <FontAwesomeIcon icon={faXmark}/>
                    </span>
                    </h4>
                    <AgentSearch category={category} city={city} handleCategoryChange={handleCategoryChange}
                                 handleCityChange={handleCityChange}/>
                </SearchOverlay>
            {/*  Agent Search Section End  */}
                <FeaturedProperties/>
<RecentlyViewed/>
            </div>
        </>
    )
}