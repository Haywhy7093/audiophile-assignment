import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import man from "../assets/man.png";

// ✅ Import all product images from src/assets
import mark2 from "../assets/mark2.png";
import mark1 from "../assets/mark1.png";
import xx59 from "../assets/xx59.png";
import zx9speaker from "../assets/zx9speaker.png";
import Bitmap1 from "../assets/Bitmap1.png";
import Bitmap2 from "../assets/Bitmap2.png";
import Bitmap3 from "../assets/Bitmap3.png";

export default function Headphones1() {
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
          src={mark1}
          alt="XX99 Mark I Headphones"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-sm uppercase tracking-[10px] text-orange-400 mb-2">
            New Product
          </p>
          <h1 className="text-4xl font-bold uppercase mb-6">
            XX99 Mark I Headphones
          </h1>
          <p className="text-gray-500 mb-6">
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. 
          </p>
          <p className="font-bold text-lg mb-6">$ 2,999</p>

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
           As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
          </p>
          <p className="text-gray-600">
            From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> Headphone Unit
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">2x</span> Replacement Earcups
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> User Manual
            </li>
            <li>
              <span className="text-orange-400 font-bold mr-4">1x</span> 3.5mm Audio Cable
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="grid md:grid-cols-2 gap-2 mb-12 px-6 md:px-12 py-12">
        <div className="grid gap-2">
          <img src={Bitmap1} alt="mic" className="rounded-xl" />
          <img src={Bitmap2} alt="shoe" className="rounded-xl" />
        </div>
        <img src={Bitmap3} alt="disc" className="rounded-xl" />
      </section>

      {/* You may also like */}
      <section className="text-center mb-24">
        <h2 className="text-2xl font-bold uppercase mb-12">You May Also Like</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[{ name: "XX99 Mark II", img: mark2 },
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
