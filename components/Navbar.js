import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-95">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="IC Health Logo" width={120} height={40} />
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {["Home", "Services", "Reviews", "Gallery", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-700 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <a href="tel:4436203616" className="text-blue-700 font-semibold">
          (443) 620-3616
        </a>
      </nav>
    </header>
  );
}
