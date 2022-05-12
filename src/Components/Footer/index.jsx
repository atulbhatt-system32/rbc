import React from "react";
import { footer } from "../../Assets/images/index";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrap}>
        <div className={styles.footer_img_wrap}>
          <img src={footer} alt="footer-img" />
        </div>
        <div className={styles.footer_content_wrap}>
          <div className={styles.content_head}>
            <span>Rubensian Beauties Club</span>
          </div>
          <div className={styles.content_btns}>
            <button>Mint</button>
            <button>Contact us</button>
          </div>
          <div className={styles.content_links}>
            <a href="#">NFT Ownership License button</a>
            <a href="#">Terms of Conditions</a>
            <a href="#">Opensea</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
