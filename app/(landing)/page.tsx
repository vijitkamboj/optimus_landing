import Image, { StaticImageData } from "next/image";

import { Button } from "~/components/ui/button";
import HeroImage from "~/public/camera.jpg";
import Link from "next/link";
import { ReactNode } from "react";
import SecurityImage from "~/public/security.jpg";
import { services } from "~/data/services";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="max-h-[620px] overflow-hidden relative">
        {/* Hero Image */}
        <div className="bg-black">
          <Image
            src={HeroImage}
            alt="security"
            quality={100}
            className="opacity-50 transition-opacity animate-fadein"
            placeholder="blur"
          />
        </div>

        {/* Hero Moto */}
        <p className="w-max text-background/50 absolute font-logo top-1/3 -translate-y-1/6 left-1/2 -translate-x-1/2 text-5xl font-black">
          Safeguarding What Matters Most.
        </p>

        {/* Quick contacts */}
        <div className="text-background grid grid-cols-4 w-full grid-rows-1 gap-0  absolute bottom-0 left-1/2 -translate-x-1/2">
          <ContactItem
            title="Email"
            value="sales@optimussecurityservices.com"
          />
          <ContactItem title="Location" value="Dwarka, New Delhi-110075" />
          <ContactItem title="Mobile" value="+91-9582872788" />
          <ContactItem title="Office hours" value="Mon-Fri | 9AM-6PM" />
        </div>
      </div>

      {/* Range of services */}
      <div className="flex flex-col items-center p-8 gap-8 relative">
        <div
          className="absolute inset-0 bg-[url(/texture.svg)] bg-repeat bg-center opacity-5 pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="text-3xl font-bold p-2 z-10">Range of services</div>
        <div className="grid grid-cols-4 gap-6 z-10">
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
      <div className="p-12 px-36 gap-10 grid items-center grid-cols-[1fr_2fr] from-teal-900 to-zinc-100 bg-gradient-to-tr">
        <div className="text-4xl font-logo font-black">Diverse Sectors</div>

        <div>
          <p>
            We specialize in providing top-notch security services across
            diverse sectors, leveraging our expertise and industry experience.
            Our services cater to renowned industries such as{" "}
            <Highlight>Automobile</Highlight>,{" "}
            <Highlight>Food & Beverage</Highlight>,{" "}
            <Highlight>Finance</Highlight>, <Highlight>Electronics</Highlight>,{" "}
            <Highlight>Real Estate</Highlight>,{" "}
            <Highlight>Healthcare</Highlight>, and{" "}
            <Highlight>Education</Highlight>.
          </p>

          <p>
            In the <Highlight>Automobile</Highlight> sector, we ensure precision
            and protection, while in <Highlight>Finance and Banking</Highlight>,
            we deliver unmatched security for assets and operations. We
            safeguard high-value assets in <Highlight>Electronics</Highlight>,
            ensure safe environments in <Highlight>Real Estate</Highlight>, and
            protect sensitive facilities in <Highlight>Healthcare</Highlight>{" "}
            and <Highlight>Education</Highlight>.
          </p>

          <p>
            Our tailored solutions address the unique needs of each sector,
            making us a trusted partner for safety and security across
            industries.
          </p>
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="col-Highlight-1 py-8 px-4 flex flex-col bg-foreground/30">
      <div className="font-thin">{title}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
};

const ServiceCard = ({
  image,
  title,
  description,
  link,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="group h-96 w-72  gap-2 grid grid-rows-[1.5fr_0fr_1fr_0fr] bg-zinc-100 lg:hover:scale-[1.03] roup-hover: transition-transform">
      <div>
        <Image src={image} alt={title} placeholder="blur" />
      </div>
      <div className="font-semibold px-4">{title}</div>
      <div className="text-sm text-muted-foreground line-clamp-6 px-4">
        {description}
      </div>
      <Button
        variant={"link"}
        className="group-hover:underline hover:cursor-pointer justify-end p-0 px-4"
        asChild
      >
        <Link href={link}>Learn more</Link>
      </Button>
    </div>
  );
};

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className="px-1 text-sm font-semibold bg-zinc-100 rounded-lgO">
      {children}
    </span>
  );
};
