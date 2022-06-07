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

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  const Responsive ={
    0:{
      items:1,
      margin:5,
    },

    580:{
        items:2,
        margin:10,
    },

    1200:{
        items:3,
        margin:20,
    },
    
    1400:{
        items:3,
        margin:10,
    }
}
  return (
    <div className={styles.our_goal}>
      <h3>O'zi maqsad nima?</h3>

      <p>
        Dasturchilarga, tadqiqotchilarga, startaplarga ochiq va bepul nutq
        ma'lumotlar bazasi yetishmasligi katta muammo.
      </p>
      <div className={styles.sliders}>
        <OwlCarousel className={styles.slider} responsive={Responsive} loop margin={10} autoplay autoplayTimeout={3000}>
          <div className={styles.item}>
            <Image src="/goals-1.png" width={205} height={205} alt="goal-1" />
            <div className={styles.text}>
              <h4>Ochiq manba</h4>
              <h5>
                {" "}
                Nutq va ovoz ma'lumot bazasini ochiq yig'ish (open-source)
              </h5>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/goals-2.png" width={205} height={205} alt="goal-2" />

            <div className={styles.text}>
              <h4>Tadqiqot</h4>
              <h5>
                Suniy intelekt sohasida Ilmiy hamkorlik va tadqiqot imkonini
                yaratish
              </h5>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/goals-3.png" width={205} height={205} alt="goal-3" />
            <div className={styles.text}>
              <h4>Ijodkorlik</h4>
              <h5>
                Suniy intelekt sohadagi dasturchilarga ijodkorlik uchun yo'lini
                ochish
              </h5>
            </div>
          </div>
          <div className={styles.item}>
            <Image src="/goals-4.png" width={205} height={205} alt="goal-4" />
            <div className={styles.text}>
              <h4>Jamoatchilik</h4>
              <h5>
                Hatti-haraktimizni jamoatchilik ishtroki bilan amalga oshirish{" "}
              </h5>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
