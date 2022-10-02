import { data } from "jquery";
import React from "react";
import styles from "../styles/Roadmap.module.css";
import { useRouter } from "next/router";
import { IoCheckmarkCircle } from "react-icons/io5"
export async function getServerSideProps() {
  const res = await fetch(
    "https://admin.uzbekvoice.ai/items/roadmap_translations"
  );
  const data = await res.json();

  return {
    props: {
      roadmaps: data,
    },
  };
}

export default function Roadmap({ roadmaps }) {
  const { locale, query } = useRouter();
  const dates = roadmaps.data.filter((p) => p.languages_code === locale);
  //   const datalist = dates[1].data;

  return (
    <>
      <div className={styles.roadmaphero}>
        <div className={styles.container_page}>
          {dates.map((data, id) => (
            <div key={id} className={styles.roadmap_heading}>
                 {<h2 dangerouslySetInnerHTML={{ __html: data.roadmap_title}} /> }
            </div>
          ))}
        </div>
      </div>

      <div className={styles.roadmap_page}>
        <div className={styles.container_page}>
          <div className={styles.page_heading}>
            {dates.map(
              ({ id, roadmap_title, roadmap_heading, roadmap_content }) => (
                <div key={id}>
                  <h2> {roadmap_heading} </h2><br/>
                  {<h2 dangerouslySetInnerHTML={{ __html: roadmap_title}} /> }

                  {<p dangerouslySetInnerHTML={{ __html: roadmap_content }} />}
                </div>
              )
            )}
          </div>

          <div className={styles.grid}>
            {dates.map((data) =>
              data.data.map((item) => {
                const { id, title, content, i } = item;
                // console.log(item);

                return (
                  <div key={id} className={styles.item}>
                    <div className={styles.roadmap_title}>{title}</div>
                    <ul className={styles.roadmap_list}>
               <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </ul>
                  </div>
                );
              })
            )}

            {/* <div className={styles.item}>
              <div className={styles.roadmap_title}>APIs &#38; UI</div>
              <ul className={styles.roadmap_list}>
                <li className={styles.done}>GraphQL API</li>
                <li>REST API</li>
                <li>React Admin UI</li>
                <li>Subscriptions</li>
                <li>Websockets</li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.roadmap_title}>APIs &#38; UI</div>
              <ul className={styles.roadmap_list}>
                <li className={styles.done}>GraphQL API</li>
                <li>REST API</li>
                <li>React Admin UI</li>
                <li>Subscriptions</li>
                <li>Websockets</li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.roadmap_title}>APIs &#38; UI</div>
              <ul className={styles.roadmap_list}>
                <li className={styles.done}>GraphQL API</li>
                <li>REST API</li>
                <li>React Admin UI</li>
                <li>Subscriptions</li>
                <li>Websockets</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
