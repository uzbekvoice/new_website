import React from "react";
import styles from "../styles/Oromgoh.module.css";
import Link from "next/link";
import BusAnimation from "./BusAnimation";

export default function Oromgoh() {
  return (
    <div>


    <div className={styles.block}>
      <h1>Oromgohda qatnashing</h1>

      <div className={styles.flex}>
        <div>
          <h3>Start</h3>
          <h4>21 Oktyabr</h4>
        </div>

        <div>
          <h3>Finish</h3>
          <h4>1 Dekabr</h4>
        </div>
      </div>

    <BusAnimation />
 
    </div>

<div className={styles.desc}>
<ul>
  <li>
    <span>&#10003; </span> Tabiatda dam olish
  </li>
  <li><span>&#10003; </span> O'yin kulgu</li>
  <li><span>&#10003; </span> Tekin ovqat</li>
  <li><span>&#10003; </span> va albatta ovozli ma'lumotlar yozish</li>
</ul>
<div className={styles.btn}>
    <Link href="#">
    <a >Ishtirok etish</a>
    </Link>
  
</div>
</div>
</div>
  );
}
