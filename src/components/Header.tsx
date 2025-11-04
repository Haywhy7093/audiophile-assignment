import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import cart from '../assets/cart.svg';

export default function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center px-3 md:px-20 py-3">
      <img src={logo} alt="Audiophile" className="w-28" />
      
      <nav className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </nav>
      <Link to="/checkout"> <img src={cart} alt="Cart" className="w-5" /></Link>
    </header>
  );
}

