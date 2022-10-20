import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, A11y, Autoplay , Controller} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Slider(props) {
  const { locale } = useRouter();

  const { HomeContent } = props;
  return (
    <div className={styles.our_goal + " our_goal"}>
      {HomeContent.maqsad
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const {
            title,
            description,
            card_title,
            card_title2,
            card_title3,
            card_title4,
            card_desc,
            card_desc2,
            card_desc3,
            card_desc4,
          } = HomeContent;
          return (
            <div key={i}>
              <h3>{title}</h3>
              <p>{description}</p>

              <div className={styles.sliders}>
                <Swiper
                  modules={[Navigation, Scrollbar, Autoplay, A11y, Pagination, Controller]}
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
                  <SwiperSlide>
                    <div className={styles.item}>
                      <Image
                        src="/goals-1.png"
                        width={205}
                        height={205}
                        
                        alt="goal-1"
                        priority={true}
                      />
                      <div className={styles.text}>
                        <h4>{card_title}</h4>
                        <h5>{card_desc}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.item}>
                      <Image
                        src="/goals-2.png"
                        width={205}
                        height={205}
                        alt="goal-1"
                        priority={true}
                      />
                      <div className={styles.text}>
                        <h4>{card_title2}</h4>
                        <h5>{card_desc2}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.item}>
                      <Image
                        src="/goals-3.png"
                        width={205}
                        height={205}
                        alt="goal-1"
                        priority={true}
                      />
                      <div className={styles.text}>
                        <h4>{card_title3}</h4>
                        <h5>{card_desc3}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.item}>
                      <Image
                        src="/goals-4.png"
                        width={205}
                        height={205}
                        alt="goal-1"
                        priority={true}
                      />
                      <div className={styles.text}>
                        <h4>{card_title4}</h4>
                        <h5>{card_desc4}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          );
        })}
    </div>
  );
}
