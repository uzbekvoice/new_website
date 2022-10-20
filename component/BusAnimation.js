import React from 'react'
import styles from "../styles/BusAnimation.module.css"
export default function BusAnimation() {
  return (
    <div className={styles.country_wrap}>
    <div className={styles.mountain}>
        <img className={styles.imagemountain} src="/mountain-min.jpg" alt="mountain"/>
    </div>

   
    <div className={styles.street}>
      
        <div className={styles.car}>
      
        <div className={styles.car_body}>
            <div className={styles.truck}>
                <div className={styles.truck_container}></div>
                <div className={styles.glases}></div>
                <div className={styles.bonet}></div>
            
                <div className={styles.base}></div>
            
                <div className={styles.base_aux}></div>
                <div className={styles.wheel_back}></div>
                <div className={styles.wheel_front}></div>
            
                <div className={styles.smoke}></div>
              </div>
        
        </div>    
        </div>
    </div>
    </div>
  

  )
}
