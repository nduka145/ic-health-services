import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IC Health Services</title>
        <meta
          name="description"
          content="Mental and Behavioral Health Services in Owings Mills, MD"
        />
      </Head>

      {/* Navbar */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="IC Health Logo"
              width={120}
              height={40}
            />
          </div>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a href="#home" className="text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="tel:4436203616" className="text-blue-700 font-semibold">
            (443) 620-3616
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="pt-20">
        <Image
          src="/hero.jpg"
          alt="Mental health hero"
          width={1920}
          height={600}
          className="w-full h-[500px] object-cover"
        />
      </section>

{/* Services */}
<section id="services" className="max-w-7xl mx-auto py-16 text-center px-6">
  <h2 className="text-3xl font-bold mb-10">Our Services</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
    {[
      { name: "Mental Health Services", img: "/service1.jpg" },
      { name: "Medication Management", img: "/service2.jpg" },
      { name: "Psychiatric Evaluation", img: "/service3.jpg" },
      { name: "Telepsych", img: "/service4.jpg" },
    ].map((s) => (
      <div key={s.name} className="flex flex-col items-center">
        <h3 className="font-extrabold mb-3 text-lg">{s.name}</h3>
        <div className="w-[125px] h-[80px] overflow-hidden rounded-md">
          <img
            src={s.img}
            alt={s.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    ))}
  </div>
</section>


      {/* About */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-bold mb-4">
            Welcome to IC Health Services
          </h3>
          <p className="text-gray-700 leading-relaxed">
            IC Health Services provides mental and behavioral health care in
            Owings Mills, MD. Our goal is to promote total well-being through
            compassionate, individualized, and culturally competent care.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-10 text-center">
        <p className="font-semibold">IC Health Services</p>
        <p>110 Painters Mill Rd Suite 105, Owings Mills, MD 21117</p>
        <p className="mt-2">Call us: (443) 620-3616</p>
        <p className="mt-4 text-sm">
          © 2025 IC Health Services. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
