import { services } from "~/data/services";

export const Footer = () => {
  return (
    <div className="bg-zinc-100 flex flex-col items-center p-8 px-36 gap-4">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 ">
        <div className="flex flex-col gap-2">
          <div className="font-bold">About us</div>
          <div className="text-sm">
            Incorporated in 2024, Optimus security services stands as a beacon
            of excellence, adorned with the prestigious PSARA, ISO and CAPSI
            certifications, boasting a legacy of over 1 year.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Company</div>
          <ul className="text-sm leading-7">
            <li>Services</li>
            <li>Clients</li>
            <li>Training</li>
            <li>Contact us</li>
            <li>Privacy & Policy</li>
            <li>Our locations</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Services</div>
          <ul className="text-sm leading-7">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Contact us</div>
          <ul className="text-sm leading-7">
            <li className="leading-4">
              RZ-F1/113A, Street no.-2, Mahavir Enclave, Palam Colony, New
              Delhi, 110045
            </li>
            <li>sales@optimussecurityservices.com</li>
            <li>+91-9582872788</li>
          </ul>
        </div>
      </div>
      <div className="text-xs">
        Within our arsenal, lie vigilant security guards and sentinels of
        unyielding dedication, meticulously trained to safeguard your interests.
        Our unwavering services currently cater to Delhi NCR, Pune and Mumbai.
        Trust in our expertise for your security and witness reassurance in
        every step you take. Best Security Services Provider Company/Agency.
      </div>
    </div>
  );
};
