import React from "react";
import styles from "./Skills.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { skills } from "./data";
import ProgressBar from "react-bootstrap/ProgressBar";
import CircularProgressBar from "./CircularProgressBar";

const Skills = () => {
  return (
    <div className={styles.skills__page}>
      <div className={styles.technical__skills}>
        <h3>Technical Skills</h3>
        {skills.map(({ name, percentage }) => {
          return (
            <div className={styles.progress__bar_wrapper}>
              <>
                <style type="text/css">
                  {`
                    .bg-info-custom{
                      background-color: #9BE8E2;
                    }
                 `}
                </style>
                <ProgressBar
                  className={styles.progress__bar}
                  variant="info-custom"
                  now={percentage}
                  label={name}
                />
              </>
            </div>
          );
        })}
      </div>
      <div className={styles.professional__skills}>
        <h3>Professional skills</h3>
        <div className={styles.circular__progressBar__wrapper}>
          <CircularProgressBar title="Creativity" value={80} text="80" />
          <CircularProgressBar title="Hard Work" value={90} text="90" />
          <CircularProgressBar title="Great Service" value={95} text="95" />
          <CircularProgressBar title="Team Work" value={90} text="90" />
          <CircularProgressBar title="Learning Curve" value={85} text="85" />
          <CircularProgressBar title="Communication" value={80} text="80" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
