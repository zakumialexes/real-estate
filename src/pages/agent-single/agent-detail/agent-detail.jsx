import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AgentDStyle from "./agent-detail.module.scss";
import HouseCard from "../house-card/house-card";
import ReviewSection from "../review-section/review-section";

export default function AgentDetail() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", boxShadow: 1, borderRadius: 1 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", px: { xs: 2, md: 3 } }}>
          <TabList
            onChange={handleChange}
            sx={{
              "& button.Mui-selected ": { color: "#ff5a5f" },
              "& button.Mui-selected span": { color: "transparent" },
              "& button": { fontWeight: "bolder" },
            }}
            TabIndicatorProps={{ style: { background: "#ff5a5f" } }}
            aria-label="lab API tabs example"
          >
            <Tab label="Description" className={AgentDStyle.tab} value="1" />
            <Tab label="Listing" className={AgentDStyle.tab} value="2" />
            <Tab label="Reviews" className={AgentDStyle.tab} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <p className={AgentDStyle.detail}>
            Evans Tower very high demand corner junior one bedroom plus a large balcony boasting
            full open NYC views. You need to see the views to believe them. Mint condition with new
            hardwood floors. Lots of closets plus washer and dryer. Fully furnished. Elegantly
            appointed condominium unit situated on premier location. PS6. The wide entry hall leads
            to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble
            bathroom apartment has great windows. Despite the interior views, the apartments
            Southern and Eastern exposures allow for lovely natural light to fill every room. The
            master suite is surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
          </p>
        </TabPanel>
        <TabPanel value="2" sx={{ px: 1 }}>
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </TabPanel>
        <TabPanel value="3" sx={{ px: 0 }}>
          <ReviewSection />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
