import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./hero.module.css";
import Image from "next/image";
import heroCupImage from "../public/hero-cup.jpg";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <div className={`grid grid-nogutter ${styles.heroSection}`}>
      <div className={`lg:col-6 sm:col-12 ${styles.heroBlock}`}>
        <Card title="" className="m-5" style={{ height: "90%" }}>
          <h1 className={`m-auto ${styles.heroWord}`}>
            Discover and <span style={{ display: "block" }}></span> Create the{" "}
            <span style={{ display: "block" }}></span> Perfect Coffee
          </h1>
          <h3 className={`${styles.heroSubWord} mt-6`}>
            Embrace the Journey, Discover the Brew
          </h3>
          <div className="grid grid-nogutter">
            {/* <div className='col-12 lg:col-6'>
							<Button className={`m-3 w-11 lg:w-9 ${styles.heroBtn}`} label='Order Now' severity='secondary' raised />
						</div> */}
            <div className="col-12 lg:col-6">
              <Button
                className={`m-3 w-11 lg:w-9 ${styles.heroBtn}`}
                style={{ backgroundColor: "#AE835D" }}
                label="Explore Our Coffee"
                severity="success"
                raised
                onClick={() => router.push("/menu")}
              />
            </div>
          </div>
        </Card>
      </div>

      <div className={`lg:col-6 col-12 ${styles.heroBlock}`}>
        <div className="relative m-5 flex">
          <Image
            src={heroCupImage}
            className={"relative"}
            fill
            alt="Journey Beans Coffee Cup"
          />
          <div
            className={`${styles.heroGift} text-center flex justify-content-around  flex-column`}
          >
            <h3 className={`${styles.freeDrink}`}>
              Sign up to Get a Free Drink
            </h3>
            <p className="p-4">Savor the moment with your favorite brew</p>
            {/* <Button
							className={`m-3 w-9 lg:w-10 ${styles.heroBtn} ${styles.freeBtn}`}
							style={{backgroundColor: '#AE835D'}}
							label='Join Now'
							severity='success'
							raised
						/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
