import React from "react";
import PriceTag from "./PriceTag";
import styles from "./Pricing.module.css";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import AssignmentIcon from "@material-ui/icons/Assignment";

const Pricing = () => {
  return (
    <div className={styles.pricing__page}>
      <h3>Salary &amp; Componsation</h3>
      <div className={styles.price__tags__container}>
        <PriceTag
          title="Full-time"
          workType="full-time work"
          price="Componsation TBD"
          options={["Website Development", "Website Redesign", "App Maintenance", "App Design", "App Testing"]}
          icon={<CalendarTodayIcon />}
        />
        <PriceTag
          title="Fixed Price Project"
          workType="contract work"
          price="$500 - $10,000+"
          options={["Website Development", "Website Redesign", "App Maintenance", "App Design", "App Testing"]}
          icon={<AssignmentIcon />}
        />
        <PriceTag
          title="Hourly"
          workType="hourly work"
          price="$45/Hr"
          options={["Contract Work", "Website Redesign", "App Maintenance", "App Design", "App Testing"]}
          icon={<HourglassEmptyIcon />}
        />
      </div>
    </div>
  );
};

export default Pricing;
