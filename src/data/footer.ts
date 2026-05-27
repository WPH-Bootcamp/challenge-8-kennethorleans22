import { companyInfo } from './company';

export const footerNavItems = [
  { label: 'About',        sectionId: 'about'        },
  { label: 'Service',      sectionId: 'service'      },
  { label: 'Projects',     sectionId: 'projects'     },
  { label: 'Testimonials', sectionId: 'testimonials' },
  { label: 'FAQ',          sectionId: 'faq'          },
];

export const socialLinks = [
  { name: 'Facebook',  href: companyInfo.social.facebook,  icon: '/social/facebook.svg'  },
  { name: 'Instagram', href: companyInfo.social.instagram, icon: '/social/instagram.svg' },
  { name: 'LinkedIn',  href: companyInfo.social.linkedin,  icon: '/social/linkedin.svg'  },
  { name: 'TikTok',    href: companyInfo.social.tiktok,    icon: '/social/tiktok.svg'    },
];