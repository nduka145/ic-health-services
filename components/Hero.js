import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <Image
        src="/hero.jpg"
        alt="Mental health hero"
        width={1920}
        height={600}
        className="w-full h-[500px] object-cover"
      />
    </section>
  );
}
