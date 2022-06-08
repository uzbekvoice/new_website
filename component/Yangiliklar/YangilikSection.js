import React from "react";
import data2 from "./YangiliklarData";
import Link from "next/link";
import s from "../../styles/Yangiliklar.module.css";

const YangilikSection = ({ data }) => {
  console.log(data, 'dd');

  return (
    <section className={s.YangilikSection}>
      <div className={s.container}>
        <h1 className={s.main}>Yangiliklar</h1>
        <div className={s.parent}>
          {data2.map(function (el) {
            return (
              <div className={s.box} key={el.id}>
                <div className={s.boxHeader}>
                  <img src={el.news_image} alt={el.news_image} key={el.id} />
                </div>
                <div className={s.boxBody}>
                  <h3 className={s.title}>{el.news_title}</h3>
                  <h5 dangerouslySetInnerHTML={{ __html: el.news_content }} className={s.desc}></h5>
                  <div className={s.flexClass}>
                    <Link href={`/yangilik/${el.id}`}>
                      <a>
                        Узнать больше
                        <img src='/chevron-right.svg' />
                      </a>
                    </Link>
                    <p className={s.ppp}>{el.date_created.slice(0, 10)}</p>
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


