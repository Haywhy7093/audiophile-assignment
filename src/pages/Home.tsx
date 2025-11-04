import { Link } from "react-router-dom";
import CategoryCard from '../components/CategoryCard'
import ProductHighlight from '../components/ProductHighlight'
import homeheadphone from '../assets/homeheadphone.png'
import zx9speaker from '../assets/zx9speaker.png'
import zx7speaker from '../assets/zx7speaker.png'
import yx1earphone from '../assets/yx1earphone.png'
import man from '../assets/man.png'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-24">
        <div className="space-y-4 max-w-md">
          <p className="uppercase tracking-widest text-gray-400">New Product</p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-gray-300">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
           <Link
            to="/headphones"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 uppercase text-sm tracking-wider"
          > See Product </Link>

        </div>
        <img src={homeheadphone} alt="XX99 Headphones" className="mt-12 md:mt-0 w-full md:w-1/2 rounded-lg" />
      </section>

      {/* CATEGORY CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-24 py-24">
        <CategoryCard title="Headphones" />
        <CategoryCard title="Speakers" />
        <CategoryCard title="Earphones" />
      </section>

      {/* PRODUCT HIGHLIGHTS */}
      <section className="space-y-12 px-6 md:px-24">
        <Link to="speakers1"><ProductHighlight
        title="ZX9 Speaker"
        desc="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        img={zx9speaker}
        bg="bg-[#D87D4A] text-white"
        reverse={false} // 👈 add this
        /> </Link>

        <Link to="speakers2"><ProductHighlight
          title="ZX7 Speaker"
          desc=""
          img={zx7speaker}
          bg="bg-light"
          reverse={false} // 👈 add this
        /> </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={yx1earphone} alt="YX1" className="w-full rounded-lg" />
          <div className="bg-light rounded-lg flex items-center p-10">
            <div>
              <h3 className="text-2xl font-bold uppercase">YX1 Earphones</h3>
                <Link to="/earphones1"
                      className="mt-4 border border-gray-400 px-6 py-2 uppercase"
                        > See Product </Link>
            </div>
          </div>
        </div>
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
    </>
  )
}
