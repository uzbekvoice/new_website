import React from "react";
import styles from "../styles/Prizes.module.css";
import { FiX } from "react-icons/fi";

export default function Prizes({prize}) {

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
          prize.map((value, i) => (
            <div
              key={i}
              onClick={closeModal}
              className={modalActive === i+1 ? styles.modalImg : styles.hakatonFoto_card}
            >
              <div className={styles.modalWrap}>
                <button type='button' onClick={buttonclkc} className={styles.iconTimes}>
                  <FiX color='rgba(240, 248, 255, 0.952)' size={30} />
                </button>
                <div
                  onClick={(e) => openModal(e, i+1)}
                >
                  <img src={`https://admin.uzbekvoice.ai/assets/${value}`} alt={value} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
