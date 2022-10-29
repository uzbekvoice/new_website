import React from "react";
import styles from "../styles/Stathours.module.css";

export default function StatHours() {
  return (
    <div className={styles.hammasi}>
      <div className={styles.texts}>
        <h3>Qancha jumla - nechi soat</h3>
        <p>
          Qancha jumla yigish va yigilgan jumlalar qancha soatlik yozilgan ovoz
          aylantirish
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.diagramms}>
        <p className={styles.firstp}>
            9000 <br />
            matn bor
          </p>
          <p className={styles.secondp}>1 soat ovoz</p>
          <div className={styles.background}></div>
          x1
        </div>
        <div className={styles.diagramms}>
        <p>
            270 000 <br />
            matn bu
          </p>
          <div className={styles.background}>300 soat ovoz</div>
          x2
        </div>
        <div className={styles.diagramms}>
        <p>
            900 000 <br />
            matn bu
          </p>
          <div className={styles.background}>1000 soat ovoz</div>
          x3
        </div>
        <div className={styles.diagramms}>
          <p>
            1 800 000 <br />
            matn bu
          </p>
          <div className={styles.background}>2000 soat ovoz</div>
          x4
        </div>
        <div className={styles.diagramms}>
        <p>
            9 000 000<br />
            matn bu
          </p>
          <div className={styles.background}>10000 soat ovoz</div>
          x5
        </div>
      </div>
    </div>
  );
}
