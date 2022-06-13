import React from "react";
import Image from "next/image";
import styles from "../styles/Prizes.module.css";
import { FiX } from "react-icons/fi";

const data = [
  {
    id: 1,
    image: '/unsplash_9mHJM_1GU1E.png',
  },
  {
    id: 2,
    image: '/unsplash_62vi3TG5EDg.png',
  },
  {
    id: 3,
    image: '/unsplash_gStQEmZy-F8.png',
  },
  {
    id: 4,
    image: '/unsplash_OHPdgstNFGs.png',
  },
  {
    id: 5,
    image: '/unsplash_ruJm3dBXCqw.png',
  },
  {
    id: 6,
    image: '/unsplash_UYgrVfIhBec.png',
  },
  {
    id: 7,
    image: '/unsplash_wHddViTmSvA.png',
  }
]

export default function Prizes() {

  const [modalActive, setModalActive] = React.useState(0);

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
    <div className={styles.ceremony}>
      <h2 className={styles.hakatonFoto_title}>Taqdirlash marosimi</h2>
      <div className={styles.prizesPictures}>

        {
          data.map(({ id, image }) => (
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
                  <Image src={image} width={296} height={178} alt={image} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
