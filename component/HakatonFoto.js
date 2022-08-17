import React, { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from '../styles/HakatonFoto.module.css'
import { useRouter } from 'next/router';

export default function HakatonFoto({ data, galleryID }) {

    const { query, locale } = useRouter();
    const [more, setMore] = useState(4);

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
        <div className={styles.hakatonFoto}>
            {
                locale === "uz-UZ" ?
                    <h3 className={styles.hakatonFoto_title}>Foto</h3>
                    : locale === "ru-RU" ?
                        <h3 className={styles.hakatonFoto_title}>Фото</h3>
                        : <h3 className={styles.hakatonFoto_title}>Photo</h3>
            }

            <div className={styles.hakatonFoto_wrapper + ' pswp-gallery'} id={galleryID}>
                {
                    data.filter(p => p.hackathons_translations_id === parseInt(query.id))
                        .slice(0, more)
                        .map((value, index) => (
                            <a
                                data-pswp-src={`https://content.uzbekvoice.ai/assets/${value.directus_files_id}`}
                                key={galleryID + '-' + index}
                                target="_blank"
                                rel="noreferrer"                                  
                            >
                                <img 
                                src={`https://content.uzbekvoice.ai/assets/${value.directus_files_id}`} 
                                alt={value.directus_files_id} 
                                />
                            </a>
                        ))
                }               
            </div>

            <button onClick={() => setMore(more + 4)} type='button'>
                {
                    locale === "uz-UZ" ?
                        'Yana yuklash'
                        : locale === "ru-RU" ?
                            'Загрузить больше'
                            : 'Load more'
                }
            </button>
        </div>
    )
}
