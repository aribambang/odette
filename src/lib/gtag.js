export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
