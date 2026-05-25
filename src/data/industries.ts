export interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const industriesData: Industry[] = [
  {
    id: 1,
    name: 'Fintech',
    description:
      'We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.',
    image: '/industries/fintech.png',
  },
  {
    id: 2,
    name: 'E-Commerce',
    description:
      'Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.',
    image: '/industries/ecommerce.png',
  },
  {
    id: 3,
    name: 'Healthcare',
    description:
      'Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.',
    image: '/industries/healthcare.png',
  },
];