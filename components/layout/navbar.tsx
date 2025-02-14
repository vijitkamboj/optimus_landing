import * as React from "react";

import {
  Banknote,
  Book,
  Car,
  LucideProps,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Utensils,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

import Link from "next/link";
import { cn } from "~/lib/utils";

const services: {
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
];

const clients: {
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
    title: "Auto Sector",
    href: "/clients/auto-sector",
    description: "Comprehensive security for the automotive industry.",
    icon: Car,
  },
  {
    title: "Educational Institutions",
    href: "/clients/education",
    description: "Safety solutions for schools, colleges, and universities.",
    icon: Book,
  },
  {
    title: "Food & Beverage Sector",
    href: "/clients/food-beverage",
    description: "Reliable security for food and beverage establishments.",
    icon: Utensils,
  },
  {
    title: "Banking & Finance",
    href: "/clients/banking-finance",
    description: "Secure environments for banks and financial services.",
    icon: Banknote,
  },
];

export const NavBar = () => {
  return (
    <div className="flex gap-0 items-baseline w-full py-6 px-4">
      <div className="font-logo font-black text-xl text-teal-600 flex-shrink-0">
        Optimus Security Services
      </div>
      <div className="bg-accent-foreground w-[0.1rem] self-stretch ml-8 mr-4"></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/home" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((component) => (
                  <ListItem
                    icon={component.icon}
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Clients</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {clients.map((component) => (
                  <ListItem
                    icon={component.icon}
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/training" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Training
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithRef<"a"> & {
    title: string;
    icon?: React.ElementType;
  }
>(({ className, title, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon size={20} className="text-muted-foreground" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
