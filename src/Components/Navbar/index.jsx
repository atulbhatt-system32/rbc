import React from "react";
import styles from "./Navbar.module.scss";
import { twitter, discord, medium } from "../../Assets/images/index";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_left}>
        <span>Roadmap</span>
        <span>Mission</span>
        <span>Team</span>
      </div>
      <div className={styles.nav_right}>
        <button>Mint</button>
        <div className={styles.content_social}>
          <a href="*">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="*">
            <img src={discord} alt="discord" />
          </a>
          <a href="*">
            <img src={medium} alt="medium" />
          </a>
        </div>
      </div>
    </nav>
  );
}
