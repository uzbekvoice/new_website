import React from "react";
import Link from "next/link";
import s from "../styles/Yangiliklar.module.css";
import { useRouter } from "next/router";

const YangilikSection = ({ data }) => {
  console.log(data, 'data');

  const { locale } = useRouter()

  return (
    <section className={s.YangilikSection}>
      <div className={s.container}>
        {
          locale === "uz-UZ" ?
            <h1 className={s.main}>Yangiliklar</h1>
            : locale === "ru-RU" ?
              <h1 className={s.main}>Новости</h1>
              : <h1 className={s.main}>News</h1>
        }
        <div className={s.parent}>
          {data
            .filter(p => p.languages_code === locale && p.news_id)
            .map((el) => {
              return (
                <div className={s.box} key={el.id}>
                  <div className={s.boxHeader}>
                    <img src={`https://admin.uzbekvoice.ai/assets/${el.news_image}`} alt={el.news_image} key={el.id} />
                  </div>
                  <div className={s.boxBody}>
                    <h3 className={s.title}>{el.news_title}</h3>
                    <h5 dangerouslySetInnerHTML={{ __html: el.news_content.split(" ", 20).join(' ') }} className={s.desc}></h5>
                    <div className={s.flexClass}>
                      <Link href={`/yangilik/${el.news_id}`}>
                        <a>
                          {
                            locale === "uz-UZ" ?
                              'Batafsil'
                              : locale === "ru-RU" ?
                                'Узнать больше'
                                : 'Read more'
                          }
                          <img src='/chevron-right.svg' />
                        </a>
                      </Link>
                      <p className={s.ppp}>{el.data_created.slice(0, 10)}</p>
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


