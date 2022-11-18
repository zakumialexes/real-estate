// Files
import style from "./right-side.module.scss";
import MenuItem from "@mui/material/MenuItem";

// MUI
import {Select, styled} from "@mui/material";

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const CustomSelect = styled(Select)(({theme}) => ({
    padding: "0 10px",
    width: "100%",
    textTransform: "capitalize",
    marginBottom: "1rem",
    legend: {
        display: "none"
    },
    ".Mui-focused": {
        border: '1px solid rgb(235, 235, 235)',
    },
    "& fieldset": {
        border: '1px solid rgb(235, 235, 235) !important',
        borderRadius: '8px',
        color: '#484848',
        fontSize: '14px',
        paddingLeft: '20px',
    },
    "& Mui-selected": {
        backgroundColor: "red"
    },
    ul: {
        padding: 0
    },
    "& .MuiSelect-select": {
        span: {
            display: "none"
        }
    },
    ".MuiPaper-elevation": {
        boxShadow: "none"
    }
}));
const CustomMenuItem = styled(MenuItem)(({theme}) => ({
    textTransform: "capitalize",
    span: {display: "none"},
    "&.Mui-selected": {
        backgroundColor: "#f7f7f7",
        display: "inline-flex",
        justifyContent: "space-between",
        width: "100%",
        span: {
            display: "block"
        },
        "&:hover": {
            backgroundColor: "#f7f7f7"
        }
    },
    "&.MuiInputBase-input": {
        span: {
            display: "none"
        }
    }
}));

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