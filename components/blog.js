import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import blogImg from "../public/blog-coffee.jpg";
import { Button } from "primereact/button";

const BlogHero = () => {
  return (
    <div className={`grid ${styles.heroSection}`}>
      <div className={`lg:col sm:col-12 ${styles.introBlock}`}>
        <h1 className={styles.heroTitle}>
          Welcome to Journey Bean's Coffee Blog
        </h1>
        <div className={styles.welcomeBod}>
          <p className={styles.welcomePara}>
            Welcome, coffee enthusiasts, to{" "}
            <strong>The Journey Bean's Coffee Blog</strong> – a cozy corner
            where we share everything about our love for coffee, our community,
            and the special experiences that make our coffee shops a destination
            for connection and warmth.
          </p>

          <div className={styles.buttonBlock}>
            <a href="#Blogs" className={styles.heroButton}>
              Read our Blogs
            </a>
          </div>

          <p className={styles.welcomePara}>In our blog, you'll discover:</p>
          <ul>
            <li>
              <strong>Coffee Stories</strong>: Learn about the journey of our
              beans, the craftsmanship of our baristas, and the art of brewing
              the perfect cup.
            </li>
            <li>
              <strong>Community Spotlight</strong>: Get to know our local
              artists, musicians, and partners who contribute to the unique
              culture of our shops.
            </li>
            <li>
              <strong>Behind the Scenes</strong>: Meet our team, explore our
              cafes, and uncover the history and philosophy that guide our
              mission.
            </li>
            <li>
              <strong>Special Features</strong>: Delight in seasonal drinks,
              promotions, and exclusive events happening in our shops.
            </li>
            <li>
              <strong>Voices and Values</strong>: Understand our commitment to
              sustainability, inclusivity, and supporting local causes that
              matter to us.
            </li>
          </ul>

          <p className={styles.welcomePara}>
            Whether you're a regular patron or just curious about what makes our
            coffee special, we invite you to brew a cup, settle in, and explore
            our world. Leave a comment, share your thoughts, or simply enjoy the
            stories that percolate through these pages.
          </p>
        </div>
      </div>

      <div className={`lg:col sm:col-12 ${styles.introBlock}`}>
        <Image
          src={blogImg} // Update with your image path
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default BlogHero;
