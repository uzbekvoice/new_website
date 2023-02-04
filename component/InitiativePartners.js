import React from "react";
import styles from "../styles/InitiativePartners.module.css";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function InitiativePartners(props) {  

  const { locale } = useRouter();

  const { partners, data } = props;  
  
  return (
    <div className={styles.initpartners}>
      {data.data
        .filter((p) => p.languages_code === locale)
        .map((value) => {
          return (
            <div key={value.id}>
              <div
                className={styles.black_bg}
              >
                <h3>{value?.partners_title}</h3>
              </div>

              <p className={styles.black_bg_p}>{value?.partners_text}</p>
            </div>
          );
        })}

      <div
        className={styles.sliders + ' initpartners ' + styles.card_bg}
      >
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
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {
            partners?.map(
              ({ id, partner_link, partner_image, partner_title }) => (
                <SwiperSlide className={styles.item} key={id}>
                  <div >
                    <a
                      href={partner_link}
                      target="_blank"
                      className={styles.item}
                    >
                      <img
                        src={`https://admin.uzbekvoice.ai/assets/${partner_image}`} alt='parners img'
                      />
                      <span>{partner_title}</span>
                    </a>
                  </div>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>
    </div>
  );
}
