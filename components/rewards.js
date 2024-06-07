import React, { useRef } from "react";
import Image from "next/image";
import styles from "./rewards.module.css";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import threeCupsImage from "../public/three-cups.jpg";

const Rewards = () => {
  const modalRef = useRef();
  return (
    <>
      <div className="grid grid-nogutter" id="rewards">
        <div className="lg:col-6 col-12">
          <div className="relative m-2">
            <Image
              src={threeCupsImage}
              className="relative"
              fill
              alt="Journey Beans Coffee Cup"
            />
            <p className={`${styles.advantureHeader} w-10`}>
              Adventure Awaits in Every Cup
            </p>
          </div>
        </div>

        <div className="lg:col-6 col-12">
          <div className="m-2">
            <h1 className={`${styles.rewardHeader} mt-8 mb-8`}>
              Bean Explorer Rewards
            </h1>

            <div className="grid grid-nogutter m-4">
              <div className="col-2">
                <FreeBreakfastOutlinedIcon
                  style={{ fontSize: "3rem", color: "#AD835Ced" }}
                />
              </div>
              <div className="col-10">
                <p className={`m-0 ${styles.beanProgramHeader}`}>
                  Refill, Reuse, Restore: Our Pledge to the Planet
                </p>
                <p className={`${styles.beanProgramBody}`}>
                  Bring your reusable mugs or cups when they visit coffee shop
                  to earn 2 Beans
                </p>
              </div>
            </div>

            <div className="grid grid-nogutter m-4">
              <div className="col-2">
                <RecyclingOutlinedIcon style={{ fontSize: "3rem" }} />
              </div>
              <div className="col-10">
                <p className={`m-0 ${styles.beanProgramHeader}`}>
                  Sip Responsibly, Save the World Daily.
                </p>
                <p className={`${styles.beanProgramBody}`}>
                  Place used plastic cup in recycle bin to earn 2 Beans for
                  every 3 cups
                </p>
              </div>
            </div>

            <div className="grid grid-nogutter m-4">
              <div className="col-2">
                <ForestOutlinedIcon
                  style={{ fontSize: "3rem", color: "green" }}
                />
              </div>
              <div className="col-10">
                <p className={`m-0 ${styles.beanProgramHeader}`}>
                  Drink Coffee, Do Good, Save the Earth
                </p>
                <p className={`${styles.beanProgramBody}`}>
                  We plant tree for you when you bring reusable mugs or cup for
                  20 times
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rewards;
