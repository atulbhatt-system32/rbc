import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.landing_section}>
        <div className={styles.banner}></div>
      </section>
    </div>
  );
}
