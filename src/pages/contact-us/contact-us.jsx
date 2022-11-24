import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import Style from "./contact.module.scss";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const inputStyle = {
  width: { xs: "100%", md: "47%" },
  marginBottom: "20px",
  padding: "0",
  maxHeight: "50px",
};
const links = [
  { title: "Address", des: "2301 Ravenswood Rd Madison,WI 53711" },
  { title: "Phone", des: "(315) 905-2321" },
  { title: "Mail", des: "info@shwerealestate.com" },
  { title: "Skype", des: "shwerealestate.com" },
];
const socialLinks = [
  {
    icon: faFacebookF,
    color: "#3b5998",
  },
  {
    icon: faTwitter,
    color: " #00acee",
  },
  {
    icon: faInstagram,
    color: "#f09433 ",
  },
  {
    icon: faGoogle,
    color: "#DB4437 ",
  },
  {
    icon: faPinterest,
    color: "#E60023",
  },
];

const Map = () => {
  return (
    <div style={{ maxHeight: "600px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488797.7902027578!2d95.90136974407314!3d16.839609799954744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1669303567607!5m2!1sen!2ssg"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleClick = async () => {};

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "#f7f7f7" }}>
        <Container maxWidth="lg" sx={{ padding: "60px 0" }}>
          <Grid container>
            <Grid item xs={12} lg={8} paddingX="15px" marginBottom="40px">
              <Box sx={{ padding: "30px", borderRadius: 2, bgcolor: "#fff" }}>
                <Typography
                  variant="h4"
                  fontSize="18px"
                  fontWeight="bold"
                  marginBottom="20px"
                >
                  Send Us An Email
                </Typography>
                <Typography fontSize="14px" marginBottom="30px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. Maecenas mattis enim at
                  arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                  malesuada eu libero sit amet, congue aliquam leo. In hac
                  habitasse platea dictumst.
                </Typography>
                <Stack
                  sx={{
                    flexDirection: { md: "row", xs: "column" },
                    flexWrap: "wrap",
                    gap: "10px",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <OutlinedInput
                    onChange={handleChange}
                    value={input.name}
                    sx={inputStyle}
                    placeholder="Name"
                    type="text"
                    id="name"
                  />

                  <OutlinedInput
                    onChange={handleChange}
                    value={input.email}
                    sx={inputStyle}
                    placeholder="Email"
                    type="email"
                    id="email"
                  />

                  <OutlinedInput
                    onChange={handleChange}
                    value={input.phone}
                    sx={inputStyle}
                    placeholder="Phone"
                    type="text"
                    id="phone"
                  />

                  <OutlinedInput
                    onChange={handleChange}
                    value={input.subject}
                    sx={inputStyle}
                    placeholder="Subject"
                    type="text"
                    id="subject"
                  />

                  <OutlinedInput
                    onChange={handleChange}
                    value={input.message}
                    multiline
                    fullWidth
                    minRows={3}
                    sx={{ marginBottom: "20px" }}
                    placeholder="Your Message"
                    id="message"
                  />
                </Stack>
                <Button
                  onClick={handleClick}
                  sx={{
                    width: "200px",
                    height: "50px",
                    bgcolor: "#ff5a5f",
                    color: "#fff",
                    transition: "all .5s ",
                    borderRadius: 2,
                    boxShadow: "0px 1px 4px 0px rgb(255 90 95 / 30%)",
                    "&:hover": {
                      bgcolor: "#ff5a5f",
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4} paddingX="15px">
              <Box sx={{ padding: "30px", borderRadius: 2, bgcolor: "#fff" }}>
                <Typography
                  variant="h4"
                  fontSize="18px"
                  fontWeight="bold"
                  marginBottom="20px"
                >
                  Contact Us
                </Typography>
                <Typography fontSize="14px" marginBottom="30px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. habitasse platea
                  dictumst.
                </Typography>

                {links.map((link, i) => (
                  <React.Fragment key={i}>
                    <Typography
                      variant="h4"
                      fontSize="18px"
                      marginBottom="5px"
                      fontWeight="bold"
                    >
                      {link.title}
                    </Typography>
                    <Typography fontSize="14px" marginBottom="20px">
                      {link.des}
                    </Typography>
                  </React.Fragment>
                ))}
                <Typography
                  variant="h4"
                  fontSize="18px"
                  marginBottom="5px"
                  fontWeight="bold"
                >
                  Follow Us
                </Typography>
                <List
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {socialLinks.map((link, i) => (
                    <ListItem
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "45px",
                        width: "45px",
                        borderRadius: 2,
                        bgcolor: "#f7f7f7",

                        transition: "all .5s ",
                        "& a": {
                          color: "#484848",
                        },
                        "&:hover": {
                          bgcolor: link.color,
                        },
                        "&:hover a": {
                          color: "#fff !important",
                        },
                      }}
                    >
                      <Link>
                        <FontAwesomeIcon icon={link.icon} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Map />
    </>
  );
};

export default Contact;
