import { Link } from "react-router-dom";
import earphone from '../assets/earphone.png'
import CategoryCard from '../components/CategoryCard'
import man from "../assets/man.png";
export default function Earphones() {
  return (
    <div className="text-black bg-white">
      {/* Page Header */}
      <section className="bg-black text-white text-center py-24">
        <h1 className="text-4xl font-bold tracking-widest uppercase">Earphones</h1>
      </section>

      {/* Main Product */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-24 gap-12">
        <div className="bg-[#F1F1F1] rounded-lg flex-1 flex justify-center items-center p-12">
          <img src={earphone} alt="YX1 Earphones" className="w-60" />
        </div>

        <div className="flex-1 text-left">
          <p className="uppercase tracking-[8px] text-[#D87D4A] mb-4">New Product</p>
          <h2 className="text-4xl font-bold uppercase mb-6 leading-tight">
            YX1 Wireless Earphones
          </h2>
          <p className="text-gray-600 mb-8">
            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless
            Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its
            active noise cancellation feature.
          </p>
          <Link
          to="/earphones1"
          className="bg-[#D87D4A] text-white uppercase px-6 py-3 tracking-widest text-sm hover:bg-[#FBAF85] transition"
        >
          See Product
        </Link>
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
           