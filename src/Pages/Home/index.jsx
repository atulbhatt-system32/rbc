import React from "react";
import styles from "./Home.module.scss";
import {
  banner,
  girl1,
  girl2,
  arrowDown,
  owner,
  plus,
} from "../../Assets/images";
import { roadmap, role_people } from "../../Assets/js";
import lady from "../../Assets/video/lady.mp4";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

const Carousel1 = () => {
  return (
    <div className={styles.carousel_box}>
      <img src={girl1} alt="girl1" />
    </div>
  );
};
const Carousel2 = () => {
  return (
    <div className={styles.carousel_box}>
      <img src={girl2} alt="girl2" />
    </div>
  );
};
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
        <div className={styles.arrow_img}>
          <img src={arrowDown} alt="down-arrow" />
        </div>
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
            <div className={styles.content_box_wrap}>
              {roadmap.map((item, index) => {
                return (
                  <div className={styles.box_circle}>
                    <div className={styles.circle} num={item.id}></div>
                    <div
                      className={`${styles.content_box} ${
                        index === roadmap.length - 1 && styles.pd_0
                      } `}
                      key={item.id}
                    >
                      <div className={styles.content_box_title}>
                        <span>{item.title}</span>
                      </div>
                      <div className={styles.content_box_text}>
                        <span>{item.text}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* VIDEO DESKTOP ONLY */}
        <div className={styles.roadmap_video_desktop}>
          {/* <video src={lady} autoplay></video> */}

          <video autoPlay muted loop>
            <source src={lady} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            <div className={styles.mission_owner}>
              <div className={styles.owner_box}>
                <div className={styles.owner_img}>
                  <img src={owner} alt="owner" />
                </div>
                <div className={styles.owner_details}>
                  <div className={styles.owner_role}>owner</div>
                  <div className={styles.owner_name}>
                    <span>Name Surname</span>
                  </div>
                  <div className={styles.owner_desc}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mission_other}>
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
        </div>
      </section>

      <section className={styles.carousel}>
        <div className={styles.carousel_wrapper}>
          {/* Mobile */}
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            visibleSlides={2}
            orientation="horizontal"
            autoPlay={true}
            isPlaying={true}
            interval={1500}
            className={styles.mobile}
          >
            <Slider>
              <Slide index={0}>
                <Carousel1 />
              </Slide>
              <Slide index={1}>
                {" "}
                <Carousel2 />
              </Slide>
              <Slide index={2}>
                {" "}
                <Carousel1 />
              </Slide>
              <Slide index={3}>
                {" "}
                <Carousel2 />
              </Slide>
            </Slider>
          </CarouselProvider>
          {/* Desktop */}
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={12}
            visibleSlides={4}
            orientation="horizontal"
            autoPlay={true}
            isPlaying={true}
            interval={1500}
            className={styles.desktop}
            playDirection="forward"
          >
            <Slider>
              {[...Array(12).keys()].map((item, index) => {
                return index % 2 === 0 ? (
                  <Slide index={index} key={item}>
                    <Carousel1 />
                  </Slide>
                ) : (
                  <Slide index={index} key={item}>
                    <Carousel2 />
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={12}
            visibleSlides={4}
            orientation="horizontal"
            autoPlay={true}
            isPlaying={true}
            interval={1500}
            className={styles.desktop}
            playDirection="backward"
          >
            <Slider>
              {[...Array(12).keys()].map((item, index) => {
                return index % 2 === 0 ? (
                  <Slide index={index} key={item}>
                    <Carousel1 />
                  </Slide>
                ) : (
                  <Slide index={index} key={item}>
                    <Carousel2 />
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
        </div>
      </section>
      <section className={styles.question}>
        <div className={styles.question_wrap}>
          <div className={styles.question_head}>
            <span>faq</span>
          </div>
          <div className={styles.question_text}>
            <p>
              After collaborating with major Hip Hop and Rap celebrities,
              Rhabbitz is joining forces with entrepreneurs,
            </p>
          </div>
          <div className={styles.question_box}>
            <div className={styles.asked_question}>
              <p className={styles.question_one}>Why should I get feedback?</p>
              <img src={plus} alt="plus" />
            </div>
            <div className={styles.asked_question}>
              <p className={styles.question_two}>
                My script doesn’t fit your packages. What should I do?
              </p>
              <img src={plus} alt="plus" />
            </div>
            <div className={styles.asked_question}>
              <p className={styles.question_three}>
                I work as part of a production company and I’d like your help.
                Is this something you can offer?
              </p>
              <img src={plus} alt="plus" />
            </div>
            <div className={styles.asked_question}>
              <p className={styles.question_four}>
                Do you offer one-off script notes?
              </p>
              <img src={plus} alt="plus" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
