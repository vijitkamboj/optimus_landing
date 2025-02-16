import {
  Banknote,
  Book,
  Building,
  Car,
  Factory,
  Globe,
  HeartPulse,
  Home,
  Landmark,
  LucideProps,
  Monitor,
  Package,
  ShoppingBag,
  Utensils,
} from 'lucide-react'

export const clients: {
  title: string
  href: string
  description: string
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}[] = [
  {
    title: 'Residential',
    href: '/clients/residential',
    description: 'Safety solutions for residential areas and societies.',
    icon: Home,
  },
  {
    title: 'Retail',
    href: '/clients/retail',
    description: 'Security for retail outlets and malls.',
    icon: ShoppingBag,
  },
  {
    title: 'Banking & Finance',
    href: '/clients/banking-and-finance',
    description: 'Secure environments for banks and financial services.',
    icon: Banknote,
  },
  {
    title: 'Educational Institutions',
    href: '/clients/educational-institutions',
    description: 'Safety solutions for schools, colleges, and universities.',
    icon: Book,
  },
  {
    title: 'Health Care',
    href: '/clients/health-care',
    description: 'Specialized security for hospitals and clinics.',
    icon: HeartPulse,
  },
  {
    title: 'Industrial Security',
    href: '/clients/industrial-security',
    description: 'Tailored solutions for factories and plants.',
    icon: Factory,
  },
  {
    title: 'Infrastructure',
    href: '/clients/infrastructure',
    description: 'Security for large-scale infrastructure projects.',
    icon: Building,
  },
  {
    title: 'Warehouse & Logistics',
    href: '/clients/warehouse-and-logistics',
    description: 'Security for storage and transportation hubs.',
    icon: Package,
  },
  {
    title: 'Automotive',
    href: '/clients/automotive',
    description: 'Comprehensive security for the automotive industry.',
    icon: Car,
  },
  {
    title: 'Food & Beverage',
    href: '/clients/food-and-beverage',
    description: 'Reliable security for food and beverage establishments.',
    icon: Utensils,
  },
  {
    title: 'Government',
    href: '/clients/government',
    description: 'Trusted security services for government entities.',
    icon: Landmark,
  },
  {
    title: 'IT',
    href: '/clients/it',
    description: 'Safeguarding IT companies and data centers.',
    icon: Monitor,
  },
  {
    title: 'NGO',
    href: '/clients/ngo',
    description: 'Trusted security for non-governmental organizations.',
    icon: Globe,
  },
]
