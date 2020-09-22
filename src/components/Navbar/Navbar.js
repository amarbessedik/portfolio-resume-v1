import React, { useState, useEffect } from "react";
import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [desktopMenu, setDesktopMenu] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  const handleResize = () => {
    window.innerWidth <= 768 ? setDesktopMenu(false) : setDesktopMenu(true);
  };

  const handleScroll = () => {
    window.scrollY > 75 ? setNavbarShadow(true) : setNavbarShadow(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  const generateMenuItems = (menuItems, clickedOn) =>{
    return menuItems.map(({ title, url }, index) => {
      return (
        <li key={index} className={styles.nav__link}>
          <Link onClick={clickedOn ? handleClick : ()=>{}} to={url}>{title}</Link>
        </li>
      );
    });
  }

  return (
    <nav
      style={{ boxShadow: navbarShadow ? "0 0 12px -4px #000" : "none" }}
      className={styles.navbar}
    >
      <div className={styles.logo}>logo</div>
      {desktopMenu ? (
        <div className={styles.nav__links}>
          <ul>{generateMenuItems(menuItems, clicked)}</ul>
        </div>
      ) : (
        <div className={styles.sidemenu}>
          <div onClick={handleClick} className={styles.sidemenu__icon}>
            {clicked ? (
              <CloseIcon className={styles.menu__icon} />
            ) : (
              <MenuIcon className={styles.menu__icon} />
            )}
          </div>
          <div className={styles.sidemenu__wrapper}>
            <ul style={{ transform: clicked ? "translateX(0)" : "translateX(-100%)"}}>
              {generateMenuItems(menuItems, clicked)}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
