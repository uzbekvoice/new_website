import React from "react";
import styles from "../styles/Ourpartners.module.css";
import Image from "next/image";
export default function Ourpartners() {
  return (
    <div className={styles.partners}>
      <div className={styles.detail}>
        <h2>Biz bilan hamkorlik</h2>
        <p>
          O&apos;zbekistonda suniy intelekt sohasini taqdiriga hissa yoki hamkorlik
          qilmoqchi bo&apos;lganlar bilan ishlash har doim ochiqmiz
        </p>
        <a href='#'>Hamkorlik qilish</a>
      </div>
      <div className={styles.imgunit}>
        <Image src="/robot.png" width={432} height={476} alt="robot" />
      </div>
    </div>
  );
}
