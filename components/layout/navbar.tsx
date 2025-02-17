import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu'

import Link from 'next/link'
import { clients } from '~/data/clients'
import { cn } from '~/lib/utils'
import { services } from '~/data/services'

export const NavBar = () => {
  return (
    <div className="hidden w-full items-baseline gap-0 px-4 py-6 lg:flex">
      <div className="flex-shrink-0 font-logo text-2xl font-black text-teal-600">Optimus Security Services</div>
      <div className="ml-8 mr-4 w-[0.1rem] self-stretch bg-accent-foreground"></div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] grid-cols-3 p-3">
                {services.map((component) => (
                  <ListItem icon={component.icon} key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Clients</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[655px] grid-cols-4 p-3 xl:w-[800px]">
                {clients.map((component) => (
                  <ListItem icon={component.icon} key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/training" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Training</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<'a'>,
  React.ComponentPropsWithRef<'a'> & {
    title: string
    icon?: React.ElementType
  }
>(({ className, title, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-1">
            {Icon && <Icon size={20} className="flex-shrink-0 text-muted-foreground" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
