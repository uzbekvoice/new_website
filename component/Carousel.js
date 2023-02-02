import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
// import HomeContent from '../pages/homeapi/static.json'
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

export default function Slider({ data }) {
  const { locale } = useRouter();

  const getImage = (title) => {
    switch (title) {
      case 'Audio transkripsiya': return <img src='case-1.png' alt='img' />
      case 'Diktant': return <img src='case-2.png' alt='img' />
      case 'Ovozli buyruqlar': return <img src='case-3.png' alt='img' />
      case 'Ojizlar uchun qulaylik': return <img src='goals-1.png' alt='img' />
      case 'Onlayn qidiruvlar': return <img src='sun.png' alt='img' />
      default: return <img src='chat-text.png' alt='img' />
    }
  }

  return (
    <div className={styles.our_goal + " our_goal"}>
      {
        data?.data.filter((p) => p.languages_code === locale)
          .map(value =>
            <div key={value.id}>
              <h3>{value?.stt_cases_title}</h3>
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
                    value.stt_cases.map((item_value, i) =>
                      <SwiperSlide key={i}>
                        <div className={styles.item}>
                          {getImage(item_value.case)}
                          <div className={styles.text}>
                            <h4>{item_value?.case}</h4>
                            <h5>{item_value?.case_text}</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }                  
                </Swiper>
              </div>
            </div>
          )
      }
    </div>
  );
}
