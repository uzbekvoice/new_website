import React, { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from "../styles/Prizes.module.css";

export default function Prizes({ prize, galleryID, title }) {

  const [more, setMore] = useState(8);
  let loop = more - prize.length;

  if (loop > 0) {
    for (let i = 0; i < loop; i++) {
      prize.push('')
    }
  }

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',  
      showAnimationDuration: 200,
      hideAnimationDuration: 50,
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);


  return (
    <div className={styles.ceremony}>
      <h2 className={styles.hakatonFoto_title}>{title}</h2>
      <div className={styles.prizesPictures + ' pswp-gallery'} id={galleryID}>

        {
          prize.map((value, index) => (
            value ?
              <a
                href={`http://localhost:8055/assets/${value}`}
                key={galleryID + '-' + index}
                target="_blank"
                rel="noreferrer"  
                data-pswp-width="1200" 
                data-pswp-height="800"               
              >
                <img src={`http://localhost:8055/assets/${value}`} alt={value} />
              </a>
              :
              <div></div>
          ))
        }
      </div>
    </div>
  );
}
