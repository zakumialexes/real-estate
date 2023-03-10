// Files
import style from "./right-side.module.scss";
import {CustomMenuItem, CustomSelect} from "../custom-components/custom-components";

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const categories = ["all", "apartment", "bungalow", "condo", "house", "land", "single family"]
const cities = ["all", "atlanta", 'florida', "los angeles", "miami", "new york", "orlando"]
export default function AgentSearch({category, handleCategoryChange, city, handleCityChange}) {
    return (
        <>
            <CustomSelect
                labelId="category"
                id="category-select"
                value={category}
                label="category"
                onChange={handleCategoryChange}
            >
                {categories.map((category, i) => (
                    <CustomMenuItem value={category} key={i}>
                        {category === "all" ? "All Categories" : category}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Age"
                onChange={handleCityChange}
            >
                {cities.map((item, i) => (
                    <CustomMenuItem value={item} key={i}>
                        {item === "all" ? "All Cities" : item}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <button className={style.searchBtn}>Search</button>
        </>


    )
}