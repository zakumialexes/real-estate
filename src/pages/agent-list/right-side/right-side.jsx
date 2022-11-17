import style from "./right-side.module.scss"
import {useState} from "react";
import AgentSearch from "./agent-search";
import SearchOverlay from "./search-overlay/search-overlay";

export default function RightSide({showSearchOverlay}) {
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
            <div className={style.rightSide}>
                <div className={style.agentSearch}>
                    <h4>Agent Search</h4>
                    <AgentSearch category={category} city={city} handleCategoryChange={handleCategoryChange}
                                 handleCityChange={handleCityChange}/>
                </div>
            </div>
            <SearchOverlay/>
        </>
    )
}