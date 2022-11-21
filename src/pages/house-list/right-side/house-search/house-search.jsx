import {
    CustomMenuItem,
    CustomSelect,
    IconTextField,
    MinimumDistanceSlider
} from "../../../agent-list/custom-components/custom-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faLocationDot, faSearch} from "@fortawesome/free-solid-svg-icons";

const typeSelect = ["property type", "apartment", "bungalow", "condo", "house", "land", "single family"];
const statusSelect = ["status", "apartment", "bungalow", "condo", "house", "land", "single family"];
const bathroomsSelect = ["bathrooms", 1, 2, 3, 4, 5, 6];
const bedroomsSelect = ["bedrooms", 1, 2, 3, 4, 5, 6];
const garagesSelect = ["garages", "yes", "no", "other"];
const yearBuiltSelect = ["year built", 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


export default function HouseSearch({
                                        keyword,
                                        handleKeywordChange,
                                        location,
                                        handleLocationChange,
                                        status,
                                        handleStatusChange,
                                        type,
                                        handleTypeChange,
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
                                    }) {
    return (
        <>
            <IconTextField value={keyword} handleChange={handleKeywordChange} forName="keyword"
                           icon={<FontAwesomeIcon icon={faSearch}/>}/>
            <IconTextField value={location} handleChange={handleLocationChange} forName="location"
                           icon={<FontAwesomeIcon icon={faLocationDot}/>}/>
            <CustomSelect
                labelId="status"
                id="category-select"
                value={status}
                label="category"
                onChange={handleStatusChange}
            >
                {statusSelect.map((item, i) => (
                    <CustomMenuItem value={item} key={i}>
                        {item}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="type"
                id="type-select"
                value={type}
                label="type"
                onChange={handleTypeChange}
            >
                {typeSelect.map((category, i) => (
                    <CustomMenuItem value={category} key={i}>
                        {category === "all" ? "All Categories" : category}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <MinimumDistanceSlider value={price} setValue={setPrice}/>
            <CustomSelect
                labelId="status"
                id="category-select"
                value={bathrooms}
                label="category"
                onChange={handleBathroomChange}
            >
                {bathroomsSelect.map((bathroom, i) => (
                    <CustomMenuItem value={bathroom} key={i}>
                        {bathroom}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="status"
                id="category-select"
                value={bedrooms}
                label="category"
                onChange={handleBedroomChange}
            >
                {bedroomsSelect.map((bedroom, i) => (
                    <CustomMenuItem value={bedroom} key={i}>
                        {bedroom}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="garage"
                id="garage-select"
                value={garages}
                label="garage"
                onChange={handleGarageChange}
            >
                {garagesSelect.map((garage, i) => (
                    <CustomMenuItem value={garage} key={i}>
                        {garage}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="year-built"
                id="year-built-select"
                value={yearBuilt}
                label="garage"
                onChange={handleYearBuiltChange}
            >
                {yearBuiltSelect.map((year, i) => (
                    <CustomMenuItem value={year} key={i}>
                        {year}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </>
    )
}