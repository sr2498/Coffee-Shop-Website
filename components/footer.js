import React from "react";
import styles from "./footer.module.css";
import { Button } from "primereact/button";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import logoTransparent from "../public/logo-transparent.png";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={`grid grid-nogutter ${styles.footerContainer} relative`}>
      <div className="col-12">
        <svg
          className={`${styles.wave}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1E453E"
            fillOpacity="1"
            // eslint-disable-next-line max-len
            d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,117.3C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className={`col-12 ${styles.mainFooter}`}>
        <div className="grid grid-nogutter">
          <div className="col-12 lg:col-6">
            <div className="grid grid-nogutter">
              <div className="col-3">
                <div className="m-1 lg:m-5">
                  <Image
                    src={logoTransparent}
                    width={80}
                    height={70}
                    alt="Journey Beans logo"
                  />
                </div>
              </div>
              <div className="col-9 flex align-items-center">
                <span className={`${styles.footerLogo}`}>
                  Journey Beans Coffee
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-6">
            <div className="grid grid-nogutter">
              <div className="col-12 lg:col-6">
                <div className={`${styles.footerLinks}`}>
                  <Link className={`p-4 ${styles.fLink}`} href="/blog">
                    Blog
                  </Link>

                  <Link className={`p-4 ${styles.fLink}`} href="/#rewards">
                    Rewards
                  </Link>
                  <Link
                    className={`p-4 ${styles.fLink}`}
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <div className="col-12 lg:col-6">
                <div className="flex justify-content-around">
                  <a href="https://www.facebook.com/">
                    <FacebookOutlinedIcon
                      className="m-3 lg:m-5"
                      style={{ color: "#3b5998", fontSize: "48px" }}
                    />
                  </a>
                  <a href="https://www.twitter.com/">
                    <TwitterIcon
                      className="m-3 lg:m-5"
                      style={{ color: "#00acee", fontSize: "48px" }}
                    />
                  </a>
                  <a href="https://www.instagram.com/">
                    <InstagramIcon
                      className="m-3 lg:m-5"
                      style={{ color: "#D13C8C", fontSize: "48px" }}
                    />
                  </a>
                </div>
                <Button
                  className="block w-12 lg:w-11 mt-5"
                  label="Contact Us"
                  severity="warning"
                  onClick={() => router.push("/about")}
                />
              </div>
            </div>
          </div>
        </div>
        <p className="">© 2023 Journey Beans Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
