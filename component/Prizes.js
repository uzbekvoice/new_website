import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from "../styles/Prizes.module.css";

export default function Prizes({ prize, galleryID, title }) {

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
            <a
              href={`https://admin.uzbekvoice.ai/assets/${value}`}
              key={galleryID + '-' + index}
              target="_blank"
              rel="noreferrer"              
            >
              <img src={`https://admin.uzbekvoice.ai/assets/${value}`} alt={value} />
            </a>
          ))
        }
      </div>
    </div>
  );
}
