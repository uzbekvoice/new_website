import Image from "next/image";
import React from "react";
import styles from "../styles/Bosqich.module.css";
import Winners from "../component/Winners";
import Prizes from "../component/Prizes";

export default function bosqich() {
  return (
    <div className={styles.bosqichPage}>
      <div className={styles.isContinue}>yakunlangan</div>
      <h1 className={styles.bosqichTitle}>1-Bosqich konkurs tanlov</h1>
      <p className={styles.scheduleDate}>2021-yil oktabr-dekabr</p>
      <div className={styles.goal}>
        <div className={styles.card1}>
          <Image
            className={styles.goalIcon}
            src="/bosqichIcon1.png"
            width={70}
            height={70}
          />
          <h2>Ko'zlangan maqsad</h2>
          <p>300+ soat Ovozli malumotlar to’plash</p>
        </div>
        <div className={styles.card2}>
          <div className={styles.block}>
            <Image
              className={styles.goalIcon}
              src="/bosqichIcon1.png"
              width={70}
              height={70}
            />
          </div>
          <h2>Ko'zlangan maqsad</h2>
          <p>300+ soat Ovozli malumotlar to’plash</p>
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

      <div className={styles.winners}>
        <h2>G&apos;oliblar ro&apos;yxati</h2>
        <div className={styles.leaderBoard}>
          <div className={styles.topVoiceActing}>
            <h2>Top voice acting users</h2>
            <Winners />
          </div>
          <div className={styles.topListeners}>
            <h2>Top voice acting users</h2>
            <Winners />
          </div>
        </div>
        <a href="#">Показать всех</a>
      </div>

      <div className={styles.ceremony}>
        <h2>Taqdirlash marosimi</h2>
        <Prizes />
      </div>
    </div>
  );
}
