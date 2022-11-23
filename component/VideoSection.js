import React from "react";
import styles from "../styles/VideoSection.module.css";

export default function VideoSection() {
  return (
    <div className={styles.container}>
  
        <video
        //   poster="/oromgoh.jfif"
          src="/oromgoh.mp4"
          controls
          muted
          loop

          // autoPlay
        ></video>
  
    </div>
  );
}
