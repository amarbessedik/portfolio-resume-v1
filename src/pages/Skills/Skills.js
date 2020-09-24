import React from 'react';
import styles from './Skills.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { skills } from './data';
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
    return (
      <div className={styles.skills__page}>
        <div className={styles.technical__skills}>
          <h2>Technical Skills</h2>
          {skills.map(({ name, percentage }) => {
            return (
              <div className={styles.progress__bar_wrapper}>
                <ProgressBar
                  className={styles.progress__bar}
                  variant="warni"
                  now={percentage}
                  label={name}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.professional__skills}>
          <h1>Professional skills</h1>
        </div>
      </div>
    );
}

export default Skills;
