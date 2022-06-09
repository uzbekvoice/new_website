import React from "react";
import styles from "../styles/OurTeam.module.css";
import Image from 'next/image';
import {FaTelegramPlane} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

export default function OurTeam() {

  return (
    <div className={styles.ourteam}>
      <h3>Uzbekvoice Jamoasi</h3>
      <div className={styles.flex}>
     
          <div className={styles.item}>
            <div className={styles.avatarimg}>
            <Image src="/team1.png" width={150} height={150}  alt="partners1" />
            </div>
           
            <h4>Courtney Henry</h4>
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>
          <div className={styles.item}>
          <div className={styles.avatarimg}>
            <Image src="/team3.png" width={150} height={150}  alt="partners1" />
            </div>
            <h4>Courtney Henry</h4>

            
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>
          <div className={styles.item}>
            <div className={styles.avatarimg}>
            <Image src="/team1.png" width={150} height={150}  alt="partners1" />
            </div>
           
            <h4>Courtney Henry</h4>
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>
          <div className={styles.item}>
          <div className={styles.avatarimg}>
            <Image src="/team3.png" width={150} height={150}  alt="partners1" />
            </div>
            <h4>Courtney Henry</h4>

            
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>     <div className={styles.item}>
            <div className={styles.avatarimg}>
            <Image src="/team1.png" width={150} height={150}  alt="partners1" />
            </div>
           
            <h4>Courtney Henry</h4>
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>
          <div className={styles.item}>
          <div className={styles.avatarimg}>
            <Image src="/team3.png" width={150} height={150}  alt="partners1" />
            </div>
            <h4>Courtney Henry</h4>

            
            <a href="#"> <FaLinkedin size={22}/> </a>
            <a href="#"> <FaTelegramPlane size={22}/></a>
          </div>
          
      
      </div>
    </div>
  )
}
