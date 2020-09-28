import React from "react";
import styles from "./PriceTag.module.css";
import { Link } from 'react-router-dom';

const PriceTag = ({ title, workType, price, icon, options }) => {
  return (
    <div className={styles.price__tag}>
      <div style={{ color: "#0BCEAF" }} className={styles.price__tag__icon}>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>I am available for {workType}</p>
      <h4>{price}</h4>
      <ul>
        {options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>
      <div className={styles.hire__me__btn__container}>
          <Link className={styles.hire__me__btn} to='/'>
              Hire Me
          </Link>
      </div>
    </div>
  );
};

export default PriceTag;
