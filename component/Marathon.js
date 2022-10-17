import React from "react";
import styles from "../styles/Marathon.module.css";
import Link from "next/link";

export default function Marathon() {
  return (
    <div className={styles.block}>
      <h1>Ovoz yigish </h1>
      <h3>2 - bosqish marafoni</h3>
      <div className={styles.glow_on_hover}>Faol</div>

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
        <h3>Maqsad</h3>
        <p>3000 soat</p>

        <div className={styles.btn}>
          <p>Sovrindorlarni sovgalar </p>
          <Link href="/bosqich/2">
          <a>Kutmoqda</a>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
