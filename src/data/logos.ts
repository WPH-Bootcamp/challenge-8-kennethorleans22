/**
 * Partner Logos Data
 * Aksesnyaku via string path, tidak perlu import satu2.
 */

export interface LogoItem {
  name: string;
  src: string;
}

export const partnerLogos: LogoItem[] = [
  { name: 'Adobe',     src: '/logos/adobe.png'     },
  { name: 'Upwork',     src: '/logos/upwork.png'     },
  { name: 'Zoom',       src: '/logos/zoom.png'       },
  { name: 'Postman',    src: '/logos/postman.png'    },
  { name: 'Databricks', src: '/logos/databricks.png' },
  { name: 'Airbnb',     src: '/logos/airbnb.png'     },
  { name: 'Dropbox',    src: '/logos/dropbox.png'    },
  { name: 'PayPal',     src: '/logos/paypal.png'     },
  { name: 'Netflix',    src: '/logos/netflix.png'    },
];