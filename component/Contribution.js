import styles from "../styles/Contribution.module.css";
import Image from "next/image";
import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Contribution(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;
  const Responsive = {
    0: {
      items: 1,
      margin: 5,
    },

    780: {
      items: 2,
      margin: 10,
    },

    1024: {
      items: 3,
      margin: 10,
      autoplay: false,
    },

    1200: {
      items: 3,
      margin: 20,
      autoplay: false,
    },

    1400: {
      items: 3,
      margin: 10,
      autoplay: false,
    },
  };
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
                <OwlCarousel
                  responsive={Responsive}
                  loop
                  margin={20}
                  dots={false}
                  autoplay
                  autoplayTimeout={3000}
                >
                  <div className={styles.item}>
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
                  </div>
                  <div className={styles.item}>
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
                  </div>
                  <div className={styles.item}>
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
                  </div>
                </OwlCarousel>
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
