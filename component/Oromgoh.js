import React from "react";
import styles from "../styles/Oromgoh.module.css";

export default function Oromgoh() {
  return (
    <div className={styles.block}>
      <h1>Oromgohda qatnashing</h1>

      <div className={styles.flex}>
        <div>
          <h3>Boshlanishi</h3>
          <h4>21 Oktyabr</h4>
        </div>

        <div>
          <h3>Tugalanishi</h3>
          <h4>15 Noyabr</h4>
        </div>
      </div>

      {/* Animatsiya uchun joy */}
      {/* <div></div> */}
      {/* Animatsiya uchun joy */}

      <div className={styles.desc}>
        <ul>
          <li>
            <span>&#10003; </span> Tabiatda dam olish
          </li>
          <li><span>&#10003; </span> O'yin kulgu</li>
          <li><span>&#10003; </span> Tekin ovqat</li>
          <li><span>&#10003; </span> va albatta ovozli ma'lumotlar yozish</li>
        </ul>
        <div className={styles.btn}>
            <Link>
            <a >Ishtirok etish</a>
            </Link>
          
        </div>
      </div>
    </div>
  );
}
