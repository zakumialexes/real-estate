import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCheck} from "@fortawesome/free-solid-svg-icons";

const features = [
    "Featured First", "Featured 2nd", "Featured 3rd", "Featured 4th", "Featured 5th"
]


export default function SortBy({sortBy, setSortBy}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        (event.target.value !== undefined) && setSortBy(event.target.value)
        setAnchorEl(null);
    };

    return (
        <>
            <span>Sort By:</span>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{color: "#484848", width: "170px"}}
            >
                {features[sortBy]} <FontAwesomeIcon icon={faCaretDown} style={{marginLeft: "10px"}}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button"
                }}
            >
                {
                    features.map((feature, i) => (
                        <MenuItem onClick={handleClose} value={i} key={i} sx={{color: "#77777"}}>
                            {feature} {sortBy === i &&
                            <FontAwesomeIcon icon={faCheck} style={{marginLeft: "1rem", display: "block"}}/>}
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    );
}
