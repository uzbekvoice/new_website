import { useState } from 'react'
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div 
     className={styles.header__main}>
      <Link href="/">
        <a>
          <img className={styles.header_logo} src="./logo.png" alt="logo" />
        </a>
      </Link>

      <div className={styles.header__main_wrapper}>
        <div className={styles.header_main_ishtirok}>
          <Link href="/ishtirok">
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
        style={{ transform: menuToggle && 'translateX(0)' }}
        className={styles.header__menu}
      >
        <div onClick={() => setMenuToggle(false)} className={styles.header__menu_close}>
          <img src='/menu-times.png' alt='close icon' />
        </div>

        <Link href="/bosqich">
          <a className={router.pathname == "/bosqich" ? "item active" : "item"}>
            Bosqichlar
          </a>
        </Link>
        <Link href="/hakaton">
          <a className={router.pathname == "/hakaton" ? "item active" : "item"}>
            Hakaton
          </a>
        </Link>
        <Link href="/yangilik">
          <a
            className={router.pathname == "/yangilik" ? "item active" : "item"}
          >
            Yangiliklar
          </a>
        </Link>

        <Link href="/hamkorlar">
          <a
            className={router.pathname == "/hamkorlar" ? "item active" : "item"}
          >
            Hamkorlar
          </a>
        </Link>

        <Link href="/resus">
          <a className={router.pathname == "/resus" ? "item active" : "item"}>
            Resuslar
          </a>
        </Link>
        <Link href="/guide">
          <a className={router.pathname == "/guide" ? "item active" : "item"}>
            Qo'llanma
          </a>
        </Link>
        <Link href="/ishtirok">
          <a className={router.pathname == "/ishtirok" ? "btn active" : "btn"}>
            Ishtirok eting
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
