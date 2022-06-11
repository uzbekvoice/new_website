import React from "react";
import styles from "../styles/Topuser.module.css";
import Image from "next/image";
import { FiXCircle } from "react-icons/fi";



export default function TopUser({ users, userslist }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);

  return (
    <div className={styles.content}>
      <h3>Yetakchi a&apos;zolar</h3>
      <p>
        10 Dekabar 2021 yilda end 3ta faol a&apos;zolarimiz sovga va sovrinlar
        beriladi. Noutbook, plansjet va smartwatch. Qatnashing va yutib oling.
        To'liq ma&apos;lumot
      </p>

      <div className={styles.grid}>
        <div className={styles.listner}>
          <h4>Eng faol tinglovchi</h4>
          {
            users.slice(0, 3).map((dates) =>
              <div key={dates.clientHash} className={styles.card}>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <Image src="/leader.png" width={72} height={72} alt="Leader" />
                    <h5>{dates.username}</h5>
                  </div>
                  <span>{dates.total}</span>
                </div>
              </div>
            )
          }      
          <div className={styles.detailall}>
            <button type="button" onClick={() => setShowModal(true)}>
              Barchasini ko'rish
            </button>
          </div>
        </div>

        <div className={styles.voice}>
          <h4>Eng faol so'zlovchi</h4>
          {
            userslist.slice(0, 3).map((dates) =>
              <div key={dates.clientHash} className={styles.card}>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <Image src="/leader.png" width={72} height={72} alt="Leader" />
                    <h5>{dates.username}</h5>
                  </div>
                  <span>{dates.total}</span>
                </div>
              </div>
            )
          } 
          <div className={styles.detailall}>
            <button type="button" onClick={() => setShowModal2(true)}>
              Barchasini ko'rish
            </button>
          </div>

          {/* More voice top user */}
          <div className={styles.voice_user}>
            {showModal ? (
              <>
                <div onClick={() => setShowModal(false)} className={styles.modal_bg}>
                  <div onClick={e=>e.stopPropagation()} className={styles.modal_content}>
                    <div className={styles.modal_heading}>
                      <div className={styles.modal_close}>
                        <button onClick={() => setShowModal(false)}>
                          <span>
                            <FiXCircle size={30} />
                          </span>
                        </button>
                      </div>
                      <div className={styles.title}>
                        <h3>Top voice acting users</h3>
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
              </>
            ) : null}
          </div>
          {/* //More voice top user */}

          {/* More listening top user */}
          <div className={styles.voice_user}>
            {showModal2 ? (
              <>
                <div onClick={() => setShowModal2(false)} className={styles.modal_bg}>
                  <div onClick={e=>e.stopPropagation()} className={styles.modal_content}>
                    <div className={styles.modal_heading}>
                      <div className={styles.modal_close}>
                        <button onClick={() => setShowModal2(false)}>
                          <span>
                            <FiXCircle size={30} />
                          </span>
                        </button>
                      </div>
                      <div className={styles.title}>
                        <h3>Top listening acting users</h3>
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
              </>
            ) : null}
          </div>
          {/* //More listening top user */}
        </div>
      </div>
    </div>
  );
}
