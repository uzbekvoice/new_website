import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Chevron from "./Question/Chevron";
import NavbarApi from '../pages/navbarapi/static.json'

function Header({
  menuToggle,
  setMenuToggle,
  openLang,
  setOpenLang
}) {
  const router = useRouter();
  const { asPath, locale } = router;
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

  return (
    NavbarApi.menu
      .filter((p) => p.languages_code === locale)
      .map(({
        id, bosqich, bosqichlar, hakaton, hakatonlar, resurs, qollanma, boshqa, boshqalar, button
      }) =>
        <div className={styles.header__main} key={id}>
          <Link href="/">
            <a>
              {
                router.pathname === '/hakaton' ?
                  <img className={styles.header_logo} src="./hakaton-header-logo.png" alt="logo" />
                  :
                  <img className={styles.header_logo} src="./logo.png" alt="logo" />
              }
            </a>
          </Link>

          <div
            className={styles.header__main_wrapper}
            onClick={e => e.stopPropagation()}
          >
            <div onClick={() => setOpenLang(!openLang)} className={styles.mobileLan}>
              <span
                className={router.pathname === '/hakaton' && styles.hakatonPageStyleLan}
              >
                {
                  locale.slice(0, 2) === 'uz' ?
                    <img src='/uz.png' alt="'uz" /> :
                    locale.slice(0, 2) === 'ru' ? <img src='/ru.png' alt="ru" /> :
                      <img src='/eng.png' alt="'eng" />
                }
                {locale.slice(0, 2)}
              </span>
              <ul style={{ display: openLang && 'block' }}
                className={styles.language}
              >
                <li>
                  <Link href={asPath} locale='uz-UZ'>
                    <a>uz</a>
                  </Link>
                </li>
                <li>
                  <Link locale='ru-RU' href={asPath} >
                    <a>ru</a>
                  </Link>
                </li>
                <li>
                  <Link href={asPath} locale='en-US'>
                    <a>en</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.header_main_ishtirok}>
              <Link href="https://t.me/UzbekVoiceBot">
                <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
                  {button}
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

            <div onClick={() => openDropdown()}
              onMouseOver={() => setStepDropDown(true)}
              onMouseOut={() => setStepDropDown(false)}
              className={router.pathname === '/hakaton' ? styles.hakatonPageStyle + ' ' + styles.item + ' ' + styles.noHover : styles.item + ' ' + styles.noHover}
            >
              {bosqich}
              {
                router.pathname === '/hakaton' ?
                  <Chevron className={'rotate ' + styles.chevronHakaton} width={7} height={11} />
                  :
                  <Chevron className={'rotate'} width={7} height={11} fill={'#1717179d'} />
              }
              <ul className={stepDropDown ? styles.activeDrop + ' ' + styles.activeLeft : styles.left}>
                {
                  bosqichlar.map((value, i) =>
                    <li key={i}>
                      <Link href='/bosqich'>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div onClick={() => openHakDropdown()}
              onMouseOver={() => sethakDropDown(true)}
              onMouseOut={() => sethakDropDown(false)}
              className={router.pathname === '/hakaton' ? styles.hakatonPageStyle + ' ' + styles.item + ' ' + styles.noHover : styles.item + ' ' + styles.noHover}
            >
              {hakaton}
              {
                router.pathname === '/hakaton' ?
                  <Chevron className={'rotate ' + styles.chevronHakaton} width={7} height={11} />
                  :
                  <Chevron className={'rotate'} width={7} height={11} fill={'#1717179d'} />
              }
              <ul className={hakDropDown ? styles.activeDrop + " " + styles.activeLeft : styles.left}>
                {
                  hakatonlar.map((value, i) =>
                    <li key={i}>
                      <Link href='/hakaton'>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>

            <Link href="/resus">
              <a onClick={() => setMenuToggle(false)}
                className={router.pathname == "/resus" ? "item active" : router.pathname === '/hakaton' ? styles.hakatonPageStyle + " item" : 'item'}
              >
                {resurs}
              </a>
            </Link>
            <Link href="/guide">
              <a onClick={() => setMenuToggle(false)} className={router.pathname == "/guide" ? "item active" : router.pathname === '/hakaton' ? styles.hakatonPageStyle + " item" : 'item'}>
                {qollanma}
              </a>
            </Link>
            <div onClick={() => openOtherDropdown()}
              onMouseOver={() => setOtherDropDown(true)}
              onMouseOut={() => setOtherDropDown(false)}
              className={router.pathname === '/hakaton' ? styles.hakatonPageStyle + ' ' + styles.item + ' ' + styles.noHover : styles.item + ' ' + styles.noHover}
            >
              {boshqa}
              {
                router.pathname === '/hakaton' ?
                  <Chevron className={'rotate ' + styles.chevronHakaton} width={7} height={11} />
                  :
                  <Chevron className={'rotate'} width={7} height={11} fill={'#1717179d'} />
              }
              <ul className={!otherDropDown ? styles.otherLeft : styles.activeDrop + ' ' + styles.activeOtherLeft}>
                {
                  boshqalar.map(({ path, value }, i) =>
                    <li key={i}>
                      <Link href={path}>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div onClick={() => setOpenLang(!openLang)} className={styles.item + " " + styles.lan}>
              <span
                className={router.pathname === '/hakaton' && styles.hakatonPageStyle}
              >
                {
                  locale.slice(0, 2) === 'uz' ?
                    <img src='/uz.png' alt="'uz" /> :
                    locale.slice(0, 2) === 'ru' ? <img src='/ru.png' alt="ru" /> :
                      <img src='/eng.png' alt="'eng" />
                }
                {locale.slice(0, 2)}
              </span>
              <ul style={{ display: openLang && 'block' }}
                className={styles.language}
              >
                <li>
                  <Link href={asPath} locale='uz-UZ'>
                    <a>uz</a>
                  </Link>
                </li>
                <li>
                  <Link href={asPath} locale='ru-RU'>
                    <a>ru</a>
                  </Link>
                </li>
                <li>
                  <Link href={asPath} locale='en-US'>
                    <a>en</a>
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="https://t.me/UzbekVoiceBot">
              <a onClick={() => setMenuToggle(false)} className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
                {button}
              </a>
            </Link>
          </div>
        </div>
      )
  );
}

export default Header;
