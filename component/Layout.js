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
  const [menuHakatonToggle, setHakatonToggle] = useState(false);
  const [stepDropDown, setStepDropDown] = useState(false);
  const [hakDropDown, sethakDropDown] = useState(false);
  const [otherDropDown, setOtherDropDown] = useState(false);

  const outsiteClickClose = () => {
    setMenuToggle(false);
    setHakatonToggle(false)
    sethakDropDown(false)
    setStepDropDown(false)
    setOtherDropDown(false)
  }

  if (router.pathname != "/hakaton" && router.pathname != '/resus')
    return (
      <div onClick={outsiteClickClose}>
        <div className={styles.containerfluid}>
          <Header
            setMenuToggle={setMenuToggle}
            menuToggle={menuToggle}
            stepDropDown={stepDropDown}
            setStepDropDown={setStepDropDown}
            hakDropDown={hakDropDown}
            sethakDropDown={sethakDropDown}
            otherDropDown={otherDropDown}
            setOtherDropDown={setOtherDropDown}
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
          setHakatonToggle={setHakatonToggle}
          menuHakatonToggle={menuHakatonToggle}
          stepDropDown={stepDropDown}
          setStepDropDown={setStepDropDown}
          hakDropDown={hakDropDown}
          sethakDropDown={sethakDropDown}
          otherDropDown={otherDropDown}
          setOtherDropDown={setOtherDropDown}
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
          stepDropDown={stepDropDown}
          setStepDropDown={setStepDropDown}
          hakDropDown={hakDropDown}
          sethakDropDown={sethakDropDown}
          otherDropDown={otherDropDown}
          setOtherDropDown={setOtherDropDown}
        />
        <div className={styles.containerfluid}>{children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
