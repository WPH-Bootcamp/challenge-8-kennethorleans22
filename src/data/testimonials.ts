export interface Testimonial {
  id: number;
  author: string;
  role: string;
  avatar: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    author: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    avatar: '/testimonials/sarah-tan.png',
    quote:
      '“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”',
  },
  {
      id: 2,
    author: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    avatar: '/testimonials/emily-chen.png',
    quote:
      '“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”',
  },
  { id: 3,
    author: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    avatar: '/testimonials/john-lee.png',
    quote:
      '“Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.”',
 
  },
];
