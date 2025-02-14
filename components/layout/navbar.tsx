import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="font-logo font-black text-2xl text-teal-900 flex-shrink-0">
        Optimus Security
      </div>
      {/* <div className="font-logo font-black text-sm leading-5 flex-shrink-0 flex-col">
        <div>Optimus</div>
        <div>Security</div>
        <div>Services</div>
      </div> */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
      <Link href="/clients">Clients</Link>
      <Link href="/training">Training</Link>
    </div>
  );
};
