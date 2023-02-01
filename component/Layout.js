import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const outsiteClickClose = () => {
    setMenuToggle(false);
    setOpenLang(false);
  };

  if (router.pathname != "/roadmap")
    return (
      <div onClick={outsiteClickClose}>
        <div className={(router.pathname === "/" || router.pathname === "/pricing") ? styles.containerfluid + ' ' + styles.containerBgBlack : styles.containerfluid}>
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
  else {
    return (
      <div onClick={outsiteClickClose}>
        <Header
          setMenuToggle={setMenuToggle}
          menuToggle={menuToggle}
          openLang={openLang}
          setOpenLang={setOpenLang}
        />
        <div className={styles.containerroadmap}>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
