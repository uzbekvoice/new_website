import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "./Modal";

function Layout({ children }) {
  const router = useRouter();
  const [menuToggle, setMenuToggle] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const [modal, setModal] = useState(false);

  const openModal = (e) => {
    setModal(true)
    e.stopPropagation()
  }

  const outsiteClickClose = () => {
    setMenuToggle(false);
    setOpenLang(false);
    setModal(false)
  };

  if (router.pathname !== "/roadmap")
    return (
      <div className={(router.pathname === "/" || router.pathname === "/pricing") ? styles.parentWrapper : ''} onClick={outsiteClickClose}>
        <div className={styles.containerfluid}
          onClick={() => setModal(false)}
        >
          <Header
            setMenuToggle={setMenuToggle}
            menuToggle={menuToggle}
            openLang={openLang}
            setOpenLang={setOpenLang}
            setModal={setModal}
          />

          {
            modal ? <Modal setModal={setModal} /> : null
          }

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
          setModal={setModal}
        />
        {
          modal ? <Modal setModal={setModal} /> : null
        }
        <div className={styles.containerroadmap}>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
