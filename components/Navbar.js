import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow fixed w-full z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="IC Health Logo" width={150} height={50} />
        </div>
        <ul className="flex gap-6 font-semibold text-gray-700">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <a href="tel:4436203616" className="text-blue-600 font-semibold">(443) 620-3616</a>
      </nav>
    </header>
  );
}
