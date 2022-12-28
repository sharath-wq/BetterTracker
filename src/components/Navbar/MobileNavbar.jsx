// styels
import styles from "../../styles/Navbar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

// componetns
import ListItemLinks from "./ListItemLink";

// utils
import { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <div className={styles.container}>
      <div>
        {/* BARS */}
        <div
          className={`${styles.iconContainer} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>
        {/* NAV */}
        <nav className={navOpen ? styles.navActive : undefined}>
          <ul>
            {/* TIMES */}
            <div
              className={`${styles.iconContainer} ${styles.times}`}
              onClick={() => setNavOpen(false)}
            >
              <FaTimes />
            </div>

            {/* MENU */}
            {/* HOME */}
            <ListItemLinks url="">
              <h3>Home</h3>
            </ListItemLinks>

            {/* CATEGORIES */}
            <ListItemLinks url="categories">
              <h3>Categories</h3>
            </ListItemLinks>

            {/* TRANSACTIONS */}
            <ListItemLinks url="transactions">
              <h3>Transactions</h3>
            </ListItemLinks>

            {/* WALLET */}
            <ListItemLinks url="wallet">
              <h3>Wallet</h3>
            </ListItemLinks>

            {/* PROFILE */}
            <div className={styles.mobileMenuLinks}>
              <ListItemLinks url="profile">
                <h3>Profile</h3>
              </ListItemLinks>
            </div>

            {/* SETTINGS */}
            <div className={styles.mobileMenuLinks}>
              <ListItemLinks url="settings">
                <h3>Settings</h3>
              </ListItemLinks>
            </div>
            <ListItemLinks url="logout">
              <h3>Logout</h3>
            </ListItemLinks>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
