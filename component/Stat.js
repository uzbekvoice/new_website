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
  Label,
  LabelList,
} from "recharts";
import { useRouter } from "next/router";

export default function Stat(props) {
  const { locale } = useRouter();
  const { HomeContent } = props;
  const { stat } = props;

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


  const dates = stat.map(({ date, total, valid} )  =>  ({ ["Sana"]:date.slice(0, 10), ["So'zlangan"]: Math.floor(total / 3600), ["Tinglangan"]: Math.floor(valid / 3600) }));

  console.log(dates)

  // const data3 = [
  //   {
  //     "name": "x1",
  //     "uv": 180000,

  //   },
  //   {
  //     "name": "Page B",
  //     "uv": 270000,

  //   },
  //   {
  //     "name": "Page C",
  //     "uv": 900000,

  //   },
  //   {
  //     "name": "Page D",
  //     "uv": 1800000,

  //   },
  //   {
  //     "name": "Page D",
  //     "uv": 9000000,

  //   }
  // ]

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
                    <span> ~2000</span> <p> {parag2}</p>
                  </div>
                </div>
              </div>
            );
          })}

        <div className={styles.img_bottom + " stat_top_chart"}>
          {/* <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={500}
              height={280}
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
            

              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="Tinglangan" fill="#FD5353" />
              <Bar yAxisId="right" dataKey="Ovozli" fill="#33BEF9" />
              <Bar yAxisId="right" dataKey="amt" fill="#8D53FD" />
            </BarChart>
          </ResponsiveContainer> */}
          {/* 
          <Image
            src="/stat-bottom.png"
            width={1268}
            height={251}
            quality={100}
            alt="stat"
          /> */}
        </div>

        {/* <BarChart
  width={730}
  height={350}
  data={data3}
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
    
  </XAxis>

 
  <Bar dataKey="uv" fill="rgba(55, 65, 81, 0.2)">
    <LabelList dataKey="uv" position="top" />
  </Bar>
</BarChart> */}

        <div className={styles.img_hour + " stat_bottom_chart"}>
          {/* <Image
            src="/frame.png"
            width={300}
            height={350}
  
         
            alt="stat"
          /> */}
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart
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
              <XAxis dataKey="Sana" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="So'zlangan"
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
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
