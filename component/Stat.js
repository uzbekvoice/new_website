import React from "react";
import styles from "../styles/Stat.module.css";
import Image from "next/image";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useRouter } from "next/router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Stat(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;
  const data = {
    labels: [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ],

    datasets: [
      {
        // label: "Tekshirilgan",
        data: [0.3, 0.1, 0.2, 0.5, 0.6, 0.3, 0.1, 0.4, 0.4, 0.6, 0.2, 0.6],
        backgroundColor: "#fd5353",
      },
      {
        // label: "Eshitilgan",
        data: [0.1, 0.4, 0.2, 0.3, 0.4, 0.4, 0.3, 0.3, 0.6, 0.6, 0.3, 0.4],
        backgroundColor: "#33bffa",
      },

      {
        // label: "Ovoz",
        data: [0.3, 0.1, 0.07, 0.1, 0.5, 0.5, 0.5, 0.2, 0.1, 0.6, 0.1, 0.5],
        backgroundColor: "#8d53fd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },

        // title: {
        //   text: "Statistika",
        //   display: true,
        //   color: "#000",
        //   font: {
        //     size: 18,
        //   },
        // },
      },
    },
    scales: {
      yAxis: {
        max: 1,
      },
    },
    elements: {
      bar: {
        barPercentage: 0.3,
        categoryPercentage: 1,
      },
    },
  };

  return (
    <div className={styles.statistic}>
      <div className={styles.content}>
        {HomeContent.statistic
          .filter((p) => p.languages_code === locale)
          .map((HomeContent, i) => {
            const { title, description, parag1, parag2 } = HomeContent;
            return (
              <div key={i}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.status}>
                  <div className={styles.block}>
                    <span>~270 000 </span> <p> {parag1}</p>
                  </div>

                  <div className={styles.block}>
                    <span> ~300</span> <p> {parag2}</p>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div className={styles.img_top}>
          <Image src='/stat-top.png' width={308} height={17} quality={100} alt="stat" />
        </div> */}

        <div className={styles.img_bottom}>
          <Bar data={data} height={100} options={options} />
          {/* 
          <Image
            src="/stat-bottom.png"
            width={1268}
            height={251}
            quality={100}
            alt="stat"
          /> */}
        </div>
        <div className={styles.img_hour}>
          <Image
            src="/stat-hour.jpg"
            width={1052}
            height={389}
            quality={100}
            alt="stat"
          />
        </div>
      </div>
    </div>
  );
}
