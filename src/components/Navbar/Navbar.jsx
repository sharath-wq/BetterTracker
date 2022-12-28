import styles from "../../styles/Navbar/Navbar.module.scss";

// components
import ListItemLinks from "./ListItemLink";

// Utils
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Tracker</div>
        </Link>
      </div>

      {/* NAV */}
      <nav>
        <ul>
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
  );
};

export default Navbar;
