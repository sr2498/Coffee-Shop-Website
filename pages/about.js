import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import About from "../components/about";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Journey Bean's About Page</title>
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;
