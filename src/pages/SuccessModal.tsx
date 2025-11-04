import React from "react";
import mark2 from "../assets/mark2.png";
import { Link } from "react-router-dom";


interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center animate-fadeIn">
        {/* Checkmark Icon */}
        <div className="w-16 h-16 mx-auto mb-6 bg-orange-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl font-bold uppercase mb-2">
          Thank you <br /> for your order
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary (Example) */}
        <div className="bg-gray-100 rounded-lg mb-6">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img 
                src={mark2}
                alt="XX99 MK II"
                className="w-12 h-12 rounded-md object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-sm">XX99 MK II</p>
                <p className="text-gray-500 text-sm">$2,999</p>
              </div>
            </div>
            <span className="text-gray-400 text-sm font-semibold">x1</span>
          </div>
          <div className="text-gray-500 text-xs py-3">and 2 other items</div>
        </div>

        {/* Grand Total */}
        <div className="bg-black text-white rounded-lg p-4 flex justify-between items-center mb-8">
          <p className="uppercase text-sm text-gray-300">Grand Total</p>
          <p className="font-bold text-lg">$5,446</p>
        </div>

        {/* Button */}
        <Link
            to="/headphones2"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 uppercase text-sm tracking-wider"
          >
            Back to Home
          </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
