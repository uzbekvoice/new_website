import React from "react";
import styles from "../styles/VideoSection.module.css";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function VideoSection() {
  return (
    <div className={styles.container}>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: "tRufat-LWpU",
              provider: "youtube",
            },
          ],
        }}
      />
    </div>
  );
}
