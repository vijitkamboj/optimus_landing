import {
  Briefcase,
  Flame,
  LucideProps,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Video,
} from "lucide-react";

export const services: {
  title: string;
  href: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}[] = [
  {
    title: "Security Services",
    href: "/services/security-services",
    description: "Comprehensive security for all needs.",
    icon: Shield,
  },
  {
    title: "Security Guard",
    href: "/services/security-guard",
    description: "Trained guards for round-the-clock safety.",
    icon: ShieldCheck,
  },
  {
    title: "Security Supervisor",
    href: "/services/security-supervisor",
    description: "Experienced supervisors for security oversight.",
    icon: UserCheck,
  },
  {
    title: "Armed PSO",
    href: "/services/armed-pso",
    description: "Armed officers for high-risk protection.",
    icon: ShieldAlert,
  },
  {
    title: "Gunman",
    href: "/services/gunman",
    description: "Licensed gunmen for reliable security.",
    icon: Target,
  },
  {
    title: "Fire Safety Expert",
    href: "/services/fire-safety-expert",
    description: "Experts to ensure fire safety compliance.",
    icon: Flame,
  },
  {
    title: "ASO",
    href: "/services/aso",
    description: "Assistant officers to support protocols.",
    icon: Briefcase,
  },
  {
    title: "Surveillance Room",
    href: "/services/surveillance-room",
    description: "24/7 advanced surveillance systems.",
    icon: Video,
  },
  {
    title: "Bouncer",
    href: "/services/bouncer",
    description: "Bouncers for event security and management.",
    icon: Users,
  },
];
