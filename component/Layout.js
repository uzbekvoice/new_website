import Header from "./Header";
import Footer from "./Footer";

import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  if (router.pathname != "/hakaton")
    return (
      <>
        <div className="container__fluid">
          <Header />
          {children}
        </div>
        <Footer />
      </>
    );
  else {
    return (
      <>
        <div className="container__fluid">
          {children}
          </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
