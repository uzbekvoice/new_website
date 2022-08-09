import styles from "../styles/Contribution.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination, A11y, Autoplay , Controller} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Contribution(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;
  
  return (
    <div className={styles.content}>
      {HomeContent.contribution
        .filter((p) => p.languages_code === locale)
        .map((HomeContent, i) => {
          const {
            title,
            card_title,
            card_title2,
            card_title3,
            card_desc,
            card_desc2,
            card_desc3,
            button,
          } = HomeContent;
          return (
            <div key={i}>
              <h3>{title}</h3>

              <div className={styles.container}>
                <Swiper
                  modules={[Navigation, Scrollbar, Autoplay, A11y, Pagination, Controller]}
                  spaceBetween={10}
                  slidesPerView={3}
                  loop={true}
                  // navigation
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
                    {/* <div className={styles.item}> */}
                      <div className={styles.card}>
                        <div className={styles.image}>
                          <Image
                            src="/works-img1.png"
                            width={65}
                            height={65}
                            alt="Microphone"
                          />
                        </div>
                        <h3>{card_title}</h3>
                        <p>{card_desc}</p>
                      </div>
                    {/* </div> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <div className={styles.item}> */}
                      <div className={styles.card}>
                        <div className={styles.image}>
                          <Image
                            src="/works-img2.png"
                            width={65}
                            height={65}
                            alt="Microphone"
                          />
                        </div>
                        <h3>{card_title2}</h3>
                        <p>{card_desc2}</p>
                      </div>
                    {/* </div> */}
                  </SwiperSlide>
                  <SwiperSlide>
                    {/* <div className={styles.item}> */}
                      <div className={styles.card}>
                        <div className={styles.image}>
                          <Image
                            src="/works-img3.png"
                            width={65}
                            height={65}
                            alt="Microphone"
                          />
                        </div>
                        <h3>{card_title3}</h3>
                        <p>{card_desc3}</p>
                      </div>
                    {/* </div> */}
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles.link}>
                <a href="#">{button}</a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
