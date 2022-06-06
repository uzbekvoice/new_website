import React from "react";
import styles from "../styles/OurTeam.module.css";
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
export default function OurTeam() {
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
    <div className={styles.ourteam}>
         <h3>Uzbekvoice Jamoasi</h3>
         <div className={styles.sliders}>
        <OwlCarousel className={styles.slider} loop margin={10} responsive={Responsive} autoplay autoplayTimeout={3000}>
          <div className={styles.item} >
            <Image src="/team1.png" width={296} height={296} alt="partners1" />
             <h4>Courtney Henry</h4>
          </div>
          <div className={styles.item}>
            <Image src="/team2.png" width={296} height={296} alt="partners2" />
            <h4>Courtney Henry</h4>
          </div>
          <div className={styles.item}>
            <Image src="/team3.png" width={296} height={296} alt="partners3" />
            <h4>Courtney Henry</h4>
          </div>
          <div className={styles.item}>
            <Image src="/team4.png" width={296} height={296} alt="partners4" />
            <h4>Courtney Henry</h4>
          </div>
       
        </OwlCarousel>
      </div>
    </div>
  )
}
