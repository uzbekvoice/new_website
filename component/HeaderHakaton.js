import styles from "../styles/HeaderHakaton.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Chevron from "./Question/Chevron";

function HeaderHakaton({
  menuHakatonToggle,
  setHakatonToggle,
  stepDropDown,
  setStepDropDown,
  hakDropDown,
  sethakDropDown,
  otherDropDown,
  setOtherDropDown
}) {

  const router = useRouter();

  const [activeStepAndHak, setActiveStepAndHak] = useState(0);

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
    setStepDropDown(false);
    setOtherDropDown(false)
    sethakDropDown(false);
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
        <div onClick={() => setHakatonToggle(false)} className={styles.header__menu_close}>
          <img src='/menu-times.png' alt='close icon' />
        </div>

        <div onClick={() => openDropdown()} className={styles.item}>
          Bosqichlar
          <Chevron className={stepDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul style={{ display: stepDropDown && 'block' }}>
            <li>
              <Link href='/bosqich'>
                <a
                  onClick={() => setActiveStepAndHak(1)}
                  style={{ color: activeStepAndHak === 1 && '#9B67FE' }}
                >bosqich 1</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a
                  onClick={() => setActiveStepAndHak(2)}
                  style={{ color: activeStepAndHak === 2 && '#9B67FE' }}
                >bosqich 2</a>
              </Link>
            </li>
            <li>
              <Link href='/bosqich'>
                <a
                  onClick={() => setActiveStepAndHak(3)}
                  style={{ color: activeStepAndHak === 3 && '#9B67FE' }}
                >bosqich 3</a>
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => openHakDropdown()} className={styles.item}>
          Hakaton
          <Chevron className={hakDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul className={styles.left} style={{ display: hakDropDown && 'block' }}>
            <li>
              <Link href='/hakaton'>
                <a
                  onClick={() => setActiveStepAndHak(4)}
                  style={{ color: activeStepAndHak === 4 && '#9B67FE' }}
                >hakaton 1</a>
              </Link>
            </li>
            <li>
              <Link href='/hakaton'>
                <a
                  onClick={() => setActiveStepAndHak(5)}
                  style={{ color: activeStepAndHak === 5 && '#9B67FE' }}
                >hakaton 2</a>
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
        <div onClick={() => openOtherDropdown()} className={styles.item}>
          Boshqa
          <Chevron className={otherDropDown ? 'rotate' : styles.rotateChevron} width={7} height={11} fill={"#1717179d"} />
          <ul className={styles.otherLeft} style={{ display: otherDropDown && 'block' }}>
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
          <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
            Ishtirok eting
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHakaton;
