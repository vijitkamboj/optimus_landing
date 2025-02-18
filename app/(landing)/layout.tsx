import { AppSidebar } from '~/components/layout/sidebar'
import { Footer } from '~/components/layout/footer'
import { NavBar } from '~/components/layout/navbar'
import { SidebarProvider } from '~/components/ui/sidebar'

export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="mx-auto w-full max-w-[1900px]">
        <NavBar />
        <AppSidebar />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  )
}
