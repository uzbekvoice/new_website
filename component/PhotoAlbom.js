import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/PhotoAlbom.module.css";
import { useRouter } from 'next/router';
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


export default function PhotoAlbom({data}) {
  let qw = data.filter(p => p.hackathons_translations_id === 1);
  return (
    <div className={styles.container}>
      <div className={styles.sliders}>
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
          speed={700}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
          }}
          scrollbar={{ draggable: true }}
        >

          {qw.map(({id, directus_files_id}) =>
           <SwiperSlide key={id}>
           <div className={styles.item}>
             <img src={`https://admin.uzbekvoice.ai/assets/${directus_files_id}`}/>
           </div>
         </SwiperSlide>
          
          )}
         
        </Swiper>
      </div>
    </div>
  );
}
