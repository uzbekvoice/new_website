import React from "react";
import styles from "../styles/Stat.module.css";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useRouter } from "next/router";

export default function Stat(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;

  const data = [
    {
      name: "Yanvar",
      Ovozli: 4000,
      Tinglangan: 2400,
      amt: 2400,
    },
    {
      name: "Fevral",
      Ovozli: 3000,
      Tinglangan: 1398,
      amt: 2210,
    },
    {
      name: "Mart",
      Ovozli: 2000,
      Tinglangan: 9800,
      amt: 2290,
    },
    {
      name: "Aprel",
      Ovozli: 2780,
      Tinglangan: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Ovozli: 1890,
      Tinglangan: 4800,
      amt: 2181,
    },
    {
      name: "Iyun",
      Ovozli: 2390,
      Tinglangan: 3800,
      amt: 2500,
    },
    {
      name: "Iyul",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
    {
      name: "Avgust",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
    {
      name: "Sentabr",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
    {
      name: "Oktabr",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
    {
      name: "Noyabr",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
    {
      name: "Dekabr",
      Ovozli: 3490,
      Tinglangan: 4300,
      amt: 2100,
    },
  ];
  const dates = [
    {
      name: "1 m",
      Ovozli: 100,
      Tinglangan: 100,
    },
    {
      name: "2 m",
      Ovozli: 5000,
      Tinglangan: 3000,
    },
    {
      name: "3 m",
      Ovozli: 4000,
      Tinglangan: 3000,
    },
    {
      name: "4 m",
      Ovozli: 8780,
      Tinglangan: 3908,
    },
    {
      name: "5 m",
      Ovozli: 9000,
      Tinglangan: 4800,
    },
  ];

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

        <div className={styles.img_bottom}>
          <ResponsiveContainer width={1268} height={251}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />

              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="Tinglangan" fill="#FD5353" />
              <Bar yAxisId="right" dataKey="Ovozli" fill="#33BEF9" />
              <Bar yAxisId="right" dataKey="amt" fill="#8D53FD" />
            </BarChart>
          </ResponsiveContainer>
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
          {/* <Image
            src="/stat-hour.jpg"
            width={1052}
            height={389}
            quality={100}
            alt="stat"
          /> */}

          <AreaChart
            width={750}
            height={350}
            data={dates}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FD5353" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FD5353" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#33BFFA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#33BFFA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Ovozli"
              stroke="#FD5353"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="Tinglangan"
              stroke="#33BFFA"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}
