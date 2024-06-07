/* eslint-disable camelcase */
import Link from "next/link";
import styles from "./cookiedialog.module.css";
import { Button } from "primereact/button";
import {
  getLocalStorageByKey,
  setLocalStorageByKey,
} from "../lib/storageHelper";
import { useEffect, useState } from "react";

const CookieDialog = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorageByKey("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    setTimeout(() => {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
        ad_storage: newValue,
        personalization_storage: newValue,
        functionality_storage: newValue,
        security_storage: newValue,
      });

      setLocalStorageByKey("cookie_consent", cookieConsent);
    }, 1000);
  }, [cookieConsent]);

  return (
    <div
      className={
        cookieConsent != null
          ? "hidden"
          : `${styles.consetnContainer} w-11 lg:w-7 p-2`
      }
    >
      {/* <div className={`${styles.consetnContainer} w-11 lg:w-7 p-2`}> */}
      <div className="flex flex-column lg:flex-row justify-content-between">
        <p className={`text-center ${styles.consentWord}`}>
          We use <span className="font-bold text-sky-400">cookies</span> on our
          site.
          <Link href="/privacy-policy" className="cookiePrivacy">
            {" "}
            See Cookie Policy
          </Link>
        </p>
        <div className="flex justify-content-around">
          <Button
            className={`${styles.consentdecline} m-1`}
            label="Decline"
            severity="info"
            onClick={() => setCookieConsent(false)}
          />
          <Button
            className={`${styles.consentok} m-1 lg:ml-6`}
            label="Allow Cookies"
            severity="info"
            onClick={() => setCookieConsent(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CookieDialog;
