import React from 'react';
import styles from './NoMatch.module.css';
import { Link } from 'react-router-dom';
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

const NoMatch = () => {
    return (
      <div className={styles.page__not__found}>
        <div className={styles.__404__btn__wrapper}>
          <h2>
            <NotificationImportantIcon className={styles.__404__icon} />
          </h2>
          <h2>404 (PAGE NOT FOUND)</h2>
          <Link to="/">
            <button className={styles.__404__btn}>Home Page</button>
          </Link>
        </div>
      </div>
    );
}

export default NoMatch;
