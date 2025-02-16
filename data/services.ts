import { Briefcase, Flame, LucideProps, ShieldAlert, ShieldCheck, Target, UserCheck, Users, Video } from 'lucide-react'

export const services: {
  title: string
  href: string
  description: string // Short description
  longDescription: string // Long description
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>
}[] = [
  {
    title: 'Security Guard',
    href: '/services/security-guard',
    description: 'Trained guards for round-the-clock safety.',
    longDescription:
      'Our professional security guards are trained to provide 24/7 safety and vigilance. They are equipped to handle any situation with expertise, ensuring your property and personnel remain secure at all times.',
    icon: ShieldCheck,
  },
  {
    title: 'Security Supervisor',
    href: '/services/security-supervisor',
    description: 'Experienced supervisors for security oversight.',
    longDescription:
      'Our security supervisors are skilled in managing and overseeing security teams. They ensure the proper execution of security protocols and respond promptly to emergencies, providing leadership and effective coordination.',
    icon: UserCheck,
  },
  {
    title: 'Armed PSO',
    href: '/services/armed-pso',
    description: 'Armed officers for high-risk protection.',
    longDescription:
      'Our armed Personal Security Officers (PSOs) are trained professionals who provide high-level protection. They are equipped to safeguard individuals in high-risk scenarios, ensuring peace of mind and safety.',
    icon: ShieldAlert,
  },
  {
    title: 'Gunman',
    href: '/services/gunman',
    description: 'Licensed gunmen for reliable security.',
    longDescription:
      'Our licensed gunmen are experienced and well-trained to provide reliable and secure protection. Whether for personal or property security, they are equipped to handle challenging situations with precision.',
    icon: Target,
  },
  {
    title: 'Fire Safety Expert',
    href: '/services/fire-safety-expert',
    description: 'Experts to ensure fire safety compliance.',
    longDescription:
      'Our fire safety experts specialize in assessing risks, implementing safety measures, and ensuring compliance with fire regulations. They are dedicated to preventing fire hazards and safeguarding lives and property.',
    icon: Flame,
  },
  {
    title: 'ASO',
    href: '/services/aso',
    description: 'Assistant officers to support protocols.',
    longDescription:
      'Assistant Security Officers (ASOs) are key members of our team who assist in maintaining security protocols, conducting inspections, and providing support to the overall security operations.',
    icon: Briefcase,
  },
  {
    title: 'Surveillance Room',
    href: '/services/surveillance-room',
    description: '24/7 advanced surveillance systems.',
    longDescription:
      'Our advanced surveillance room solutions offer round-the-clock monitoring and threat detection. Equipped with state-of-the-art technology, we ensure maximum coverage and rapid response to security breaches.',
    icon: Video,
  },
  {
    title: 'Bouncer',
    href: '/services/bouncer',
    description: 'Bouncers for event security and management.',
    longDescription:
      'Our professional bouncers provide security and crowd management for events of all sizes. Trained in handling difficult situations, they ensure smooth operations and maintain order.',
    icon: Users,
  },
]
