import React from "react";
import data from "./YangiliklarData";
import Link from "next/link";
import s from "../../styles/Yangiliklar.module.css";

const YangilikSection = () => {
  return (
    <section className={s.YangilikSection}>
      <div className={s.container}>
        <h1 className={s.main}>Yangiliklar</h1>
        {/* <div className={s.gradientCircle}></div>
        <div className={s.gradientCircle2}></div>
        <div className={s.gradientCircle3}></div> */}
        <div className={s.parent}>
          {data.map(function (el) {
            return (
              <div className={s.box} key={el.id}>
                <div className={s.boxHeader}>
                  <img src={el.image} alt="image" key={el.id} />
                </div>
                <div className={s.boxBody}>
                  <h3 className={s.title}>{el.title}</h3>
                  <h5 className={s.desc}>{el.desc}</h5>
                  <div className={s.flexClass}>
                    <Link href={`/yangilik/${el.id}`}>
                      <a>
                        Узнать больше
                        <img src='/chevron-right.svg' />
                      </a>
                    </Link>
                    <p className={s.ppp}>{el.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YangilikSection;
