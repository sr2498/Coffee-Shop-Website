import Layout from "../components/layout";
import styles from "../components/blog.module.css";
import NewsLetter from "../components/newsletter";
import BlogHero from "../components/blog";
import Link from "next/link";
import Date from "../components/date";
import { Card } from "primereact/card";
import Head from "next/head";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Journey Bean's Blog Page</title>
      </Head>
      <Layout>
        <BlogHero />
        <div className={`${styles.blogContainer}`} id="Blogs">
          <h2 className={styles.heroTitle}>Journey Bean's Coffee Blogs</h2>
          <div className={`grid ${styles.cardsContainer}`}>
            {allPostsData.map(({ id, date, title }) => (
              <Card className={`col-10 md:col-5 lg:col-5 ${styles.cards}`}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </Card>
            ))}
          </div>
        </div>
        <NewsLetter />
      </Layout>
    </>
  );
}
