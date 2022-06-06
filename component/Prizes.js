import Image from "next/image";
import React from "react";
import styles from "../styles/Prizes.module.css";

export default function Prizes() {
  return (
    <div className={styles.ceremony}>
      <h2>Taqdirlash marosimi</h2>
      <div className={styles.prizesPictures}>
        <div>
          <Image src="/unsplash_9mHJM_1GU1E.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_62vi3TG5EDg.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_gStQEmZy-F8.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_OHPdgstNFGs.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_ruJm3dBXCqw.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_UYgrVfIhBec.png" width={280} height={178} />
        </div>
        <div>
          <Image src="/unsplash_wHddViTmSvA.png" width={280} height={178} />
        </div>
      </div>
    </div>
  );
}
