import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./privacypolicy.module.css";
import Image from "next/image";

const privacyPolicy = `
[The content of your privacypolicy.md file goes here]
`;

const PrivacyPolicy = () => {
  return (
    <div>
      <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;
