/* eslint-disable @typescript-eslint/no-explicit-any */
export const GA_TRACKING_ID = 'G-S16NS1060N';

declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
