import React from "react";
import styles from "./EducationCard.module.css";
import SchoolIcon from "@material-ui/icons/School";

const EducationCard = ({ degree, institution, url, year, description }) => {
  return (
    <div className={styles.education__card}>
      <h6 className={styles.education__institution}>
        {degree} <a href={url}>{institution}</a>
      </h6>
      <div className={styles.graduation__year}>
        <SchoolIcon className={styles.school__icon} /> {year}
      </div>
      <p className={styles.education__description}>{description}</p>
    </div>
  );
};

export default EducationCard;
