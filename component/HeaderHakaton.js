import styles from "../styles/HeaderHakaton.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function HeaderHakaton() {
  const router = useRouter();

  return (
    <div className={styles.headerHakaton__main}>
      <Link href="/">
        <a>
          <img src="./hakaton-header-logo.png" alt="logo" />
        </a>
       
      </Link>

      <div className={styles.headerHakaton__menu}>
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

export default HeaderHakaton;
