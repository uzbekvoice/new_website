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
        qollanma,
        boshqa,
        boshqalar,
        button,
      }) => (
        <div className={styles.header__main} key={id}>
          <div className={styles.container}>
            <Link href="/">
              <a>
                <img
                  className={styles.header_logo}
                  src="/newlogo.png"
                  alt="logo"
                />
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
                  style={{ display: openLang && "block" }}
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
                onClick={() => setMenuToggle(true)}
                className={styles.header_burger_menu}
              >
                <img src="/burger-menu.svg" alt="burger" />
              </div>
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                transform: menuToggle && "translateX(0)",
                position: menuToggle && "fixed",
              }}
              className={styles.header__menu}
            >
              <div
                onClick={() => setMenuToggle(false)}
                className={styles.header__menu_close}
              >
                <img src="/menu-times.png" alt="close icon" />
              </div>

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
                  fill={"#1717179d"}
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
                  fill={"#1717179d"}
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
                  className={
                    router.pathname == "/roadmap" ? "item active" : "item"
                  }
                >
                  {roadmap}
                </a>
              </Link>
              <Link href="/guide">
                <a
                  onClick={() => setMenuToggle(false)}
                  className={
                    router.pathname == "/guide" ? "item active" : "item"
                  }
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
                  fill={"#1717179d"}
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
                  style={{ display: openLang && "block" }}
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
