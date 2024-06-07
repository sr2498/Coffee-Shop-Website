import React, { useRef } from "react";
import styles from "./newsletter.module.css";
import { Button } from "primereact/button";
import SignUp from "./signup";

const NewsLetter = () => {
  const modalRef = useRef();
  return (
    <>
      <SignUp ref={modalRef} />

      <div className={`grid grid-nogutter ${styles.newsletterContainer} pt-4`}>
        <div className="col-12 lg:col-6">
          <div className="flex align-items-center justify-content-center h-full flex-column">
            <h2 className={`${styles.discountTitle}`}>
              15% OFF FOR NEW SUBSCRIBERS
            </h2>
            <p className={`${styles.discountSubTitle} p-3`}>
              Get your free shipping and access to discounts on all of your
              coffee purchases.{" "}
            </p>
          </div>
        </div>
        <div className="col-12 lg:col-6 flex justify-content-center">
          <div className="p-inputgroup flex justify-content-center  w-12 lg:w-11 h-2 m-5 ">
            <Button
              onClick={() => modalRef.current.toggleModal()}
              className="m-3 w-12 lg:w-7"
              style={{ backgroundColor: "#AE835D" }}
              label="Sign Up"
              severity="success"
              raised
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
