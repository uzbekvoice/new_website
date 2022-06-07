import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Header({menuToggle, setMenuToggle}) {
  const router = useRouter();  

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
      onClick={e=>e.stopPropagation()}
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
        style={{ transform: menuToggle && 'translateX(0)',
        position: menuToggle && 'fixed'
      }}
        className={styles.header__menu}
      >
        <div onClick={() => setMenuToggle(false)} className={styles.header__menu_close}>
          <img src='/menu-times.png' alt='close icon' />
        </div>

        <Link href="/bosqich">
          <a onClick={() => setMenuToggle(false)} className={router.pathname == "/bosqich" ? "item active" : "item"}>
            Bosqichlar
          </a>
        </Link>
        <Link href="/hakaton">
          <a onClick={() => setMenuToggle(false)} className={router.pathname == "/hakaton" ? "item active" : "item"}>
            Hakaton
          </a>
        </Link>
        <Link href="/yangilik">
          <a onClick={() => setMenuToggle(false)}
            className={router.pathname == "/yangilik" ? "item active" : "item"}
          >
            Yangiliklar
          </a>
        </Link>

        <Link href="/hamkorlar">
          <a onClick={() => setMenuToggle(false)}
            className={router.pathname == "/hamkorlar" ? "item active" : "item"}
          >
            Hamkorlar
          </a>
        </Link>

        <Link href="/resus">
          <a onClick={() => setMenuToggle(false)} className={router.pathname == "/resus" ? "item active" : "item"}>
            Resuslar
          </a>
        </Link>
        <Link href="/guide">
          <a onClick={() => setMenuToggle(false)} className={router.pathname == "/guide" ? "item active" : "item"}>
            Qo'llanma
          </a>
        </Link>
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
