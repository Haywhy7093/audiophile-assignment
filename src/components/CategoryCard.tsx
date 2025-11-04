import headphoneImg from '../assets/bodyheadphone.png'
import speakerImg from '../assets/speaker.png'
import earphoneImg from '../assets/earphone.png'

const images = {
  Headphones: headphoneImg,
  Speakers: speakerImg,
  Earphones: earphoneImg,
}

export default function CategoryCard({ title }) {
  const img = images[title]
  return (
    <div className="bg-light rounded-lg flex flex-col items-center justify-center py-10 text-center space-y-4 shadow-md">
      <img src={img} alt={title} className="h-40 object-contain" />
      <h3 className="uppercase font-bold">{title}</h3>
      <a href="#" className="uppercase text-sm text-gray-500 tracking-widest hover:text-orange">
        Shop <span className="text-orange">→</span>
      </a>
    </div>
  )
}
