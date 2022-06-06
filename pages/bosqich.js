import Image from "next/image";
import React from "react";
import styles from "../styles/Bosqich.module.css";
import Winners from "../component/Winners";
import Prizes from "../component/Prizes";
import TopUser from "../component/Winners";

export default function bosqich() {
  return (
    <div className={styles.bosqichPage}>
      <div className={styles.isContinue}>yakunlangan</div>
      <h1>1-Bosqich konkurs tanlov</h1>
      <p className={styles.scheduleDate}>2021-yil oktabr-dekabr</p>

      <div className={styles.goal}>
        <div className={styles.card1}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon1.png" width={100} height={100} alt='bosqich' />
            </div>
          </div>
          <h2>Ko'zlangan maqsad</h2>
          <p>
            <span>300+</span> soat Ovozli malumotlar to’plash
          </p>
        </div>
        <div className={styles.card2}>
          <div className={styles.block}>
            <div className={styles.goalIcon}>
              <Image src="/bosqichIcon2.svg" width={100} height={100} alt='bosqich2'/>
            </div>
          </div>
          <h2>Ko'zlangan maqsad</h2>
          <p>
            <span>300+</span> soat Ovozli malumotlar to'plash
          </p>
        </div>
      </div>

      <div className={styles.prizes}>
        <h2 className={styles.textCenter}>Sovg&apos;alar</h2>
      </div>

      <div className={styles.rules}>
        <h2>Konkurs qoidalari</h2>
        <div className={styles.rulesCard}>
          <div className={styles.rule1}>
            <h2>Rule 1</h2>
            <p>
              Any questions about this Privacy Policy should be addressed to
              team@siteleaf.com
            </p>
          </div>
          <div className={styles.rule1}>
            <h2>Rule 1</h2>
            <p>
              Any questions about this Privacy Policy should be addressed to
              team@siteleaf.com
            </p>
          </div>
          <div className={styles.rule1}>
            <h2>Rule 1</h2>
            <p>
              Any questions about this Privacy Policy should be addressed to
              team@siteleaf.com
            </p>
          </div>
        </div>
      </div>

    <Winners/>

      <Prizes />
    </div>
  );
}
