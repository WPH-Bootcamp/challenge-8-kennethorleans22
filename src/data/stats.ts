/**
 * Stats Data
 *
 * Data untuk section angka-angka pencapaian perusahaan.
 * numericValue digunakan untuk animasi count-up.
 * suffix ditampilkan setelah angka ("+" atau "%").
 */

export interface StatItem {
  id: number;
  numericValue: number;
  suffix: string;
  label: string;
}

export const statsData: StatItem[] = [
  { id: 1, numericValue: 50,  suffix: '+', label: 'Projects Delivered'      },
  { id: 2, numericValue: 5,   suffix: '+', label: 'Years of Experience'      },
  { id: 3, numericValue: 10,  suffix: '+', label: 'Industry Awards Won'      },
  { id: 4, numericValue: 100, suffix: '%', label: 'Client Satisfaction Rate' },
];