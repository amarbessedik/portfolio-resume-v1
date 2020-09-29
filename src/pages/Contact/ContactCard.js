import React from "react";
import styles from "./ContactCard.module.css";

const ContactCard = ({ title, data, icon }) => {
  return (
    <div className={styles.contact__card}>
      <div className={styles.contact__card__icon}>{icon}</div>
      <div className={styles.contact__card__title}><h3>{title}</h3></div>
      <div className={styles.contact__card__data}>
          <ul>
              {data.map((item, index) =>{
                  return <li key={index}>{item}</li>
              })}
          </ul>
      </div>
    </div>
  );
};

export default ContactCard;
