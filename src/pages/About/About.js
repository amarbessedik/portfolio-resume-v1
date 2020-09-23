import React from "react";
import {tags} from './tags';
import styles from "./About.module.css";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";


const About = () => {
  return (
    <div className={styles.about__page}>
      <div className={styles.about__image}></div>
      <div className={styles.about__me}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          dolores error, repellat perferendis dignissimos temporibus eius
          libero, quam at, alias unde. Eligendi enim nam cum facere ipsa optio
          exercitationem doloremque.
        </p>
        <ul>
          {tags.map(({ name, color }, index) => {
            return (
              <li>
                <span>
                  <button
                    style={{
                      background: `${color}`,
                      border: `2px solid ${color}`,
                      boxShadow: `0 0 12px -4px ${color}`,
                    }}
                    className={styles.tag__btn}
                  >
                    {name}
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
        <Button className={styles.download__btn} variant="outlined" color="primary">CV/Resume <GetAppIcon className={styles.download__icon}/></Button>
      </div>
    </div>
  );
};

export default About;
