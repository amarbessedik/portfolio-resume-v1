import React from "react";
import { tags } from "./tags";
import styles from "./About.module.css";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import web_programming from "../../images/web_programming.jpg";
import freelancing from "../../images/freelancing.jpg";
import consulting from "../../images/consulting.jpg";
import WorkCard from "./WorkCard";

const About = () => {
  return (
    <div className={styles.about__page__wrapper}>
      {/* About me section*/}
      <div className={styles.about__page}>
        <div className={styles.about__image__wrapper}>
          <div className={styles.about__image}></div>
        </div>
        <div className={styles.about__me}>
          <h3>About Me</h3>
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
                        background: `#fff`,
                        color: '#777',
                        border: `1px solid #999`,
                        // boxShadow: `0 0 12px -4px ${color}`,
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
          <Button
            className={styles.download__btn}
            variant="contained"
            color="primary"
          >
            CV/Resume <GetAppIcon className={styles.download__icon} />
          </Button>
        </div>
      </div>

      {/* What I do section*/}
      <div className={styles.what__I__do}>
        <h3>What I do</h3>
        <div className={styles.work__cards__wrapper}>
          <WorkCard title='Web Development' image={web_programming} caption={'lorem'}/>
          <WorkCard title='Freelancing' image={freelancing} caption={'lorem'}/>
          <WorkCard title='Consulting' image={consulting} caption={'lorem'}/>
        </div>
      </div>
    </div>
  );
};

export default About;
