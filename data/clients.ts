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
  Users,
  Utensils,
} from "lucide-react";

export const clients: {
  title: string;
  href: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    title: "All Clients",
    href: "/clients/all",
    description: "Our diverse client base across industries.",
    icon: Users,
  },
  {
    title: "Residential Security Services",
    href: "/clients/residential-security",
    description: "Safety solutions for residential areas and societies.",
    icon: Home,
  },
  {
    title: "Retail Security Services",
    href: "/clients/retail-security",
    description: "Security for retail outlets and malls.",
    icon: ShoppingBag,
  },
  {
    title: "Banking & Finance",
    href: "/clients/banking-finance",
    description: "Secure environments for banks and financial services.",
    icon: Banknote,
  },
  {
    title: "Educational Institutions",
    href: "/clients/education",
    description: "Safety solutions for schools, colleges, and universities.",
    icon: Book,
  },
  {
    title: "Health Care",
    href: "/clients/healthcare",
    description: "Specialized security for hospitals and clinics.",
    icon: HeartPulse,
  },
  {
    title: "Industrial Security Services",
    href: "/clients/industrial-security",
    description: "Tailored solutions for factories and plants.",
    icon: Factory,
  },
  {
    title: "Infrastructure",
    href: "/clients/infrastructure",
    description: "Security for large-scale infrastructure projects.",
    icon: Building,
  },
  {
    title: "Warehouse & Logistics",
    href: "/clients/warehouse-logistics",
    description: "Security for storage and transportation hubs.",
    icon: Package,
  },
  {
    title: "Auto Sector",
    href: "/clients/auto-sector",
    description: "Comprehensive security for the automotive industry.",
    icon: Car,
  },

  {
    title: "Food & Beverage Sector",
    href: "/clients/food-beverage",
    description: "Reliable security for food and beverage establishments.",
    icon: Utensils,
  },

  {
    title: "Government Sector",
    href: "/clients/government",
    description: "Trusted security services for government entities.",
    icon: Landmark,
  },

  {
    title: "IT Sector",
    href: "/clients/it-sector",
    description: "Safeguarding IT companies and data centers.",
    icon: Monitor,
  },

  {
    title: "NGO Sector",
    href: "/clients/ngo",
    description: "Trusted security for non-governmental organizations.",
    icon: Globe,
  },
];
