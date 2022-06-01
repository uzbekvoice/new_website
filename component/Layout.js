import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  if (router.pathname != "/hakaton")
    return (
      <>
        <div className={styles.containerfluid}>
          <Header />
          {children}
        </div>
        <Footer />
      </>
    );
  else {
    return (
      <>
        <div>{children}</div>

        <Footer />
      </>
    );
  }
}

export default Layout;
