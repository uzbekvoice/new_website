import React from "react";
import styles from "../styles/Modal.module.css";
import {FiXCircle} from 'react-icons/fi'
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>
        Barchasini ko'rish
      </button>

      {showModal ? (
        <div>
          <div className={styles.modal_bg} >
            <div className={styles.modal_content}>
              <div className={styles.modal_heading}>

                <div className={styles.modal_close}>
                <button onClick={() => setShowModal(false)}>
                    <span><FiXCircle  size={30}/></span>
                  </button>
                </div>
                <div className={styles.title}>
                  <h3>Top voice acting users</h3>
                  
                </div>

                {/*body*/}
                <div className={styles.container}>
                  <div className={styles.card_user}>
                    <div className={styles.item_user}>
                      <div className={styles.block_user}>
                        <h4>1</h4>
                        <h5>Wade Warren</h5>
                      </div>
                      <span>20 000</span>
                    </div>
                  </div>
                 
                </div>
               
              </div>
            </div>
          </div>
         
        </div>
      ) : null}
    </div>
  );
}
