import React from "react";
import styles from "../styles/Topuser.module.css";
import Image from "next/image";
import { FiXCircle } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Winners({ users, userslist, bosqich }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  const { locale } = useRouter()

  return (
    <div className={styles.content} style={{ marginTop: bosqich && '130px' }}>
      <h3>
        {
          locale === "uz-UZ" ?
            <span>Yetakchi a'zolar</span>
            : locale === "ru-RU" ?
              <span>Самый активный слушатель</span>
              : <span>Leading members</span>
        }
      </h3>
      <div className={styles.grid}>
        <div className={styles.listner}>
          <h4>
            {
              locale === "uz-UZ" ?
                <span>Eng faol tinglovchi</span>
                : locale === "ru-RU" ?
                  <span>Активные участники</span>
                  : <span>The most active listener</span>
            }
          </h4>
          {
            users.slice(0, 3).map((dates) =>
              <div key={dates.clientHash} className={styles.card}>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <Image src="/leader.png" width={72} height={72} alt="Leader" />
                    <h5>{dates.username.split(" ", 2) .join(" ")}</h5>
                  </div>
                  <span>{dates.total}</span>
                </div>
              </div>
            )
          }
          <div className={styles.detailall}>
            <button type="button" onClick={() => setShowModal(true)}>
              {
                locale === "uz-UZ" ?
                  <span>Batafsil</span>
                  : locale === "ru-RU" ?
                    <span>Подробнее</span>
                    : <span>Read more</span>
              }
            </button>
          </div>
        </div>

        <div className={styles.voice}>
          <h4>
            {
              locale === "uz-UZ" ?
                <span>Eng faol so'zlovchi</span>
                : locale === "ru-RU" ?
                  <span>Самый активный спикер</span>
                  : <span>The most active speaker</span>
            }
          </h4>
          {
            userslist.slice(0, 3).map((dates) =>
              <div key={dates.clientHash} className={styles.card}>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <Image src="/leader.png" width={72} height={72} alt="Leader" />
                    <h5>{dates.username.split(" ", 2) .join(" ")}</h5>
                  </div>
                  <span>{dates.total}</span>
                </div>
              </div>
            )
          }
          <div className={styles.detailall}>
            <button type="button" onClick={() => setShowModal2(true)}>
              {
                locale === "uz-UZ" ?
                  <span>Batafsil</span>
                  : locale === "ru-RU" ?
                    <span>Подробнее</span>
                    : <span>Read more</span>
              }
            </button>
          </div>

          {/* More voice top user */}
          <div className={styles.voice_user}>
            {showModal ? (
          
                <div onClick={() => setShowModal(false)} className={styles.modal_bg}>
                  <div onClick={e => e.stopPropagation()} className={styles.modal_content}>
                    <div className={styles.modal_heading}>
                      <div className={styles.modal_close}>
                        <button onClick={() => setShowModal(false)}>
                          <span>
                            <FiXCircle size={30} />
                          </span>
                        </button>
                      </div>
                      <div className={styles.title}>
                        <h3> {
                          locale === "uz-UZ" ?
                            <span>Eng faol tinglovchi</span>
                            : locale === "ru-RU" ?
                              <span>Активные участники</span>
                              : <span>The most active listener</span>
                        }</h3>
                      </div>

                      {/*body*/}
                      <div className={styles.container}>
                        {users.map((dates) => (
                          <div key={dates.clientHash} className={styles.card_user}>
                            <div className={styles.item_user}>
                              <div className={styles.block_user}>
                                <h4>{dates.position + 1}</h4>
                                <h5>{dates.username}</h5>
                              </div>
                              <span>{dates.total}</span>
                            </div>
                          </div>

                        ))}

                      </div>
                    </div>
                  </div>
                </div>
           
            ) : null}
          </div>
          {/* //More voice top user */}

          {/* More listening top user */}
          <div className={styles.voice_user}>
            {showModal2 ? (
           
                <div onClick={() => setShowModal2(false)} className={styles.modal_bg}>
                  <div onClick={e => e.stopPropagation()} className={styles.modal_content}>
                    <div className={styles.modal_heading}>
                      <div className={styles.modal_close}>
                        <button onClick={() => setShowModal2(false)}>
                          <span>
                            <FiXCircle size={30} />
                          </span>
                        </button>
                      </div>
                      <div className={styles.title}>
                        <h3>{
                          locale === "uz-UZ" ?
                            <span>Eng faol so'zlovchi</span>
                            : locale === "ru-RU" ?
                              <span>Самый активный спикер</span>
                              : <span>The most active speaker</span>
                        }</h3>
                      </div>

                      {/*body*/}
                      <div className={styles.container}>
                        {userslist.map((data) => (
                          <div key={data.clientHash} className={styles.card_user}>
                            <div className={styles.item_user}>
                              <div className={styles.block_user}>
                                <h4>{data.position + 1}</h4>
                                <h5>{data.username}</h5>
                              </div>
                              <span>{data.total}</span>
                            </div>
                          </div>

                        ))}
                      </div>
                    </div>
                  </div>
                </div>
           
            ) : null}
          </div>
          {/* //More listening top user */}
        </div>
      </div>
    </div>
  );
}
