import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Component/Navbar/container/Container';
import C from './s.jpg';
import ProductItem from '../../Component/ProductItems/ProductItem';
import { getProducts } from '../../service/api';


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
 

  // fetch API clear
  useEffect(() => {
  async function fetchData() {
    try {
      const result = await getProducts();
      setProducts(result);
    } catch (error) {
      console.error('❌ خطا در دریافت محصولات:', error);
    }
  }

  fetchData();
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-10 px-4 xl:h-[400px]">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/Product/${product.id}`)}
            className="
              bg-white rounded-xl shadow-md 
              transition-all hover:shadow-xl hover:scale-[1.02] 
              border overflow-hidden 
              h-[400] xl:h-[340px] flex flex-col cursor-pointer
              
            "
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
