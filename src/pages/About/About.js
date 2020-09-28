import React from "react";
import { tags } from "./tags";
import styles from "./About.module.css";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import web_programming from "../../images/web_programming.jpg";
import freelancing from "../../images/freelancing.jpg";
import consulting from "../../images/consulting.jpg";
import ambition from "../../images/ambition.jpg";
import WorkCard from "./WorkCard";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import FlagIcon from "@material-ui/icons/Flag";

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
                <li key={index}>
                  <span>
                    <button
                      style={{
                        background: `#fff`,
                        color: "#5c6063",
                        border: `1px solid #5c6063`,
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
          <WorkCard
            title="Web Programming"
            image={web_programming}
            caption={"lorem"}
            borderTopColor="#02B3E4"
            icon={<CodeIcon />}
          />
          <WorkCard
            title="Freelancing"
            image={freelancing}
            caption={"lorem"}
            borderTopColor="#FFAE0C"
            icon={<WorkIcon />}
          />
          <WorkCard
            title="Contract Work"
            image={consulting}
            caption={"lorem"}
            borderTopColor="#9F4CDF"
            icon={<HomeWorkIcon />}
          />
          <WorkCard
            title="Ambition"
            image={ambition}
            caption={"lorem"}
            borderTopColor="#51ECD2"
            icon={<FlagIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
