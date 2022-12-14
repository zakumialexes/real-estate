import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ima from "./grid-photo-2.jpg";
import HouseCStyle from "./house-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const HouseCard = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <div className={HouseCStyle.firstSection} style={{ borderRadius: 4 }}>
            <img className={HouseCStyle.houseCardImg} style={{ width: "100%" }} src={ima} />
            <div className={HouseCStyle.layer}></div>
            <div className={HouseCStyle.iconBox}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className={HouseCStyle.iconBox}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxHeight: "50px",
              alignItems: "center",
            }}
          >
            <Box>
              <div className={HouseCStyle.pill}>
                <a>For Rent</a>
              </div>
              <div className={HouseCStyle.pill}>
                <a>Featured</a>
              </div>
            </Box>
            <Box>
              <h4 className={HouseCStyle.price}>
                $34,000<span>/mo</span>
              </h4>
            </Box>
          </Box>
          <span style={{ color: "#ff5a5f", fontSize: "14px" }}>Apartment</span>
          <div className={HouseCStyle.detail}>
            <h3>Renovated Apartment</h3>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> 1421 San Pedro St, Los Angeles, CA 90015
            </p>
          </div>
          <ul className={HouseCStyle.info}>
            <li>Beds: 4</li>
            <li>Baths: 2</li>
            <li> Sq Ft: 5280</li>
          </ul>
          <div className={HouseCStyle.footer}>
            <div>
              <img src={ima} />
              <span>Moe Moe</span>
            </div>
            <span>4 years ago</span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HouseCard;
