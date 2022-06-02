import React from "react";
import styles from "../styles/Winners.module.css";
import Image from "next/image";
export default function TopUser() {
  return (
    <>
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
      {/* <div className={styles.card}>
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
      </div> */}
    </>
  );
}
