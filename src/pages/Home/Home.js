import React from "react";
import styles from "./Home.module.css";
import EmailIcon from "@material-ui/icons/Email";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Home = () => {
  return (
    <div className={styles.home__page}>
      <div className={styles.left__side}>
        <div className={styles.profile__info}>
          <div className={styles.profile__info__greeting}>
            <span>Hello I am</span>
          </div>
          <div className={styles.profile__info__name}>
            <h2>AMAR BESSEDIK</h2>
            <h4>Software Engineer Specialized in Web Technologies</h4>
            <h5>- Technology Stack: MERN (ReactJS favored)</h5>
          </div>
          <ul className={styles.profile__contact__info}>
            <li>
              <EmailIcon className={styles.profile__contact__info__icon} />{" "}
              <span>amar.bessedik@gmail.com</span>
            </li>
            <li>
              <PermPhoneMsgIcon
                className={styles.profile__contact__info__icon}
              />
              <span>215-303-4043</span>
            </li>
            <li>
              <LocationOnIcon className={styles.profile__contact__info__icon} />
              <span> Greater Philadelphia Area, PA United States</span>
            </li>
          </ul>
          <ul className={styles.profile__social__icons}>
            <li>
              <Link to="/">
                <GitHubIcon className={styles.social__icon} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <LinkedInIcon className={styles.social__icon} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <TwitterIcon className={styles.social__icon} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FacebookIcon className={styles.social__icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right__side}>
        <div className={styles.avatar__outer__wrapper}>
          <div className={styles.avatar__inner__wrapper}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
