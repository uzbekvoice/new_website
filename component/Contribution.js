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


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Contribution() {
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
        items:2,
        margin:20,
        
    },
    
    1400:{
        items:3,
        margin:10,
        autoplay: false,
    }
}
  return (
    <div className={styles.content}>
      <h3>Qanday hissa qo'shsa bo'ladi ?</h3>
      <div className={styles.container}>
      <OwlCarousel  responsive={Responsive} loop margin={20} dots={false} autoplay autoplayTimeout={3000}>
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
          <h3>Ovozingiz bilan jumla o'qing</h3>
          <p>
            Ko'rsatilgan matnni o'zbek tilida tovush bilan Mozilla Common Voice
            saytida o'qiymiz. Ishoning, bu eng qiziqarli ishlardan biri
          </p>
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
          <h3>O'qilgan jumlani tinglab tasdiqlang</h3>
          <p>
            O'qilgan jumla va matnilarni to'g'riligini tekshirib tasdiqlang yoki
            uni rad eting. Bu juda oson.
          </p>
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
          <h3>Matnlarni tekshirish</h3>
          <p>
            Yig'ib kiritgan matnlarni tekshirib tasdiqlang. Shundan so'ng bu
            jumla ma'lumotlar bazasiga qo'shiladi.
          </p>
        </div>
          </div>
        
        </OwlCarousel>

      </div>

      <div className={styles.link}>
      <a href="#">Loyihada ishtirok etish</a>
      </div>
      
    </div>
  );
}
