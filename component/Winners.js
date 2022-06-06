import React from "react";
import styles from "../styles/Topuser.module.css";
import Image from "next/image";
export default function TopUser() {
  return (
    <div className={styles.content}>
      <h3>G'oliblar ro'yxati</h3>
   
      <div className={styles.grid}>
        <h4>Top voice acting users</h4>
        <h4>Top listeners</h4>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <div className={styles.block}>
              <Image src="/leader.png" width={72} height={72} alt="Leader" />
              <h4>Wade Warren</h4>
            </div>
            <span>20 000</span>
          </div>
        </div>
        <a href="#">Barchasini ko'rish</a>
        <a href="#">Barchasini ko'rish</a>
      </div>
    </div>
  );
}
