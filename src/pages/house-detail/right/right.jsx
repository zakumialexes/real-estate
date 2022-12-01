import { Box, OutlinedInput, Stack, Typography } from "@mui/material"
import React from "react"
import rightStyle from "./right.module.scss"
import FeaturedProperties from "../../agent-list/right-side/featured-properties/featured-properties"

const inputStyle = {
    width: "100%",
    marginBottom: "10px",
    ".MuiOutlinedInput-notchedOutline": {
        borderColor: "#ebebeb",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ebebeb",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ebebeb",
    },
}

const Right = () => {
    return (
        <Box sx={{ width: { xs: "100%", lg: "30%" } }}>
            <Box className={rightStyle.container}>
                <Typography fontSize="18px" fontWeight="bold" mb={2}>
                    Listed By
                </Typography>
                <Stack direction="row" spacing={2} alignContent="center" justifyContent="flex-start" mb={5}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/resource/detail-customer-0.png"}
                        alt=""
                        width="90px"
                        height="90px"
                        style={{ borderRadius: "50%" }}
                    />
                    <Box>
                        <Typography fontSize="16px" fontWeight="bold">
                            Samul Williams
                        </Typography>
                        <Typography fontSize="14px">(123)456-7890</Typography>
                        <Typography fontSize="14px">info@shwerealestate.com</Typography>
                        <Typography color="#ff5a5f" fontSize="14px" fontWeight="bold">
                            View My Listing
                        </Typography>
                    </Box>
                </Stack>
                <form>
                    <OutlinedInput placeholder="Your Name" type="text" sx={inputStyle} />
                    <OutlinedInput placeholder="Phone" type="number" sx={inputStyle} />
                    <OutlinedInput placeholder="Email" type="text" sx={inputStyle} />
                    <textarea
                        type="text"
                        rows="5"
                        placeholder="I'm interest in [Listing Single]"
                        className={rightStyle.textareaContact}
                    />
                    <button className={rightStyle.sendBtn}>Send</button>
                </form>
            </Box>
            <FeaturedProperties />
        </Box>
    )
}

export default Right
