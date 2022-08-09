import React from 'react'
import styles from '../styles/HakatonFoto.module.css'
import { FiX } from "react-icons/fi";
import { useRouter } from 'next/router';

export default function HakatonFoto({data}) {

    const [modalActive, setModalActive] = React.useState(0);
    const { locale, query } = useRouter();

    const closeModal = () => {
        setModalActive(0);
    }

    const openModal = (e, num) => {
        e.stopPropagation();
        setModalActive(num);
    }

    const buttonclkc = () => {
        setModalActive(0);
    }

    return (
        <div className={styles.hakatonFoto}>
            <h3 className={styles.hakatonFoto_title}>Foto</h3>

            <div className={styles.hakatonFoto_wrapper}>
                {
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
                }
            </div>

            <button type='button'>Yana yuklash</button>
        </div>
    )
}
