import { useState, useEffect } from 'react';
import Container from "../../Component/Navbar/container/Container";
import Favorites from '../../Component/favorites/Favoritis';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function PageCart() {
  const [activeSection, setActiveSection] = useState<'cart' | 'favorites'>('cart');
  const [cartItem, setCartItem] = useState<Product | null>(null);

  useEffect(() => {
    const cartStr = localStorage.getItem("cartProduct");
    if (cartStr) {
      setCartItem(JSON.parse(cartStr));
    }
  }, []);

 return (
 <Container>
  <div
    className="bg-gray-100 border rounded-lg shadow-lg mt-10 p-4 sm:p-6 flex flex-col lg:flex-row gap-6 text-right xl:flex-row"
    dir="rtl"
  >
    
    {/* ستون دکمه‌ها در سمت راست */}
    <div className="w-full lg:w-[300px] bg-white border border-gray-300 rounded-lg p-4 shadow-sm h-fit ">
      <h2 className="text-lg font-bold mb-6">دسته‌بندی‌ها</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setActiveSection('cart')}
          className={`w-full py-2 px-4 rounded font-bold transition ${
            activeSection === 'cart' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'
          }`}
        >
          🛒 سبد خرید
        </button>

        <button
          onClick={() => setActiveSection('favorites')}
          className={`w-full py-2 px-4 rounded font-bold transition ${
            activeSection === 'favorites' ? 'bg-stone-800 text-white' : 'bg-gray-200 hover:bg-stone-800 hover:text-white'
          }`}
        >
          ❤️ علاقه‌مندی‌ها
        </button>
      </div>
    </div>

    {/* محتوای انتخاب‌شده */}
    <div className="w-full bg-white border border-gray-300 rounded-lg p-4 sm:p-6 shadow -sm min-h-[400px]">
      {activeSection === 'cart' ? (
        <>
          <h1 className="text-xl font-bold mb-4 text-gray-800">سبد خرید</h1>
          {cartItem ? (
            <div className="text-right">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                className="w-full sm:w-[300px] h-[280px] object-cover rounded mb-4 ml-auto"
              />
              <p className="text-gray-800 font-semibold mt-3 mb-2">
                نام محصول: {cartItem.title}
              </p>
              <p className="text-gray-700 mb-2">
                قیمت: {cartItem.price.toLocaleString()} تومان
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 w-full sm:w-auto">
                ادامه روند خرید
              </button>
            </div>
          ) : (
            <p className="text-gray-500">هیچ محصولی انتخاب نشده است.</p>
          )}
        </>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4 text-gray-800">علاقه‌مندی‌ها</h1>
          <Favorites />
        </>
      )}
    </div>

  </div>
</Container>
 )
}
