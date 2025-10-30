import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow fixed w-full z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="IC Health Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex gap-10 text-[15px] font-medium text-gray-800">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-blue-600 transition">
              Reviews
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-blue-600 transition">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Phone */}
        <div className="flex items-center gap-3">
          <a
            href="tel:4436203616"
            className="text-gray-800 font-semibold hover:text-blue-600 transition"
          >
            (443) 620-3616
          </a>
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700 transition">
            VIEW MAIN WEBSITE
          </button>
        </div>
      </nav>
    </header>
  );
}
