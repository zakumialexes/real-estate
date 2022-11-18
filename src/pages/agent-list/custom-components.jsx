import {Pagination, Select, styled} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export const CustomPagination = styled(Pagination)(({theme}) => ({
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

export const CustomSelect = styled(Select)(({theme}) => ({
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
export const CustomMenuItem = styled(MenuItem)(({theme}) => ({
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