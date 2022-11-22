import Style from "../footer/footer.module.scss"
import {
    faBehance,
    faFacebookF,
    faGoogle,
    faInstagram,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Button, Container, Grid, InputBase, Link, List, ListItem, Typography } from "@mui/material"
import React from "react"
const link = ["About Us", "Terms & Conditions", "User's Guide", "Support Center", "Press Info"]
const contact = ["info.house.com", "Collin Street West,Victoria 8007,Australia", "+1 246-345-0699", "+1 246-345-0695"]

const footerLink = ["Home", "Listings", "Property", "Pages", "Blog", "Contact"]
const social = [faFacebookF, faTwitter, faInstagram, faPinterest, faBehance, faGoogle]
const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "#24324a", color: "#fff" }}>
            <Container
                sx={{
                    p: "80px 0 70px",
                }}
            >
                <Grid container>
                    {/* 1 */}
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        justifyContent="space-between"
                        sx={{ paddingX: { xs: "15px", lg: "0" } }}
                    >
                        <h4>About Site</h4>
                        <Typography sx={{ color: "#8a99b3", fontSize: "14px" }}>
                            We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love.
                            So let’s do this, together.
                        </Typography>
                    </Grid>
                    {/* 2 */}
                    <Grid item xs={12} sm={6} md={5} lg={2} paddingX="15px" sx={{ paddingLeft: { lg: "30px" } }}>
                        <h4>Quick Links</h4>
                        <List disablePadding>
                            {link.map((item, i) => (
                                <ListItem disableGutters key={i}>
                                    <Link className={`${Style.text} ${Style.textHover}`} to="">
                                        {item}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    {/* 3 */}
                    <Grid item xs={12} sm={6} lg={3} paddingX="15px">
                        <h4>Contact Us</h4>
                        <List disablePadding>
                            {contact.map((item, i) => (
                                <ListItem disableGutters key={i}>
                                    <Link className={`${Style.text} ${Style.textHover}`} to="">
                                        {item}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={6} lg={3} paddingX="15px">
                        <h4>Follow Us</h4>
                        <List disablePadding sx={{ display: "flex", gap: { xs: 2, md: 4 } }}>
                            {social.map((item, i) => {
                                return (
                                    <ListItem disableGutters key={i} sx={{ width: "auto" }}>
                                        <Link
                                            className={Style.text}
                                            to=""
                                            sx={{
                                                fontSize: "18px !important",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faBehance} />
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </List>
                        <h4>Subscribe</h4>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1,
                                // flexDirection: { xs: "column", lg: "row" },
                            }}
                        >
                            <InputBase
                                placeholder="Your email"
                                sx={{
                                    backgroundColor: "#354765",
                                    border: "1px solid #354765",
                                    borderRadius: "25px",
                                    color: "#ffffff",
                                    height: "50px",
                                    paddingLeft: " 30px",
                                    width: { xs: "170px", lg: "195px" },
                                }}
                            />
                            <Button
                                sx={{
                                    minWidth: "auto",
                                    backgroundColor: "#354765",
                                    border: " 1px solid #354765",
                                    borderRadius: "50%",
                                    height: "50px",
                                    width: "50px",
                                    color: "#fff",
                                }}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: "#1d293e", padding: "40px 0" }}>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    <Box>
                        <List
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            {footerLink.map((item, i) => (
                                <ListItem
                                    key={i}
                                    sx={{
                                        display: "inline-block",
                                        width: "auto",
                                        padding: "0 5px",
                                    }}
                                >
                                    <Link className={Style.text}> {item}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box>
                        <Typography className={Style.text}>© 2020 Find House. Made with love.</Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer
