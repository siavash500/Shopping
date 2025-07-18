import React, { useEffect, useState } from 'react'
import Container from '../Navbar/container/Container'
import { useLocation } from 'react-router-dom'

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

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full  h-49 object-cover"
            />
            <div className="p-4 text-right ">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-lg">
                <span className="font-semibold">قیمت:</span> {product.price.toLocaleString()} تومان
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
                علاقه‌مندی
              </span> 
              <button
                onClick={() => handleRemoveFavorite(product.id)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-3" 
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