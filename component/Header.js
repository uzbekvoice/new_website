import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Chevron from "./Question/Chevron";

function Header({
  menuToggle,
  setMenuToggle,
}) {
  const router = useRouter();
  const [stepDropDown, setStepDropDown] = useState(false);
  const [hakDropDown, sethakDropDown] = useState(false);
  const [otherDropDown, setOtherDropDown] = useState(false);

  const openDropdown = () => {
    setStepDropDown(!stepDropDown);
    sethakDropDown(false);
    setOtherDropDown(false)
  }

  const openHakDropdown = () => {
    setStepDropDown(false);
    setOtherDropDown(false)
    sethakDropDown(!hakDropDown);
  }
  const openOtherDropdown = () => {
    setStepDropDown(false);
    sethakDropDown(false);
    setOtherDropDown(!otherDropDown);
  }
  
  const goPage = ()=> {
    setMenuToggle(false)
  }

  return (
    <div
      className={styles.header__main}
    >
      <Link href="/">
        <a>
          <img className={styles.header_logo} src="./logo.png" alt="logo" />
        </a>
      </Link>

      <div
        className={styles.header__main_wrapper}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.header_main_ishtirok}>
          <Link href="https://t.me/UzbekVoiceBot">
            <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
              Ishtirok eting
            </a>
          </Link>
        </div>

        <div onClick={() => setMenuToggle(true)} className={styles.header_burger_menu}>
          <img src='/burger-menu.svg' alt='burger' />
        </div>
      </div>

      <div
        onClick={e => {
          e.stopPropagation();
        }}
        style={{
          transform: menuToggle && 'translateX(0)',
          position: menuToggle && 'fixed'
        }}
        className={styles.header__menu}
      >
        <div onClick={() => setMenuToggle(false)} className={styles.header__menu_close}>
          <img src='/menu-times.png' alt='close icon' />
        </div>

        <div onClick={() => openDropdown()} className={styles.item + ' ' + styles.noHover}>
          Bosqichlar
          <Chevron className={stepDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul className={ stepDropDown? styles.activeDrop +' ' + styles.left: styles.left }>
            <li>
              <Link href='/bosqich'>
                <a>1-bosqich</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a>2-bosqich</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a>3-bosqich</a>
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => openHakDropdown()} className={styles.item + ' ' + styles.noHover}>
          Hakaton
          <Chevron className={hakDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul className={ hakDropDown? styles.activeDrop + " " +styles.left : styles.left}>
            <li>
              <Link href='/hakaton'>
                <a>1-hakaton</a>
              </Link>
            </li>
            <li>
              <Link href='/hakaton'>
                <a>2-hakaton</a>
              </Link>
            </li>
          </ul>
        </div>        

        <Link href="/resus">
          <a onClick={goPage} className={router.pathname == "/resus" ? "item active" : "item"}>
            Resuslar
          </a>
        </Link>
        <Link href="/guide">
          <a onClick={goPage} className={router.pathname == "/guide" ? "item active" : "item"}>
            Qo'llanma
          </a>
        </Link>
        <div onClick={() => openOtherDropdown()} className={styles.item + ' ' + styles.noHover}>
          Boshqa
          <Chevron className={otherDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul className={ !otherDropDown? styles.otherLeft: styles.activeDrop + ' '+styles.otherLeft}>
            <li>
              <Link href="/yangilik">
                <a onClick={() => setMenuToggle(false)}
                  className={router.pathname == "/yangilik" ? "item active" : "item"}
                >
                  Yangiliklar
                </a>
              </Link>
            </li>
            <li>
              <Link href="/hamkorlar">
                <a onClick={() => setMenuToggle(false)}
                  className={router.pathname == "/hamkorlar" ? "item active" : "item"}
                >
                  Hamkorlar
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="https://t.me/UzbekVoiceBot">
          <a onClick={() => setMenuToggle(false)} className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
            Ishtirok eting
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
