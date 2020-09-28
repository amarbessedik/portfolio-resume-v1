import React, { useState } from 'react';
import styles from './WorkCard.module.css';
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";

const WorkCard = ({title, image, caption, borderTopColor, icon}) => {
    const [expand, setExpand] = useState(false);
    const style = {
      color: borderTopColor,
    }

    const handleClick = () =>{
      setExpand(!expand);
    }

    return (
      <div
        style={{ borderTop: `3px solid ${borderTopColor}` }}
        className={styles.work__card}
      >
        <div
          style={{
            display: expand ? "none" : "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={style} className={styles.card__icon}>
            {icon}
          </div>
          <h5 style={style}>{title}</h5>
          <div className={styles.work__card__image}>
            <img src={image} alt="" />
            <div className={styles.image__overlay}></div>
          </div>
        </div>
        <div className={styles.card__caption__container}>
          <div
            onClick={handleClick}
            className={styles.expand__btn__container}
          >
            {!expand ? (
              <UnfoldMoreIcon className={styles.unfold__more__icon} />
            ) : (
              <CloseIcon className={styles.unfold__less__icon} />
            )}
          </div>
          <div
            style={{ display: expand ? "block" : "none" }}
            className={styles.card__caption__text}
          >
            <p>{caption}</p>
          </div>
        </div>
      </div>
    );
}

export default WorkCard;
