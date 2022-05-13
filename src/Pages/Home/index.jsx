import React from "react";
import styles from "./Home.module.scss";
import { banner } from "../../Assets/images";
import { roadmap, role_people } from "../../Assets/js";
// import { footer } from "../../Assets/images";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.landing_section}>
        <div className={styles.banner}>
          <img src={banner} alt="banner" />
        </div>
      </section>
      <div className={styles.content}>
        <div className={styles.intro_wrapper}>
          <div className={styles.intro_text}>
            <p>
              {" "}
              Exclusive 1/1 Bunny Buddies will be created by the artist to be at
              the center of his collection. These 15 unique items will be
              released after the big reveal. This process will encourage new
              investors to join the project, build the hype and stimulate the
              volume traded. Any future holder has a chance to mint randomly a
              Legendary Bunny.{" "}
            </p>
            <p>
              Exclusive 1/1 Bunny Buddies will be created by the artist to be at
              the center of his collection. These 15 unique items will be
              released after the big reveal. This process will encourage new
              investors to join the project, build the hype and stimulate the
              volume traded. Any future holder has a chance to mint randomly a
              Legendary Bunny.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.roadmap}>
        <div className={styles.roadmap_wrapper}>
          <div className={styles.roadmap_header}>
            <div className={styles.roadmap_title}>
              <span>Roadmap</span>
            </div>
            <div className={styles.roadmap_subtitle}>
              <span>
                Our roadmap 1.0 will be updated according to the project's
                evolution.
              </span>
            </div>
          </div>
          <div className={styles.roadmap_content}>
            {roadmap.map((item) => {
              return (
                <div className={styles.content_box} key={item.id}>
                  <div className={styles.content_box_title}>
                    <span>{item.title}</span>
                  </div>
                  <div className={styles.content_box_text}>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.mission_wrapper}>
          <div className={styles.mission_header}>
            <div className={styles.mission_title}>
              <span>A mission section</span>
            </div>
            <div className={styles.mission_subtitle}>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                ofa type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged.
              </span>
            </div>
          </div>

          <div className={styles.mission_people}>
            {role_people.map((item) => {
              return (
                <div className={styles.people_box}>
                  <div className={styles.people_img}>
                    <img src={item.profile} alt="owner" />
                  </div>
                  <div className={styles.people_details} key={item.id}>
                    <div className={styles.people_role}>{item.role}</div>
                    <div className={styles.people_name}>
                      <span>{item.name}</span>
                    </div>
                    <div className={styles.people_desc}>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
