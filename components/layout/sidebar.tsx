'use client'

import { Building, ChevronDown, ChevronUp, GraduationCap, Home, Info, ShieldCheck } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '~/components/ui/sidebar'

import Link from 'next/link'
import { clients } from '~/data/clients'
import { services } from '~/data/services'
import { useState } from 'react'

export function AppSidebar() {
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({})

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }))
  }

  return (
    <div className="md:hidden">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="text-2md flex-shrink-0 font-logo text-xl font-black text-teal-600">
          Optimus Security Services
        </div>
        <SidebarTrigger className="size-auto" />
      </div>
      <Sidebar variant="sidebar" side="right">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Home */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <Home className="size-5" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Services */}
                <SidebarMenuItem className="flex flex-col">
                  <SidebarMenuButton
                    onClick={() => toggleGroup('services')}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="size-5" />
                      <span>Services</span>
                    </div>
                    {openGroups['services'] ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                  </SidebarMenuButton>
                  {openGroups['services'] && (
                    <div className="ml-7 mt-2 flex flex-col gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-accent"
                        >
                          <service.icon className="size-4 text-muted-foreground" />
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>

                {/* Clients */}
                <SidebarMenuItem className="flex flex-col">
                  <SidebarMenuButton
                    onClick={() => toggleGroup('clients')}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Building className="size-5" />
                      <span>Clients</span>
                    </div>
                    {openGroups['clients'] ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                  </SidebarMenuButton>
                  {openGroups['clients'] && (
                    <div className="ml-7 mt-2 flex flex-col gap-2">
                      {clients.map((client) => (
                        <Link
                          key={client.href}
                          href={client.href}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-accent"
                        >
                          <client.icon className="size-4 text-muted-foreground" />
                          <span>{client.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>

                {/* About */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/about">
                      <Info className="size-5" />
                      <span>About us</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Training */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/training">
                      <GraduationCap className="size-5" />
                      <span>Training</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  )
}
