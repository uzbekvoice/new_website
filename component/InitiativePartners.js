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
import HomeContent from '../pages/homeapi/static.json'

export default function InitiativePartners(props) {
  const { locale, query, pathname } = useRouter();

  const { partners, status } = props;

  return (
    <div className={styles.initpartners}>
      {HomeContent.partner
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const { title, desc } = HomeContent;
          return (
            <div key={i} className={status === "active"? styles.active : ''}>
              <div
                className={
                  pathname === "/hakaton/[id]"? styles.partnersForHak : styles.black_bg
                }
              >
                <h3>{title}</h3>
              </div>

              <p className={
                  pathname === "/hakaton/[id]"? "" : styles.black_bg_p
                }>{desc}</p>
            </div>
          );
        })}

      <div className={
        pathname !== "/hakaton/[id]"?
        styles.sliders + ' our_goal ' + styles.card_bg: styles.sliders
        }>
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
          {partners.map(
            ({ id, partner_link, partner_image, partner_title }) => (
              <SwiperSlide key={id}>
                <div className={styles.item}>
                  <a
                    href={partner_link}
                    target="_blank"
                    className={styles.item}
                  >
                    <img
                      src={`https://admin.uzbekvoice.ai/assets/${partner_image}`}
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
