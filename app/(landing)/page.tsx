import HeroImage from "~/public/camera.jpg";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="max-h-[620px] overflow-hidden relative">
        <div className="bg-black">
          <Image
            src={HeroImage}
            alt="security"
            quality={100}
            className="opacity-50 transition-opacity animate-fadein"
            placeholder="blur"
          />
        </div>
        <p className="w-max text-background/50 absolute font-logo top-1/3 -translate-y-1/6 left-1/2 -translate-x-1/2 text-5xl font-black">
          Safeguarding What Matters Most.
        </p>

        <div className="text-background grid grid-cols-4 w-full grid-rows-1 gap-0  absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="col-span-1 py-8 px-4 flex flex-col bg-foreground/30">
            <div className="font-thin">Email</div>
            <div className="font-bold">sales@optimussecurityservices.com</div>
          </div>
          <div className="col-span-1 py-8 px-4 flex flex-col bg-foreground/30">
            <div className="font-thin">Location</div>
            <div className="font-bold">Dwarka, New Delhi-110075</div>
          </div>
          <div className="col-span-1 py-8 px-4 flex flex-col bg-foreground/30">
            <div className="font-thin">Mobile</div>
            <div className="font-bold">+91-9582872788</div>
          </div>
          <div className="col-span-1 py-8 px-4 flex flex-col bg-foreground/30">
            <div className="font-thin">Office hours</div>
            <div className="font-bold">Mon-Fri | 9AM-6PM</div>
          </div>
        </div>
      </div>

      {/* Range of services */}
      <div className="h-[500px] bg-gray-200 grid grid-cols-[0.5fr_1fr]">
        {/* <div className="text-2xl font-bold  p-2">Range of services</div> */}
        {/* <div className="text-2xl font-bold  p-2">Range of services</div> */}
      </div>

      {/* Different sectors */}
      <div className="h-[500px] bg-gray-300">Different sectors</div>

      {/* A moto banner */}
      {/* <div className="h-[500px] bg-gray-400">moto banner</div> */}
    </div>
  );
}
