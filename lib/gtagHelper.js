/* eslint-disable quotes */

export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_DB_GA, {
    // eslint-disable-next-line camelcase
    page_path: url,
  });
};
