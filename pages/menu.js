import Menu from "../components/menu";
import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Journey Bean's Menu Page</title>
      </Head>
      <Menu />
    </Layout>
  );
}
