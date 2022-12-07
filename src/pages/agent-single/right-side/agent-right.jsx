import React from "react";
import FeaturedProperties from "../../agent-list/right-side/featured-properties/featured-properties";
import RecentlyViewed from "../../agent-list/right-side/recently-viewed/recently-viewed";
import ContactForm from "../contact-form/contact-form";
import AgentRStyle from "./agent-right.module.scss";

const AgentRight = () => {
  return (
    <div className={AgentRStyle.container}>
      <ContactForm />
      <FeaturedProperties />
      <RecentlyViewed />
    </div>
  );
};

export default AgentRight;
