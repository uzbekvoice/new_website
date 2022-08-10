import React, { useEffect, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from '../styles/HakatonFoto.module.css'
import { useRouter } from 'next/router';
// import { FiX } from "react-icons/fi";

export default function HakatonFoto({ data, galleryID }) {

    // const [modalActive, setModalActive] = React.useState(0);
    const { query } = useRouter();
    const [more, setMore] = useState(4);

    // const closeModal = () => {
    //     setModalActive(0);
    // }

    // const openModal = (e, num) => {
    //     e.stopPropagation();
    //     setModalActive(num);
    // }

    // const buttonclkc = () => {
    //     setModalActive(0);
    // }

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryID,
            children: 'a',
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
            <h3 className={styles.hakatonFoto_title}>Foto</h3>

            <div className={styles.hakatonFoto_wrapper + ' pswp-gallery'} id={galleryID}>
                {
                    data.filter(p => p.hackathons_translations_id === parseInt(query.id))
                        .slice(0, more)
                        .map((value, index) => (
                            <a
                                data-pswp-src={`https://admin.uzbekvoice.ai/assets/${value.directus_files_id}`}
                                key={galleryID + '-' + index}
                                target="_blank"
                                rel="noreferrer"
                                data-pswp-width="1200"
                                data-pswp-height="800"
                            >
                                <img src={`https://admin.uzbekvoice.ai/assets/${value.directus_files_id}`} alt={value.directus_files_id} />
                            </a>
                        ))
                }
                {/* {
                    data
                    .filter(p => p.hackathons_translations_id === parseInt(query.id))
                    .map(({id, directus_files_id}) => (
                        <div
                            key={id}
                            onClick={closeModal}
                            className={modalActive === id ? styles.modalImg : styles.hakatonFoto_card}
                        >
                            <div className={styles.modalWrap}>
                                <button type='button' onClick={buttonclkc} className={styles.iconTimes}>
                                    <FiX color='rgba(240, 248, 255, 0.952)' size={30} />
                                </button>
                                <div
                                    onClick={(e) => openModal(e, id)}
                                >
                                    <img src={`https://admin.uzbekvoice.ai/assets/${directus_files_id}`}  alt={directus_files_id} />
                                </div>
                            </div>
                        </div>
                    ))
                } */}
            </div>

            <button onClick={() => setMore(more + 4)} type='button'>Yana yuklash</button>
        </div>
    )
}
