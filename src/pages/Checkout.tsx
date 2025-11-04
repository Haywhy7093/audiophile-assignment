import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import SuccessModal from "../pages/SuccessModal";
import mark2 from "../assets/mark2.png";
import xx59 from "../assets/xx59.png";
import earphone from "../assets/earphone.png";



interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Checkout: React.FC = () => {
  const createOrder = useMutation(api.orders.createOrder);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ✅ Add this missing line:
  const [paymentMethod, setPaymentMethod] = useState<"e-Money" | "Cash on Delivery">("e-Money");

  // Example cart data
 const cartItems: Item[] = [
  { id: "1", name: "XX99 MK II", price: 2999, quantity: 1, image: mark2 },
  { id: "2", name: "XX59", price: 4500, quantity: 1, image: xx59 },
  { id: "3", name: "YX1 Earphone", price: 4500, quantity: 1, image: earphone },
];

  const totals = {
    subtotal: cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    shipping: 50,
    taxes: 400,
    grandTotal: 0, // just initialize
  };
  totals["grandTotal"] = totals.subtotal + totals.shipping + totals.taxes;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = new FormData(e.target as HTMLFormElement);

      await createOrder({
        customer: {
          name: form.get("name") as string,
          email: form.get("email") as string,
          phone: form.get("phone") as string,
        },
        shipping: {
          address: form.get("address") as string,
          city: form.get("city") as string,
          zip: form.get("zip") as string,
          country: form.get("country") as string,
        },
        items: cartItems,
        totals,
      });

      setShowSuccess(true);
    } catch (err) {
      console.error("Order creation failed:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      <div className="container mx-auto px-6 pt-28">
        <h1 className="text-3xl font-bold uppercase mb-10">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8 grid lg:grid-cols-3 gap-8"
        >
          {/* Billing & Shipping */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-orange-600 font-bold uppercase mb-4">
                Billing Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" placeholder="Name" required className="border rounded-md px-4 py-3" />
                <input name="email" placeholder="Email" type="email" required className="border rounded-md px-4 py-3" />
                <input name="phone" placeholder="Phone" required className="border rounded-md px-4 py-3 md:col-span-2" />
              </div>
            </div>
            <div>
              <h2 className="text-orange-600 font-bold uppercase mb-4">
                Shipping Info
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input name="address" placeholder="Address" required className="border rounded-md px-4 py-3 md:col-span-2" />
                <input name="zip" placeholder="ZIP Code" required className="border rounded-md px-4 py-3" />
                <input name="city" placeholder="City" required className="border rounded-md px-4 py-3" />
                <input name="country" placeholder="Country" required className="border rounded-md px-4 py-3" />
              </div>
            </div>
     {/* ✅ Payment Details */}
            <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-wider mb-4">
                Payment Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <p className="font-semibold">Payment Method</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="e-Money"
                      checked={paymentMethod === "e-Money"}
                      onChange={() => setPaymentMethod("e-Money")}
                    />
                    e-Money
                  </label>
                  <label className="flex items-center gap-3 border rounded-md px-4 py-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on Delivery"
                      checked={paymentMethod === "Cash on Delivery"}
                      onChange={() => setPaymentMethod("Cash on Delivery")}
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>

              {paymentMethod === "e-Money" && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      e-Money Number
                    </label>
                    <input
                      type="text"
                      placeholder="238521993"
                      className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      e-Money PIN
                    </label>
                    <input
                      type="password"
                      placeholder="6891"
                      className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <h2 className="font-bold uppercase mb-6">Summary</h2>
            {cartItems.map((item) => (
  <div
    key={item.id}
    className="flex justify-between items-center mb-4 text-sm"
  >
    <div className="flex items-center gap-4">
      <img
        src={item.image} // ✅ replace with your actual image path or item.image
        alt={item.name}
        className="w-12 h-12 rounded-md object-cover"
      />
      <div>
        <p className="font-semibold text-gray-800">{item.name}</p>
        <p className="text-gray-500 text-sm">x{item.quantity}</p>
      </div>
    </div>
    <span className="font-semibold">${item.price * item.quantity}</span>
  </div>
))}

            <div className="mt-4 text-gray-500 text-sm space-y-1">
              <p>Total: ${totals.subtotal}</p>
              <p>Shipping: ${totals.shipping}</p>
              <p>VAT: ${totals.taxes}</p>
            </div>
            <div className="font-semibold mt-4 text-lg">
              Grand Total: <span className="text-orange-600">${totals.grandTotal}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-6 ${
                loading ? "bg-gray-400" : "bg-orange-600 hover:bg-orange-500"
              } text-white font-semibold uppercase py-3 rounded-md transition`}
            >
              {loading ? "Processing..." : "Continue & Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
