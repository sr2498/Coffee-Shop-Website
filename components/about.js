import styles from "./about.module.css";
import React from "react";
import Image from "next/image";
import aboutImg from "../public/nathan-dumlao-6VhPY27jdps-unsplash.jpg";

const About = () => {
  return (
    <div className="p-5 aboutContainer">
      <Image src={aboutImg} className="relative" fill alt="Coffee hands" />
      <h1 className={`${styles.aboutHeader}`}>About Journey Bean's Coffee</h1>
      <p className="p-3 lg:p-5">
        At Journey Beans Coffee, we believe that every cup of coffee is a
        journey, an exploration of flavors and aromas from around the world. Our
        mission is to bring the spirit of adventure into every coffee
        experience, igniting a sense of wonder and curiosity with every sip. Our
        story began in the heart of the wilderness, where our founders,
        passionate coffee enthusiasts and adventure seekers, discovered the
        magic of freshly roasted beans by a campfire. Inspired by the thrill of
        exploration and the warmth of coffee shared among friends, Journey Beans
        Coffee was born.
      </p>
      <h2 className={`${styles.aboutValues}`}>Our Values</h2>
      <ul>
        <li>
          Quality: We source the finest beans from sustainable and ethical
          producers worldwide.
        </li>
        <li>
          Adventure: Our coffee takes you on a journey to distant lands with
          each brew.
        </li>
        <li>
          Community: We cherish the connections created over coffee and embrace
          a culture of inclusivity.
        </li>
        <li>
          Responsibility: We are committed to minimizing our environmental
          footprint and supporting local communities.
        </li>
      </ul>
      <h2 className={`${styles.aboutCoffee}`}>Our Coffee</h2>
      <p className="p-3 lg:p-5">
        Each bag of Journey Beans Coffee is carefully crafted to capture the
        essence of its origin. From the misty mountains of South America to the
        vibrant African plains, our beans are roasted to perfection to unlock
        their full potential. We offer a range of blends and single-origin
        beans, each with a unique story to tell. Whether you prefer a bold
        espresso to kickstart your day or a smooth pour-over to unwind in the
        evening, our coffee is designed to elevate your coffee experience to new
        heights of flavor and satisfaction.
      </p>
      <h2 className={`${styles.aboutJourney}`}>Join the Journey</h2>
      <p className="p-3 lg:p-5">
        We invite you to be a part of our coffee adventure. Embrace the thrill
        of discovery and indulge in the rich flavors that the world has to
        offer. Join us on this journey of exploration, and let Journey Beans
        Coffee awaken your senses and ignite your passion for exceptional
        coffee.
      </p>
    </div>
  );
};
export default About;
