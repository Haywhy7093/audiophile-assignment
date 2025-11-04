import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import ig from "../assets/ig.svg";
import x from "../assets/x.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-24 py-12 space-y-10">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* --- Top Row: Logo + Navigation --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left: Logo */}
          <img src={logo} alt="Audiophile" className="w-32 mb-6 md:mb-0" />

          {/* Right: Navigation */}
          <nav className="flex gap-8 uppercase text-sm">
            <a href="#" className="hover:text-orange-500 transition">Home</a>
            <a href="#" className="hover:text-orange-500 transition">Headphones</a>
            <a href="#" className="hover:text-orange-500 transition">Speakers</a>
            <a href="#" className="hover:text-orange-500 transition">Earphones</a>
          </nav>
        </div>

        {/* --- Bottom Row: Text + Social Icons --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          {/* Left: Description + Copyright */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team
              of music lovers and sound specialists who are devoted to helping you get the most
              out of personal audio.
            </p>
            <p className="text-gray-500 text-xs mt-6">
              Copyright 2025. All Rights Reserved
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook">
              <img
                src={fb}
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75 transition"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src={ig}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75 transition"
              />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <img
                src={x}
                alt="X"
                className="w-6 h-6 hover:opacity-75 transition"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
