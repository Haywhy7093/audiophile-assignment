import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Headphones1 from "./pages/Headphones1"
import Headphones2 from "./pages/Headphones2"
import Headphones3 from "./pages/Headphones3"
import Speakers from "./pages/Speakers";
import Speakers1 from "./pages/Speakers1";
import Speakers2 from "./pages/Speakers2";
import Earphones from "./pages/Earphones";
import Earphones1 from "./pages/Earphones1";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDropdown from "./components/CartDropdown";


export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/headphones1" element={<Headphones1 />} />
        <Route path="/headphones2" element={<Headphones2 />} />
        <Route path="/headphones3" element={<Headphones3 />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers1" element={<Speakers1 />} />\
        <Route path="/speakers2" element={<Speakers2 />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones1" element={<Earphones1 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartDropdown />} />
        
      </Routes>
      <Footer />
    </div>
  );
}
