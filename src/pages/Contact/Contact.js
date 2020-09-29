import React from "react";
import styles from "./Contact.module.css";
import ContactCard from "./ContactCard";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div className={styles.contact__page}>
      <div className={styles.contact__page__landing}>
        <h1>Get In Touch</h1>
      </div>
      <div className={styles.contact__cards__container}>
        <ContactCard
          title="Dial Number: "
          data={["(215) 303-4043", "Ask for Mark"]}
          icon={<PermPhoneMsgIcon />}
        />
        <ContactCard
          title="Send an email to: "
          data={["amar.bessedik@gmail.com", "\0"]}
          icon={<EmailIcon />}
        />
      </div>
    </div>
  );
};

export default Contact; 
