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
        <OwlCarousel className={styles.slider} loop margin={10} responsive={Responsive} autoplay autoplayTimeout={2100}>
          <div className={styles.item} >
            <Image src="/partners1.png" width={296} height={296} alt="goal-1" />
          
          </div>
          <div className={styles.item}>
            <Image src="/partners2.png" width={296} height={296} alt="goal-2" />

          </div>
          <div className={styles.item}>
            <Image src="/partners3.png" width={296} height={296} alt="goal-3" />
         
          </div>
          <div className={styles.item}>
            <Image src="/partners5.png" width={296} height={296} alt="goal-4" />
        
          </div>
       
        </OwlCarousel>
      </div>
    </div>
  );
}
