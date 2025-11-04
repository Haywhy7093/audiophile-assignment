export default function ProductHighlight({ title, desc, img, bg, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row items-center rounded-lg overflow-hidden ${bg}`}>
      <div className={`w-full md:w-1/2 p-8 ${reverse ? 'order-2 md:order-1' : ''}`}>
        <h2 className="text-3xl font-bold uppercase">{title}</h2>
        {desc && <p className="mt-4 text-gray-700">{desc}</p>}
        <button className="mt-6 bg-black text-white px-6 py-3 uppercase hover:bg-gray-800 transition">
          See Product
        </button>
      </div>
      <img src={img} alt={title} className="w-full md:w-1/2 object-cover" />
    </div>
  )
}
