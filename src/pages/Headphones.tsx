import React from "react";
import { Link } from "react-router-dom";
import mark2 from "../assets/mark2.png";
import mark1 from "../assets/mark1.png";
import xx59 from "../assets/xx59.png";
import CategoryCard from '../components/CategoryCard'
import man from "../assets/man.png";

export default function Headphones() {
  return (
    <div className="bg-white text-black">
      {/* --- Header Banner --- */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-wider uppercase">
          Headphones
        </h1>
      </section>

      {/* --- XX99 Mark II --- */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-10">
          <img src={mark2} alt="XX99 Mark II Headphones" className="w-80" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="tracking-[0.5em] text-orange-500 uppercase text-sm mb-4">
            New Product
          </p>
          <h2 className="text-4xl font-semibold uppercase mb-6">
            XX99 Mark II Headphones
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines
            your premium headphone experience by reproducing the balanced depth and precision
            of studio-quality sound.
          </p>
          <Link
            to="/headphones1"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 uppercase text-sm tracking-wider"
          > See Product </Link>
         
        </div>
      </section>

      {/* --- XX99 Mark I --- */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-24 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-10">
          <img src={mark1} alt="XX99 Mark I Headphones" className="w-80" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-semibold uppercase mb-6">
            XX99 Mark I Headphones
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and
            accurate audio reproduction for audiophiles, mixing engineers, and music
            aficionados alike in studios and on the go.
          </p>
           <Link
            to="/headphones2"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 uppercase text-sm tracking-wider"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* --- XX59 Headphones --- */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="bg-gray-100 rounded-lg flex-1 flex justify-center p-10">
          <img src={xx59} alt="XX59 Headphones" className="w-80" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-semibold uppercase mb-6">XX59 Headphones</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Enjoy your audio almost anywhere and customize it to your specific taste with the
            XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant
            companion at home or on the move.
          </p>
           <Link
            to="/headphones3"
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
          >
            See Product </Link>
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
     
