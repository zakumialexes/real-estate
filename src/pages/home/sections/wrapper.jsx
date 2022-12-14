import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

const Heading = styled(Box)({
    display: "grid",
    placeItems: "center",
    textAlign: "center",
    color: "#777777",
    lineHeight: 1.2,
    margin: "40px 0 50px 0",
})

const Wrapper = ({ color, children, title, content }) => {
    const Wrapper = styled(Box)({
        backgroundColor: color,
        width: "100%",
        height: "fit-content",
        display: "grid",
        placeItems: "center",
        padding: "30px 15px",
    })

    return (
        <Wrapper>
            <Heading>
                <Typography variant="h4" color="#484848" lineHeight="1.8rem">
                    {title}
                </Typography>
                <Typography variant="body1" lineHeight="1.8rem">
                    {content}
                </Typography>
            </Heading>
            {children}
        </Wrapper>
    )
}
export { Heading }
export default Wrapper
