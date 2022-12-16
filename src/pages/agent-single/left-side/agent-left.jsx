import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AgentLStyle from "./agent-left.module.scss";
import AgentCard from "../../agent-list/agent-card/agent-card";
import AgentDetail from "../agent-detail/agent-detail";

const agent = {
  name: "Zuzu Parlar Pakulla",
  phoneNumber: {
    office: "134 456 789",
    mobile: "982 123 423",
    fax: "234 322 624",
  },
  email: "palasd2dhouse.com",
  type: "agent",
  listing: 2,
  photo: "/images/agents/agent-2.jpg",
};

const AgentLeft = () => {
  return (
    <div className={AgentLStyle.container}>
      <div className={AgentLStyle.header}>
        <Breadcrumbs>
          <Link href="/" color="#555555">
            Home
          </Link>
          <Typography sx={{ color: "#ff5a5f" }}>Agent Single</Typography>
        </Breadcrumbs>
        <h1 className={AgentLStyle.headerText}>Christopher Pakulla</h1>
      </div>

      <AgentCard agent={agent} />

      <AgentDetail />
    </div>
  );
};

export default AgentLeft;
