import { companyInfo } from './company';

export const footerNavItems = [
  { label: 'About',        sectionId: 'about'        },
  { label: 'Service',      sectionId: 'service'      },
  { label: 'Projects',     sectionId: 'projects'     },
  { label: 'Testimonials', sectionId: 'testimonials' },
  { label: 'FAQ',          sectionId: 'faq'          },
];

export const socialLinks = [
  { name: 'Facebook',  href: companyInfo.social.facebook,  iconDark: '/social/facebook.svg',   iconLight: '/social/facebook-light.svg'  },
  { name: 'Instagram', href: companyInfo.social.instagram, iconDark: '/social/instagram.svg',  iconLight: '/social/instagram-light.svg' },
  { name: 'LinkedIn',  href: companyInfo.social.linkedin,  iconDark: '/social/linkedin.svg',   iconLight: '/social/linkedin-light.svg'  },
  { name: 'TikTok',    href: companyInfo.social.tiktok,    iconDark: '/social/tiktok.svg',     iconLight: '/social/tiktok-light.svg'    },
];