import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Component/Navbar/container/Container';
import C from './s.jpg';
import ProductItem from '../../Component/ProductItems/ProductItem';

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container>
      <div
        className="bg-white text-stone-800 min-h-screen text-right px-2 sm:px-4 xl:px-16 2xl:px-28 py-8 xl:py-12 2xl:py-16"
        dir="rtl"
      >
        {/* بنر ورودی برند */}
        <div className="relative w-full">
          <img
            src={C}
            alt="بنر اصلی"
            className="w-full h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[680px] object-cover rounded-xl shadow-md"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-[#f3f3f3] px-4">
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#ffe5e5] mb-2 animate-fade-in">
              فروشگاه خاص شما
            </h1>

            <p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl font-semibold animate-typing overflow-hidden whitespace-nowrap  text-[#dcdcdc] mb-6 w-fit">
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
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              onClick={() => navigate(`/Product/${id}`)}
              className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-xl transition-transform hover:scale-[1.03]"
            >
              <ProductItem id={id} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
