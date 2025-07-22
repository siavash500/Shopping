import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Component/Navbar/container/Container';
import C from './s.jpg';
import ProductItem from '../../Component/ProductItems/ProductItem';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  // گرفتن محصولات از fake API
  useEffect(() => {
    fetch('http://localhost:3001/products') // ❗ اینجا باید فقط اسم resource باشه، نه با `${products}`
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('❌ خطا در گرفتن محصولات:', err));
  }, []);

  return (
    <Container>
      <div
        className="bg-white text-stone-800 min-h-screen text-right px-1 sm:px-1 xl:px-1 2xl:px-1 "
        dir="rtl"
      >
        {/* بنر ورودی برند */}
        <div className="relative w-full mb-[60px]">
          <img
            src={C}
            alt="بنر اصلی"
            className="w-full h-[55vh] sm:h-[60vh] xl:h-[70vh] 2xl:h-[76vh] object-cover rounded-xl shadow-md"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-[#f3f3f3] px-4">
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#ffe5e5] mb-2 animate-fade-in">
              فروشگاه خاص شما
            </h1>
            <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl font-semibold animate-typing overflow-hidden whitespace-nowrap text-[#dcdcdc] mb-6 w-fit">
              رایحه‌ای از خاطره و شیک‌پوشی
            </p>
            <button
              onClick={() => navigate('/store')}
              className="bg-white text-black text-sm xl:text-base 2xl:text-lg px-5 py-2 rounded hover:bg-gray-200 transition-all"
            >
              ورود به فروشگاه
            </button>
          </div>
        </div>

        {/* محصولات پیشنهادی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/Product/${product.id}`)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-xl transition-transform hover:scale-[1.03]"
            >
              <ProductItem
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
