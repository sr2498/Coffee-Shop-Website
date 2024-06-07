/* eslint-disable quotes */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const markdownFilePath = path.join(
  process.cwd(),
  "privacy_posts",
  "privacypolicy.md"
);

export async function getPrivacyPostData() {
  const fileContents = fs.readFileSync(markdownFilePath, "utf8");

  // Parse the front matter
  const matterResult = matter(fileContents);

  // Convert markdown content to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    ...matterResult.data,
    contentHtml,
  };
}
