import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="max-h-[1400px] bg-black relative">
        <Image
          src="/camera.jpg"
          alt="security"
          className="opacity-60"
          width={1920}
          height={1080}
        />
        <p className="absolute left-0 top-0 text-white text-5xl font-black">
          Safeguarding What Matters Most.
        </p>
      </div>
      {/* contact summary */}
      <div className="h-[500px]"></div>
      <div></div>
      <div></div>
      <div></div>
      {/* Tag and contact image */}
      {/* Sevices list */}
    </div>
  );
}
