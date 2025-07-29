import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Cart() {
  const location = useLocation();
  const [cartItem, setCartItem] = useState<Product | null>(null);

  useEffect(() => {
    if (location.state?.product) {
      setCartItem(location.state.product);
    } else {
      const cartStr = localStorage.getItem("cartProduct");
      if (cartStr) {
        setCartItem(JSON.parse(cartStr));
      }
    }
  }, [location.state]);

  if (!cartItem) {
    return (
      <p className="text-center text-gray-500 mt-10">
        هیچ محصولی برای خرید انتخاب نشده است.
      </p>
    );
  }

  return (
    <div className="w-auto mx-auto mt-3 p-6 bg-white shadow-md rounded-md text-right" dir="rtl">
      <h2 className="text-xl font-bold mb-7">جزئیات محصول</h2>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className="w-[440px] h-[300px] object-cover rounded mb-4"
      />
      <p className="text-gray-800 font-semibold mt-8 mb-2">نام محصول: {cartItem.title}</p>
      <p className="text-gray-700 mb-2">قیمت: {cartItem.price.toLocaleString()} تومان</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">
        ادامه روند خرید
      </button>
    </div>
  )
}
