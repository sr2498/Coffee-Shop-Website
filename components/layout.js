import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./layout.module.css";
import GoogleAnalytics from "../components/ga";
import CookieDialog from "../components/cookiedialog";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQMN95N4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </div>
      <GoogleAnalytics gaid={process.env.NEXT_PUBLIC_DB_GA} />
      <div className={styles.logoName}>
        <span>Journey Bean's Coffee</span>
      </div>
      <Navbar />
      {children}
      <Footer />
      <CookieDialog />
    </>
  );
};

export default Layout;
