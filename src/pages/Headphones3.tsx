import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import man from "../assets/man.png";

// ✅ Import all product images from src/assets
import mark2 from "../assets/mark2.png";
import mark1 from "../assets/mark1.png";
import xx59 from "../assets/xx59.png";
import zx9speaker from "../assets/zx9speaker.png";
import Bitmapgirl from "../assets/Bitmapgirl.png";
import Bitmapheadset from "../assets/Bitmapheadset.png";
import Bitmaphand from "../assets/Bitmaphand.png";

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
          src={xx59}
          alt="XX99 Mark I Headphones"
          className="rounded-xl shadow-lg"
        />

        <div>
          <p className="text-sm uppercase tracking-[10px] text-orange-400 mb-2">
            New Product
          </p>
          <h1 className="text-4xl font-bold uppercase mb-6">
            XX59 Headphones
          </h1>
          <p className="text-gray-500 mb-6">
            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
          </p>
          <p className="font-bold text-lg mb-6">$ 899</p>

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
           These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
          </p>
          <p className="text-gray-600">
            More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
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
          <img src={Bitmapgirl} alt="mic" className="rounded-xl" />
          <img src={Bitmapheadset} alt="shoe" className="rounded-xl" />
        </div>
        <img src={Bitmaphand} alt="disc" className="rounded-xl" />
      </section>

      {/* You may also like */}
      <section className="text-center mb-24">
        <h2 className="text-2xl font-bold uppercase mb-12">You May Also Like</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[{ name: "XX99 Mark II", img: mark2 },
            { name: "XX99 Mark I", img: mark1 },
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
