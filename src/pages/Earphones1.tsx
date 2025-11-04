import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import man from "../assets/man.png";

// ✅ Import all product images from src/assets
import earphone from "../assets/earphone.png";
import mark1 from "../assets/mark1.png";
import xx59 from "../assets/xx59.png";
import zx9speaker from "../assets/zx9speaker.png";
import earpod1 from "../assets/earpod1.png";
import earpod2 from "../assets/earpod2.png";
import earpod3 from "../assets/earpod3.png";

export default function Earphones1() {
  const navigate = useNavigate();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 text-black">
      {/* Go Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-500 mb-6 hover:text-black"
      >
        Go Back
      </button>

      {/* Product Overview */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src={earphone}
          alt="YX1 Earphones"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-sm uppercase tracking-[10px] text-orange-400 mb-2">
            New Product
          </p>
          <h1 className="text-4xl font-bold uppercase mb-6">
            YX1 Wireless Earphones
          </h1>
          <p className="text-gray-500 mb-6">
            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>
          <p className="font-bold text-lg mb-6">$ 599</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
              <button className="text-gray-500 hover:text-black">-</button>
              <span className="px-4 font-semibold">1</span>
              <button className="text-gray-500 hover:text-black">+</button>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 uppercase font-semibold hover:bg-[#FBAF85] transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Features & In the Box */}
      <section className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
          <p className="text-gray-600 mb-4">
           Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
          </p>
          <p className="text-gray-600">
            The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> Earphones Unit
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">2x</span> Multi-size Earplugs 
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> User Manual
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> USB-C Charging Cable
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> Travel Pouch
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid md:grid-cols-2 gap-2 mb-12 px-6 md:px-12 py-12">
        <div className="grid gap-2">
          <img src={earpod1} alt="Earpod1" className="rounded-xl" />
          <img src={earpod2} alt="Earpod2" className="rounded-xl" />
        </div>
        <img src={earpod3} alt="Earpod3" className="rounded-xl" />
      </section>

      {/* You may also like */}
      <section className="text-center mb-24">
        <h2 className="text-2xl font-bold uppercase mb-12">You May Also Like</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[{ name: "XX99 Mark I", img: mark1 },
            { name: "XX59", img: xx59 },
            { name: "ZX9 Speaker", img: zx9speaker },
           
          ].map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              <img src={p.img} alt={p.name} className="rounded-xl mb-6 w-full max-w-[300px]" />
              <h3 className="text-xl font-bold uppercase mb-4">{p.name}</h3>
              <button
                onClick={() =>
                  navigate(`/product/${p.name.toLowerCase().replace(" ", "-")}`)
                }
                className="bg-orange-500 text-white px-6 py-3 uppercase font-semibold hover:bg-[#FBAF85] transition"
              >
                See Product
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-24 py-24">
        <CategoryCard title="Headphones" />
        <CategoryCard title="Speakers" />
        <CategoryCard title="Earphones" />
      </section>

      {/* BEST GEAR */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-24 py-24">
        <div className="space-y-4 max-w-lg">
          <h2 className="text-3xl font-bold uppercase">
            Bringing you the <span className="text-orange-500">best</span> audio gear
          </h2>
          <p className="text-gray-600">
           Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={man} alt="man" className="rounded-lg w-full md:w-1/2" />
      </section>
    </main>
  );
}
