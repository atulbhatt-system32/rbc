import React from "react";
import styles from "./Navbar.module.scss";
import { twitter, discord, medium } from "../../Assets/images/index";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_left}>
        <a href="*">Roadmap</a>
        <a href="*">Mission</a>
        <a href="*">Team</a>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.mint_btn_wrap}>
          <button>Mint</button>
        </div>
        <div className={styles.social_links}>
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
