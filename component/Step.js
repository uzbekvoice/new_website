import React from "react";
import styles from "../styles/Step.module.css";
import { FiChevronRight } from "react-icons/fi";
export default function Step() {
  return (
    <div className={styles.content}>
      <h3>Bosqichlar</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.text}>
            <h4>1- Bosqich tanlovi</h4> <h5>yakunlangan</h5>
          </div>
          <div className={styles.data}>
            <p>2021 yil oktyabr - dekabr</p>
          </div>
          <div className={styles.middle}>
            <span>300+</span> <p>Soat ovozli ma'lumotlar yig'ildi</p>
          </div>
          <a href="#">
            Batafsil <FiChevronRight size={23} />{" "}
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <h4> 1- Bosqich tanlovi </h4>{" "}
            <div className={styles.text2}>
              <h5>davom etmoqda</h5>
            </div>
          </div>
          <div className={styles.data}>
            <p>2021 yil oktyabr - dekabr</p>
          </div>
          <div className={styles.middle}>
            <span>1k+</span> <p>Soat ovozli ma'lumotlar yig'ildi</p>
          </div>
          <a href="#">
            Batafsil <FiChevronRight size={23} />
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <h4> 1- Bosqich tanlovi </h4>{" "}
            <div className={styles.text3}>
              <h5>tez kunda</h5>
            </div>
          </div>
          <div className={styles.data}>
            <p>2021 yil oktyabr - dekabr</p>
          </div>
          <div className={styles.middle}>
            <span>300+</span> <p>Soat ovozli ma'lumotlar yig'ildi</p>
          </div>
          <a href="#">
            Batafsil <FiChevronRight size={23} />{" "}
          </a>
        </div>
      </div>

      <hr />
      <div className={styles.line}></div>
    </div>
  );
}
