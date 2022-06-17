import styles from "../styles/HeaderHakaton.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Chevron from "./Question/Chevron";

function HeaderHakaton({
  menuHakatonToggle,
  setHakatonToggle,
  openLang,
  setOpenLang
}) {

  const router = useRouter();
  const [stepDropDown, setStepDropDown] = useState(false);
  const [hakDropDown, sethakDropDown] = useState(false);
  const [otherDropDown, setOtherDropDown] = useState(false);
  const [lan, setLan] = useState('uz');

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

  const goPage = () => {
    setMenuToggle(false)
  }

  return (
    <div
      className={styles.header__main}>
      <Link href="/">
        <a>
          <img className={styles.header_logo} src="./hakaton-header-logo.png" alt="logo" />
        </a>
      </Link>

      <div
        className={styles.header__main_wrapper}
        onClick={e => e.stopPropagation()}
      >
        <div onClick={() => setOpenLang(!openLang)} className={styles.mobileLan}>
          <span>
            {
              lan === 'uz' ?
                <img src='/uz.png' alt="'uz" /> :
                lan === 'ru' ? <img src='/ru.png' alt="ru" /> :
                  <img src='/eng.png' alt="'eng" />
            }
            {lan}
          </span>
          <ul style={{ display: openLang && 'block' }}
            className={styles.language}
          >
            <li>
              <a onClick={() => setLan('uz')}>uz</a>
            </li>
            <li>
              <a onClick={() => setLan('ru')}>ru</a>
            </li>
            <li>
              <a onClick={() => setLan('eng')}>eng</a>
            </li>
          </ul>
        </div>
        <div className={styles.header_main_ishtirok}>
          <Link href="https://t.me/UzbekVoiceBot">
            <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
              Ishtirok eting
            </a>
          </Link>
        </div>

        <div onClick={() => setHakatonToggle(true)} className={styles.header_burger_menu}>
          <img src='/burger-menu.svg' alt='burger' />
        </div>
      </div>

      <div
        onClick={e => {
          e.stopPropagation();
        }}
        style={{
          transform: menuHakatonToggle && 'translateX(0)',
          position: menuHakatonToggle && 'fixed'
        }}
        className={styles.header__menu}
      >
        <div onClick={() => setHakatonToggle(false)}
          className={styles.header__menu_close}>
          <img src='/menu-times.png' alt='close icon' />
        </div>

        <div onClick={() => openDropdown()}
          onMouseOver={() => setStepDropDown(true)}
          onMouseOut={() => setStepDropDown(false)}
          className={styles.item + ' ' + styles.noHover}>
          Bosqichlar
          <Chevron className={stepDropDown ? 'rotate' + " " + styles.dNone : styles.rotateChevron + ' ' + styles.dNone} width={7} height={11} fill={"#fff"} />
          <Chevron className={stepDropDown ? 'rotate ' + styles.dBlock : styles.rotateChevron + ' ' + styles.dBlock} width={7} height={11} fill={"#1717179d"} />
          <ul className={stepDropDown ? styles.activeDrop + ' ' + styles.activeLeft : styles.left}>
            <li>
              <Link href='/bosqich'>
                <a>bosqich 1</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a>bosqich 2</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a>bosqich 3</a>
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => openHakDropdown()}
        onMouseOver={() => sethakDropDown(true)}
        onMouseOut={() => sethakDropDown(false)}
        className={styles.item + ' ' + styles.noHover}>
          Hakaton
          <Chevron className={hakDropDown ? 'rotate' + " " + styles.dNone : styles.rotateChevron + ' ' + styles.dNone} width={7} height={11} fill={"#fff"} />
          <Chevron className={hakDropDown ? 'rotate ' + styles.dBlock : styles.rotateChevron + ' ' + styles.dBlock} width={7} height={11} fill={"#1717179d"} />
          <ul className={hakDropDown ? styles.activeDrop + ' ' + styles.activeLeft : styles.left}>
            <li>
              <Link href='/hakaton'>
                <a>hakaton 1</a>
              </Link>
            </li>
            <li>
              <Link href='/hakaton'>
                <a>hakaton 2</a>
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
        <div onClick={() => openOtherDropdown()} 
        onMouseOver={() => setOtherDropDown(true)}
        onMouseOut={() => setOtherDropDown(false)}
        className={styles.item + ' ' + styles.noHover}>
          Boshqa
          <Chevron className={otherDropDown ? 'rotate' + " " + styles.dNone : styles.rotateChevron + ' ' + styles.dNone} width={7} height={11} fill={"#fff"} />
          <Chevron className={otherDropDown ? 'rotate ' + styles.dBlock : styles.rotateChevron + ' ' + styles.dBlock} width={7} height={11} fill={"#1717179d"} />
          <ul className={!otherDropDown ? styles.otherLeft : styles.activeDrop + ' ' + styles.activeOtherLeft}>
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

        <div onClick={() => setOpenLang(!openLang)} className={styles.item + " " + styles.lan}>
          <span>
            {lan}
            {
              lan === 'uz' ?
                <img src='/uz.png' alt="'uz" /> :
                lan === 'ru' ? <img src='/ru.png' alt="ru" /> :
                  <img src='/eng.png' alt="'eng" />
            }
          </span>
          <ul style={{ display: openLang && 'block' }}
            className={styles.language}
          >
            <li>
              <a onClick={() => setLan('uz')}>uz</a>
            </li>
            <li>
              <a onClick={() => setLan('ru')}>ru</a>
            </li>
            <li>
              <a onClick={() => setLan('eng')}>eng</a>
            </li>
          </ul>
        </div>

        <Link href="https://t.me/UzbekVoiceBot">
          <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
            Ishtirok eting
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHakaton;
