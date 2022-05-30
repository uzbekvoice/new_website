import React from "react";
import styles from "../styles/Contribution.module.css";
import Image from "next/image";

export default function Contribution() {
  return (
    <div className={styles.content}>
      <h3>Qanday hissa qo'shsa bo'ladi ?</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src="/works-img1.png"
              width={65}
              height={65}
              alt="Microphone"
            />
          </div>
          <h3>Ovozingiz bilan jumla o'qing</h3>
          <p>
            Ko'rsatilgan matnni o'zbek tilida tovush bilan Mozilla Common Voice
            saytida o'qiymiz. Ishoning, bu eng qiziqarli ishlardan biri
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src="/works-img2.png"
              width={65}
              height={65}
              alt="Microphone"
            />
          </div>
          <h3>O'qilgan jumlani tinglab tasdiqlang</h3>
          <p>
            O'qilgan jumla va matnilarni to'g'riligini tekshirib tasdiqlang yoki
            uni rad eting. Bu juda oson.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src="/works-img3.png"
              width={65}
              height={65}
              alt="Microphone"
            />
          </div>
          <h3>Matnlarni tekshirish</h3>
          <p>
            Yig'ib kiritgan matnlarni tekshirib tasdiqlang. Shundan so'ng bu
            jumla ma'lumotlar bazasiga qo'shiladi.
          </p>
        </div>

        
      </div>

      <div className={styles.link}>
      <a href="#">Loyihada ishtirok etish</a>
      </div>
      
    </div>
  );
}
