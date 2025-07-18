import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../Component/ProductItems/ProductItem';
import Container from '../../Component/Navbar/container/Container';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="text-right mt-10 px-4" dir="rtl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">به فروشگاه عطر خوش آمدید</h1>
        <p className="text-gray-600 text-base mb-4">انتخابی بی‌نظیر برای سلیقه‌های خاص و لحظات فراموش‌نشدنی</p>

        <div className="flex flex-wrap gap-4 mb-8">
          <button onClick={() => navigate('/store')} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            🛍️ ورود به فروشگاه
          </button>
          <button onClick={() => navigate('/favorites')} className="bg-stone-800 text-white px-4 py-2 rounded hover:bg-stone-900">
            ❤️ علاقه‌مندی‌ها
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              onClick={() => navigate(`/Product/${id}`)}
              className="cursor-pointer p-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              <ProductItem id={id} />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-12">عطرهای ما فقط رایحه نیستند، خاطره‌اند...</p>
      </div>
    </Container>
  );
}
