import { Footer } from '~/components/layout/footer'
import { NavBar } from '~/components/layout/navbar'

export default function LandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-[1900px]">
      <NavBar />
      {/* {children}
      <Footer /> */}
    </div>
  )
}
