import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chevron from "./Question/Chevron";
import NavbarApi from "../pages/navbarapi/static.json";
import Dropdown from "./Question/DropDown";

function Header({ menuToggle, setMenuToggle, openLang, setOpenLang, setModal }) {
  const router = useRouter();
  const { asPath, locale } = router;
  const [stepDropDown, setStepDropDown] = useState(false);
  const [hakDropDown, sethakDropDown] = useState(false);
  const [otherDropDown, setOtherDropDown] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return NavbarApi.menu
    .filter((p) => p.languages_code === locale)
    .map(
      ({
        id,
        malumot,
        malumotlar,
        bosqich,
        bosqichlar,
        hakaton,
        hakatonlar,
        roadmap,
        pricing,
        qollanma,
        boshqa,
        boshqalar,
        waitless,
        contact
      }) => (
        <div className={
          (router.pathname === "/" || router.pathname === "/pricing") ?
            (menuToggle ?
              styles.header__main + ' ' + styles.header__menu_bg_grey + ' ' + styles.header__main_bg :
              styles.header__main + ' ' + styles.header__main_bg)
            : styles.header__main
        }
          key={id}          
          >
          <div className={styles.container}>
            <Link href="/">
              <a>
                {
                  (router.pathname === "/" || router.pathname === "/pricing") ?
                    <img className={styles.header_logo} src="/logo.svg" alt="logo" /> :
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
                {malumot}

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
                  <Dropdown fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"} title={hakaton} content={hakatonlar} />
                  <Dropdown fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"} title={bosqich} content={bosqichlar} />
                  {malumotlar.map(({ path, value }, i) => (
                    <li key={i}>
                      <Link href={path}>
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
                <Link href={'/hamkorlar'}>
                  <a>
                    {contact}
                    <Chevron
                      className={styles.chevron + " rotate"}
                      width={7}
                      height={11}
                      fill={(router.pathname === "/" || router.pathname === "/pricing") ? "#ffffff" : "#1717179d"}
                    />
                  </a>
                </Link>
                <button type="button" onClick={() => setModal(true)}>{waitless}</button>
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
