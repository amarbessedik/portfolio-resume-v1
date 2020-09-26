import React from "react";
import EducationCard from "./EducationCard";
import education from './education';
import styles from "./Experience.module.css";

const Experiences = () => {
  return (
    <div className={styles.experience__page}>
      <div className={styles.education__experience}>
        <h4>Education Experience</h4>
        <div className={styles.education__container}>
          {/* degree, institution, url, year, description */
           education.map(({degree,  institution, url, year, description})=>{
             return(
               <EducationCard 
               degree={degree} 
               institution={institution} 
               url={url}
               year={year}
               description={description}
               />
             )
           })
          }
          
        </div>
      </div>
      <div className={styles.work__experience}>
        <h4>Work Experience</h4>
        <div className={styles.work__experience__container}>
          work experience container
        </div>
      </div>
    </div>
  );
};

export default Experiences;
