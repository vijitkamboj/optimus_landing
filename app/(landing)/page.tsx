import Image, { StaticImageData } from 'next/image'

import { Button } from '~/components/ui/button'
import HeroImage from '~/public/camera.jpg'
import Link from 'next/link'
import { ReactNode } from 'react'
import SecurityImage from '~/public/security.jpg'
import { services } from '~/data/services'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative max-h-[620px] overflow-hidden">
        {/* Hero Image */}
        <div className="bg-black">
          <Image
            src={HeroImage}
            alt="security"
            quality={100}
            className="animate-fadein opacity-50 transition-opacity"
            placeholder="blur"
          />
        </div>

        {/* Hero Moto */}
        <p className="-translate-y-1/6 absolute left-1/2 top-1/3 w-max -translate-x-1/2 font-logo text-5xl font-black text-background/50">
          Safeguarding What Matters Most.
        </p>

        {/* Quick contacts */}
        <div className="absolute bottom-0 left-1/2 grid w-full -translate-x-1/2 grid-cols-4 grid-rows-1 gap-0 text-background">
          <ContactItem title="Email" value="sales@optimussecurityservices.com" />
          <ContactItem title="Location" value="Dwarka, New Delhi-110075" />
          <ContactItem title="Mobile" value="+91-9582872788" />
          <ContactItem title="Office hours" value="Mon-Fri | 9AM-6PM" />
        </div>
      </div>

      {/* Range of services */}
      <div className="relative flex flex-col items-center gap-8 p-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[url(/texture.svg)] bg-center bg-repeat opacity-5"
          aria-hidden="true"
        ></div>
        <div className="z-10 p-2 text-3xl font-bold">Range of services</div>
        <div className="z-10 grid grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              link={service.href}
              description={service.longDescription}
              image={SecurityImage}
            />
          ))}
        </div>
      </div>

      {/* Different sectors */}
      <div className="grid grid-cols-[1fr_2fr] items-center gap-10 bg-gradient-to-tr from-teal-900 to-zinc-100 p-12 px-36">
        <div className="font-logo text-4xl font-black">Diverse Sectors</div>

        <div>
          <p>
            We specialize in providing top-notch security services across diverse sectors, leveraging our expertise and
            industry experience. Our services cater to renowned industries such as <Highlight>Automobile</Highlight>,{' '}
            <Highlight>Food & Beverage</Highlight>, <Highlight>Finance</Highlight>, <Highlight>Electronics</Highlight>,{' '}
            <Highlight>Real Estate</Highlight>, <Highlight>Healthcare</Highlight>, and <Highlight>Education</Highlight>.
          </p>

          <p>
            In the <Highlight>Automobile</Highlight> sector, we ensure precision and protection, while in{' '}
            <Highlight>Finance and Banking</Highlight>, we deliver unmatched security for assets and operations. We
            safeguard high-value assets in <Highlight>Electronics</Highlight>, ensure safe environments in{' '}
            <Highlight>Real Estate</Highlight>, and protect sensitive facilities in <Highlight>Healthcare</Highlight>{' '}
            and <Highlight>Education</Highlight>.
          </p>

          <p>
            Our tailored solutions address the unique needs of each sector, making us a trusted partner for safety and
            security across industries.
          </p>
        </div>
      </div>
    </div>
  )
}

const ContactItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="col-Highlight-1 flex flex-col bg-foreground/30 px-4 py-8">
      <div className="font-thin">{title}</div>
      <div className="font-bold">{value}</div>
    </div>
  )
}

const ServiceCard = ({
  image,
  title,
  description,
  link,
}: {
  image: StaticImageData
  title: string
  description: string
  link: string
}) => {
  return (
    <div className="roup-hover: group grid h-96 w-72 grid-rows-[1.5fr_0fr_1fr_0fr] gap-2 bg-zinc-100 transition-transform lg:hover:scale-[1.03]">
      <div>
        <Image src={image} alt={title} placeholder="blur" />
      </div>
      <div className="px-4 font-semibold">{title}</div>
      <div className="line-clamp-6 px-4 text-sm text-muted-foreground">{description}</div>
      <Button variant={'link'} className="justify-end p-0 px-4 hover:cursor-pointer group-hover:underline" asChild>
        <Link href={link}>Learn more</Link>
      </Button>
    </div>
  )
}

const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="rounded-lgO bg-zinc-100 px-1 text-sm font-semibold">{children}</span>
}
