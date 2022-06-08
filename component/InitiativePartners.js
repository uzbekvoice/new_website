import React from "react";
import styles from "../styles/InitiativePartners.module.css";
import Image from 'next/image';
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
export default function InitiativePartners() {
    const Responsive ={
        0:{
          items:1.2,
          margin:5,
        },

        580:{
            items:2,
            margin:10,
        },
        
        900:{
            items:3,
            margin:20,
        },

        1200:{
            items:4,
            margin:20,
        },
        
        1400:{
            items:4,
            margin:10,
        }
    }
  return (
    <div className={styles.initpartners}>
      <h3>Tashabus hamkorlari</h3>
      <p>
        UzbekVoice.ai jamoasi va hamkorlari ochiq fikrlovchilarni birlashtiradi
        kraudsorsing korporativ, institutsional va ilmiy hamkorlik
      </p>
      <div className={styles.sliders}>
        <OwlCarousel className={styles.slider} loop margin={10} dots={false} responsive={Responsive} autoplay autoplayTimeout={3000}>
          <div className={styles.item} >
            <img src="/partners1.png"  alt="partners1" />
          
          </div>
          <div className={styles.item}>
            <img src="/partners2.png" alt="partners2" />

          </div>
          <div className={styles.item}>
            <img src="/partners3.png"  alt="partners3" />
         
          </div>
          <div className={styles.item}>
            <img src="/partners5.png"  alt="partners4" />
        
          </div>
       
        </OwlCarousel>
      </div>
    </div>
  );
}
