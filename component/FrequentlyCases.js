import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeContent from '../pages/homeapi/static.json'
import {
  Navigation,
  Scrollbar,
  Pagination,
  A11y,
  Autoplay,
  Controller,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function FrequentlyCases({ data }) {
  const { locale } = useRouter();
  return (
    <div className={styles.our_goal + " our_goal"}>
      {
        data.data.filter((p) => p.languages_code === locale)
          .map(value =>
            <div key={value?.id}>
              <h3>{value?.tts_cases_title}</h3>
              <div className={styles.sliders}>
                <Swiper
                  modules={[
                    Navigation,
                    Scrollbar,
                    Autoplay,
                    A11y,
                    Pagination,
                    Controller,
                  ]}
                  spaceBetween={10}
                  slidesPerView={3}
                  loop={true}
                  navigation
                  autoplay={true}
                  speed={300}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 5,
                    },
                    580: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                  }}
                  scrollbar={{ draggable: true }}
                >
                  {
                    value?.tts_cases.map((item_value, i) =>
                      <SwiperSlide key={i}>
                        <div className={styles.item}>
                          <img
                            src="/case-1.png"
                            alt="case-1"
                          />
                          <div className={styles.text}>
                            <h4>{item_value.case}</h4>
                            <h5>{item_value.case_text}</h5>
                          </div>
                        </div>
                      </SwiperSlide>)
                  }
                  {/* <SwiperSlide>
                    <div className={styles.item}>
                      <img
                        src="/case-2.png"
                        alt="case-1"
                      />
                      <div className={styles.text}>
                        <h4>{card_title2}</h4>
                        <h5>{card_desc2}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.item}>
                      <img
                        src="/case-3.png"
                        alt="case-1"
                      />
                      <div className={styles.text}>
                        <h4>{card_title3}</h4>
                        <h5>{card_desc3}</h5>
                      </div>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          )
      }
    </div>
  );
}
