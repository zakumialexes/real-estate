import {CustomMenuItem, CustomSelect} from "../../../agent-list/custom-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const types = ["property type", "apartment", "bungalow", "condo", "house", "land", "single family"];
const statusSelect = ["status", "apartment", "bungalow", "condo", "house", "land", "single family"];
const bathroomsSelect = ["bathrooms", 1, 2, 3, 4, 5, 6];
const bedroomsSelect= ["bedrooms", 1, 2, 3, 4, 5, 6];


export default function HouseSearch({
                                        status,
                                        handleStatusChange,
                                        type,
                                        handleTypeChange,
                                        bathrooms,
                                        handleBathroomChange,
    bedrooms,handleBedroomChange
                                    }) {
    return (
        <>
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
                {types.map((category, i) => (
                    <CustomMenuItem value={category} key={i}>
                        {category === "all" ? "All Categories" : category}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
            <CustomSelect
                labelId="status"
                id="category-select"
                value={bathrooms}
                label="category"
                onChange={handleBathroomChange}
            >
                {bathroomsSelect.map((bathroom,i)=>(
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
                {bedroomsSelect.map((bedroom,i)=>(
                    <CustomMenuItem value={bedroom} key={i}>
                        {bedroom}
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </>
    )
}