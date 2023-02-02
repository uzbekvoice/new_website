import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Chevron from "./Question/Chevron";
import NavbarApi from "../pages/navbarapi/static.json";

function Header({ menuToggle, setMenuToggle, openLang, setOpenLang }) {
  const router = useRouter();
  const { asPath, locale } = router;
  const [stepDropDown, setStepDropDown] = useState(false);
  const [hakDropDown, sethakDropDown] = useState(false);
  const [otherDropDown, setOtherDropDown] = useState(false);

  const openDropdown = () => {
    setStepDropDown(!stepDropDown);
    sethakDropDown(false);
    setOtherDropDown(false);
  };

  const openHakDropdown = () => {
    setStepDropDown(false);
    setOtherDropDown(false);
    sethakDropDown(!hakDropDown);
  };
  const openOtherDropdown = () => {
    setStepDropDown(false);
    sethakDropDown(false);
    setOtherDropDown(!otherDropDown);
  };

  return NavbarApi.menu
    .filter((p) => p.languages_code === locale)
    .map(
      ({
        id,
        bosqich,
        bosqichlar,
        hakaton,
        hakatonlar,
        roadmap,
        pricing,
        qollanma,
        boshqa,
        boshqalar,
      }) => (
        <div className={
          (router.pathname === "/" || router.pathname === "/pricing") ?
            (menuToggle ?
              styles.header__main + ' ' + styles.header__menu_bg_grey + ' ' + styles.header__main_bg :
              styles.header__main + ' ' + styles.header__main_bg)
            : styles.header__main
        }
          key={id}>          
          <div className={styles.container}>
            <Link href="/">
              <a>
                {
                  (router.pathname === "/" || router.pathname === "/pricing") ?
                    <img className={styles.header_logo} src="/logo.png" alt="logo" /> :
                    <img className={styles.header_logo} src="/newlogo.png" alt="logo" />
                }
              </a>
            </Link>

            <div
              className={styles.header__main_wrapper}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={() => setOpenLang(!openLang)}
                className={styles.mobileLan}
              >
                <span>
                  {locale.slice(0, 2) === "uz" ? (
                    <img src="/uz.png" alt="'uz" />
                  ) : locale.slice(0, 2) === "ru" ? (
                    <img src="/ru.png" alt="ru" />
                  ) : (
                    <img src="/eng.png" alt="'eng" />
                  )}
                  {locale.slice(0, 2)}
                </span>
                <ul
                  style={{ display: openLang ? "block" : 'none' }}
                  className={styles.language}
                >
                  <li>
                    <Link href={asPath} locale="uz-UZ">
                      <a>uz</a>
                    </Link>
                  </li>
                  <li>
                    <Link locale="ru-RU" href={asPath}>
                      <a>ru</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={asPath} locale="en-US">
                      <a>en</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div

                className={styles.header_burger_menu}
              >
                {
                  (router.pathname === "/" || router.pathname === "/pricing") ?

                    (menuToggle ?
                      <div onClick={() => setMenuToggle(false)}>
                        <img src="/x.png" alt="close icon" />
                      </div>
                      :

                      <div className={styles.menu_img} onClick={() => setMenuToggle(true)}>
                        <img src="/menu-white.png" alt="burger" />
                      </div>)
                    :
                    (
                      menuToggle ?
                        <div onClick={() => setMenuToggle(false)}>
                          <img src="/menu-times.png" alt="close icon" />
                        </div>
                        :
                        <div className={styles.menu_img} onClick={() => setMenuToggle(true)}>
                          <img src="/burger-menu.svg" alt="burger" />
                        </div>
                    )
                }
              </div>
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={menuToggle ? styles.header__menu + ' ' + styles.header__menu_mobile : styles.header__menu}
            >
              <div
                onClick={() => openDropdown()}
                onMouseOver={() => setStepDropDown(true)}
                onMouseOut={() => setStepDropDown(false)}
                className={styles.item + " " + styles.noHover}
              >
                {bosqich}

                <Chevron
                  className={"rotate"}
                  width={7}
                  height={11}
                  fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"}
                />

                <ul
                  className={
                    stepDropDown
                      ? styles.activeDrop + " " + styles.activeLeft
                      : styles.left
                  }
                >
                  {bosqichlar.map((value, i) => (
                    <li key={i}>
                      <Link href={`/bosqich/${i + 1}`}>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                onClick={() => openHakDropdown()}
                onMouseOver={() => sethakDropDown(true)}
                className={styles.item + " " + styles.noHover}
              >
                {hakaton}

                <Chevron
                  className={"rotate"}
                  width={7}
                  height={11}
                  fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"}
                />

                <ul
                  className={
                    hakDropDown
                      ? styles.activeDrop + " " + styles.activeLeft
                      : styles.left
                  }
                >
                  {hakatonlar.map((value, i) => (
                    <li key={i}>
                      <Link href={`/hakaton/${i + 1}`}>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/roadmap">
                <a
                  onClick={() => setMenuToggle(false)}
                  className={router.pathname == "/roadmap" ? "item active" : 'item'}
                >
                  {roadmap}
                </a>
              </Link>
              <Link href="/pricing">
                <a
                  onClick={() => setMenuToggle(false)}
                  className={router.pathname == "/pricing" ? "item active" : 'item'}
                >
                  {pricing}
                </a>
              </Link>
              <Link href="/guide">
                <a
                  onClick={() => setMenuToggle(false)}
                  className={router.pathname == "/guide" ? "item active" : 'item'}
                >
                  {qollanma}
                </a>
              </Link>
              <div
                onClick={() => openOtherDropdown()}
                onMouseOver={() => setOtherDropDown(true)}
                onMouseOut={() => setOtherDropDown(false)}
                className={styles.item + " " + styles.noHover}
              >
                {boshqa}
                <Chevron
                  className={"rotate"}
                  width={7}
                  height={11}
                  fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"}
                />
                <ul
                  className={
                    !otherDropDown
                      ? styles.otherLeft
                      : styles.activeDrop + " " + styles.activeOtherLeft
                  }
                >
                  {boshqalar.map(({ path, value }, i) => (
                    <li key={i}>
                      <Link href={path}>
                        <a onClick={() => setMenuToggle(false)}>{value}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.waitlist}>
                <div>
                  Bog`lanish
                  <Chevron
                    className={styles.chevron + " rotate"}
                    width={7}
                    height={11}
                    fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"}
                  />
                </div>
                <a>Waitlistga qo'shilish</a>
              </div>

              <div
                onClick={() => setOpenLang(!openLang)}
                className={styles.item + " " + styles.lan}
              >
                <span>
                  {locale.slice(0, 2) === "uz" ? (
                    <img src="/uz.png" alt="'uz" />
                  ) : locale.slice(0, 2) === "ru" ? (
                    <img src="/ru.png" alt="ru" />
                  ) : (
                    <img src="/eng.png" alt="'eng" />
                  )}
                  {locale.slice(0, 2)}
                </span>

                <ul
                  style={{ display: openLang ? "block" : 'none' }}
                  className={styles.language}
                >
                  <li>
                    <Link href={asPath} locale="uz-UZ">
                      <a>uz</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={asPath} locale="ru-RU">
                      <a>ru</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={asPath} locale="en-US">
                      <a>en</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    );
}

export default Header;
