import {Pagination, Select, Slider, styled} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import customCStyles from "./custom-components.module.scss"

export const CustomPagination = styled(Pagination)(() => ({
    button: {
        border: "1px solid #ebebeb",
        color: "#777777",
        "&.Mui-selected": {
            backgroundColor: "#ff5a5f",
            color: "white",
            border: "none",
            "&:hover": {
                backgroundColor: "#ff5a5f"
            }
        }
    },
    "&:Mui-selected": {
        backgroundColor: "orange"
    }
}));

export const CustomSelect = styled(Select)(() => ({
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
export const CustomMenuItem = styled(MenuItem)(() => ({
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


export function MinimumDistanceSlider({value, setValue}) {
    const minDistance = 10;
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };
    const [isDropdown, setIsDropdown] = useState(false)

    function handleClick() {
        setIsDropdown(prevState => !prevState)
    }

    function handleNumber1Change(event) {
        setValue(prev => [event.target.value, prev[1]])
    }

    function handleNumber2Change(event) {
        setValue(prev => [prev[0], event.target.value])
    }

    return (
        <div style={{position: "relative"}}>
            <Button
                id="basic-button"
                onClick={handleClick}
                sx={{
                    color: "#484848", width: "100%",
                    border: '1px solid rgb(235, 235, 235)!important',
                    borderRadius: '8px',
                    fontSize: '14px',
                    paddingLeft: '20px',
                    marginBottom: "16px",
                    height: "56px",
                    fontWeight: "400",
                    justifyContent: "space-between"
                }}
            >
                Price
                <div style={{display: "block", marginRight: "5px"}}>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </div>
            </Button>
            {isDropdown && <div style={{
                position: "absolute",
                top: "100%",
                backgroundColor: "white",
                width: "100%",
                zIndex: "15",
                padding: "25px 30px",
                boxShadow: '0px 0px 50px 0px rgba(32, 32, 32, 0.15)'
            }}>
                <div style={{
                    marginBottom: "10px",
                    display: "flex"
                }}>
                    <input style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        color: '#006c70',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        lineHeight: '1.2',
                        width: '48%'
                    }} value={value[0]}
                           onChange={handleNumber1Change}/>
                    <input style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none',
                        color: '#006c70',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        lineHeight: '1.2',
                        width: '48%',
                        textAlign: "end"
                    }} value={value[1]}
                           onChange={handleNumber2Change}/>
                </div>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange1}
                    valueLabelDisplay="off"
                    disableSwap={true}
                    min={50000}
                    max={130000}
                    sx={{
                        ".MuiSlider-track,.MuiSlider-thumb,.MuiSlider-rail": {
                            backgroundColor: "#ff5a5f"
                        }
                    }
                    }
                />
            </div>}
        </div>
    );
}

export const IconTextField = ({value, handleChange, forName, icon}) => {
    return (
        <div style={{
            position: "relative"
        }} className={customCStyles.iconTextField}>
            <input name={forName} className={customCStyles.input} placeholder={forName} value={value}
                   onChange={handleChange}/>
            <label form={forName} className={customCStyles.iconTextFieldLabel}>
                {icon}
            </label>
        </div>
    );
};

export const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff5a5f',
    border: '2px solid #ff5a5f',
    borderRadius: '5px',
    color: '#ffffff',
    transition: 'all 0.3s ease',
    height: '50px',
    width: '100%',
    fontSize: '1rem',
    textTransform: "capitalize",

    "&:hover": {
        cursor: "pointer",
        backgroundColor: "transparent",
        color: "#ff5a5f"
    }
}));