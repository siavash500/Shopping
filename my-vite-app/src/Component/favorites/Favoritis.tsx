import React, { useEffect, useState } from 'react'
import Container from '../Navbar/container/Container'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

type Favorites = Record<string, Product>;

export default function Favorites() {
  const [products, setProducts] = useState<Product[]>([])
  const location = useLocation()
    const navigate =  useNavigate();

  useEffect(() => {
    try {
      // بررسی state از navigate
      if (location.state?.product) {
        setProducts([location.state.product as Product])
        return
      }

      // دریافت از localStorage با نوع‌دهی صحیح
      const favoritesStr = localStorage.getItem("favorites") ?? "{}"
      const parsedFavorites: Favorites = JSON.parse(favoritesStr)
      
      // تبدیل به آرایه با نوع Product[]
      const favoritesArray: Product[] = Object.values(parsedFavorites)
      setProducts(favoritesArray)
    } catch (error) {
      console.error("Error loading favorites:", error)
      setProducts([])
    }
  }, [location.state])

  if (products.length === 0) {
    return (
      <Container>
        <div className="text-center py-10">
          <p className="text-gray-500">هیچ محصولی در لیست علاقه‌مندی‌ها یافت نشد</p>
        </div>
      </Container>
    )
  }
    const handleRemoveFavorite = (id: number) => {
    const favoritesStr = localStorage.getItem("favorites") ?? "{}";
    const parsedFavorites: Favorites = JSON.parse(favoritesStr);

    // حذف محصول
    delete parsedFavorites[id];
    localStorage.setItem("favorites", JSON.stringify(parsedFavorites));

    // به‌روزرسانی state داخلی کامپوننت
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };
  
  //navigate 
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
  {products.map((producta) => (
    <div
      key={producta.id}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition hover:scale-[1.015] hover:shadow-lg duration-300 "
    >
         
        
        <img
        src={producta.image}
        alt={producta.title}
        className="w-full h-[200px] object-cover cursor-pointer"
         onClick={()=> navigate(`/product/${producta.id}`)} 
      />

      <div className="p-4 text-right flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
            {producta.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-semibold">
            قیمت: {producta.price.toLocaleString()} تومان
          </p>
        </div>
      </div>

        <div className="mt-4 flex flex-wrap-reverse justify-between items-center gap-2  p-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-full">
            ❤️ علاقه‌مندی
          </span>

          <button
            onClick={
              (e) => {
                e.stopPropagation();
                handleRemoveFavorite(producta.id)}}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs sm:text-sm"
          >
            حذف
          </button>
        </div>
      </div>
  ))}
</div>

    </Container>
  )
}