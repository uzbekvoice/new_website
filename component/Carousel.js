import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider(props) {
  const { locale } = useRouter();

  const { HomeContent } = props;
  const Responsive = {
    0: {
      items: 1,
      margin: 5,
    },

    580: {
      items: 2,
      margin: 10,
    },

    1200: {
      items: 3,
      margin: 20,
    },

    1400: {
      items: 3,
      margin: 10,
    },
  };
  return (
    <div className={styles.our_goal}>
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
                <OwlCarousel
                  className={styles.slider}
                  dots={false}
                  responsive={Responsive}
                  loop
                  margin={10}
                  autoplay
                  autoplayTimeout={300000}
                >
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
                  <div className={styles.item}>
                    <Image
                      src="/goals-2.png"
                      width={205}
                      height={205}
                      alt="goal-2"
                      priority={true}
                    />

                    <div className={styles.text}>
                      <h4>{card_title2}</h4>
                      <h5>{card_desc2}</h5>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <Image
                      src="/goals-3.png"
                      width={205}
                      height={205}
                      alt="goal-3"
                      priority={true}
                    />
                    <div className={styles.text}>
                      <h4>{card_title3}</h4>
                      <h5>{card_desc3}</h5>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <Image
                      src="/goals-4.png"
                      width={205}
                      height={205}
                      alt="goal-4"
                      priority={true}
                    />
                    <div className={styles.text}>
                      <h4>{card_title4}</h4>
                      <h5>{card_desc4}</h5>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          );
        })}
    </div>
  );
}
