import React from "react";
import { Link } from "react-router-dom";
import zx9speaker from '../assets/zx9speaker.png'
import zx7 from '../assets/zx7.png'
import CategoryCard from '../components/CategoryCard'
import man from "../assets/man.png";


const Speakers = () => {
  return (
    <div className="speakers-page">
      {/* ===== HERO ===== */}
      <section className="bg-black text-white text-center py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest">SPEAKERS</h1>
      </section>

      {/* ===== ZX9 SPEAKER ===== */}
      <section className="container mx-auto px-6 md:px-20 my-24 flex flex-col md:flex-row items-center gap-16">
        <div className="bg-gray-100 rounded-2xl flex-1 flex justify-center">
          <img src={zx9speaker} alt="ZX9 Speaker" className="w-3/4 md:w-full" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="uppercase tracking-[8px] text-orange-600 font-medium mb-4">
            New Product
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">ZX9 Speaker</h2>
          <p className="text-gray-600 mb-8">
            Upgrade your sound system with the all new ZX9 active speaker.
            It's a bookshelf speaker system that offers truly wireless
            connectivity — creating new possibilities for more pleasing
            and practical audio setups.
          </p>
          <Link
            to="/speakers1"
            className="bg-orange-600 text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-orange-500 transition-all"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* ===== ZX7 SPEAKER ===== */}
      <section className="container mx-auto px-6 md:px-20 my-24 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">ZX7 Speaker</h2>
          <p className="text-gray-600 mb-8">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that represent
            the top of the line powered speakers for home or studio use.
          </p>
          <Link
            to="/speakers2"
            className="bg-orange-600 text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-orange-500 transition-all"
          >
            See Product
          </Link>
        </div>
        <div className="bg-gray-100 rounded-2xl flex-1 flex justify-center">
          <img src={zx7} alt="ZX7 Speaker" className="w-3/4 md:w-full" />
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
                    <h2 className="text-3xl font-bold uppercase"> Bringing you the <span className="text-orange-500">best</span> audio gear
                    </h2>
                    <p className="text-gray-600">
                       Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                  </div>
                  <img src={man} alt="man" className="rounded-lg w-full md:w-1/2" />
                </section>
             </div>
            )
          }
          

export default Speakers;
