import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import { useRouter } from "next/router";
import { useState } from 'react'
import HakatonHero from "./HakatonHero";
import ResursHero from "./ResusHero";

function Layout({ children }) {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const outsiteClickClose = () => {
    setMenuToggle(false);
    setOpenLang(false)
  }

  if (router.pathname != "/hakaton" && router.pathname != '/resus')
    return (
      <div onClick={outsiteClickClose}>
        <div className={styles.containerfluid}>
          <Header
            setMenuToggle={setMenuToggle}
            menuToggle={menuToggle}
            openLang={openLang}
            setOpenLang={setOpenLang}
          />
          {children}
        </div>
        <Footer />
      </div>
    );
  else if (router.pathname == "/hakaton") {
    return (
      <div onClick={outsiteClickClose}>
        <HakatonHero
          setMenuToggle={setMenuToggle}
          menuToggle={menuToggle}
          openLang={openLang}
          setOpenLang={setOpenLang}
        />
        <div className={styles.containerfluid}>{children}</div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div onClick={outsiteClickClose}>
        <ResursHero
          setMenuToggle={setMenuToggle}
          menuToggle={menuToggle}
          openLang={openLang}
          setOpenLang={setOpenLang}
        />
        <div className={styles.containerfluid}>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
