import Head from "next/head";
import Layout from "../components/layout";
import Date from "../components/date";
import { getPrivacyPostData } from "../lib/privacy";

export default function PrivacyPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <p></p>
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = await getPrivacyPostData("privacypolicy");
  return {
    props: {
      postData,
    },
  };
}
