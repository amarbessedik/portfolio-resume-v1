import React from 'react';
import styles from './WorkCard.module.css';

const WorkCard = ({title, image, caption}) => {
    return (
      <div className={styles.work__card}>
        <h5>{title}</h5>
        <div className={styles.work__card__image}>
          <img src={image} alt="" />
        </div>
        <p>
          {caption}
        </p>
      </div>
    );
}

export default WorkCard;
