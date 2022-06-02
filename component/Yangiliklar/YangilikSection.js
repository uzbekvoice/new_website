import React from "react";
import data from "./YangiliklarData";
import s from "../../styles/Yangiliklar.module.css";

const YangilikSection = () => {
  return (
      <section className={s.YangilikSection}>
        <div className={s.container}>
            <h1 className={s.main}>Yangiliklar</h1>
            <div className={s.empty}></div>
            <div className={s.empty2}></div>
            <div className={s.empty3}></div>
          <div className={s.parent}>
            {data.map(function (el) {
              return (
                <div className={s.box} key={el.id}>
                  <img src={el.image} alt="image" key={el.id}/>
                  <h3 className={s.title}>{el.title}</h3>
                  <h5 className={s.desc}>{el.desc}</h5>
                  <div className={s.flexClass}>
                      <a href="#">{el.btn}</a>
                      <p className={s.ppp}>{el.date}</p>
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
