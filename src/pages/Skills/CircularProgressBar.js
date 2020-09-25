import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CircularProgressBar.module.css";

const CircularProgressBar = ({title, value, text}) => {
    return (
      <div className={styles.circular__progress__bar__container}>
        <h5>{title}</h5>
        <CircularProgressbar
          className={styles.circular__progress__bar}
          value={value}
          text={`${text}%`}
          styles={buildStyles({
            textSize: "22px",
            pathColor: `#69DDD3`,
            textColor: "#000",
          })}
        />
      </div>
    );
}

export default CircularProgressBar;
