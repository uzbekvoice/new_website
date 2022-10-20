import React from "react";
import Image from 'next/image'
import styles from "../styles/Marathon.module.css";
import archer1 from '../public/archer1.png';
import archer2 from '../public/archer2.png';

export default function Marathon() {
  return (
    <div className={styles.goal__box}>
      <h2 className={styles.box__title}>
        Ovoz yig'ish <br />
        2-bosqichi marafoni
      </h2>
      <div className={styles.deadline}>
        <p className={styles.deadline__date}>
          Start <br />
          21 Okt
        </p>
        <p className={styles.deadline__date}>
          Finish <br />
          1 Dek
        </p>
      </div>
      <h3 className={styles.aimtext}>MAQSAD</h3>
      <div className={styles.archeryAssets}>
        <Image className={styles.archerImage} src={archer1} alt="master" />
        <span className={styles.archerTarget}>
          <Image className={styles.archerImage} src={archer2} alt="target" />
          <p className={styles.timeInfo}>2000 soat</p>
        </span>
      </div>
    </div>
  );
}
