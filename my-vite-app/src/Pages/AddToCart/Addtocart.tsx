import { useState, useEffect } from 'react';
import Container from "../../Component/Navbar/container/Container";
import Favorites from '../../Component/favorites/Favoritis';
import Product from '../Products/Product';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function PageCart() {
  const [activeSection, setActiveSection] = useState<'cart' | 'favorites'>('cart');
  const [cartItem, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartStr = localStorage.getItem("cartProducts");
    if (cartStr) {
      setCartItems(JSON.parse(cartStr));
    }
  }, []);

  const handleIncrease = (productId: number) => {
    const updated = cartItem.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartProducts", JSON.stringify(updated));
  };
  const handleRemove = (productId : number) => {
    const updated = cartItem.map(item => 
      item.id === productId
      ? {...item , quantity : item.quantity > 1 ? item.quantity -1 : 1} : item
    );
    setCartItems(updated);
    localStorage.setItem("cartProducts", JSON.stringify(updated));
  }
  //delete all 
  const handleClearCart  = () => {
    setCartItems([]);
    localStorage.removeItem("cartProducts")
  } 
  //navigate 

  const navigate = useNavigate();
  return (
    <Container>
      <div
        className="bg-gray-100 border rounded-lg shadow-lg mt-10 p-4 sm:p-6 flex flex-col lg:flex-row gap-6 text-right xl:flex-row"
        dir="rtl" 
      >
        {/* ستون دکمه‌ها */}
        <div className="w-full lg:w-[300px] bg-white border border-gray-300 rounded-lg p-4 shadow-sm h-fit">
          <h2 className="text-lg font-bold mb-6">دسته‌بندی‌ها</h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setActiveSection('cart')}
              className={`w-full py-2 px-4 rounded font-bold transition ${
                activeSection === 'cart'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-black hover:text-white'
              }`}
            >
              🛒 سبد خرید
            </button>

            <button
              onClick={() => setActiveSection('favorites')}
              className={`w-full py-2 px-4 rounded font-bold transition ${
                activeSection === 'favorites'
                  ? 'bg-stone-800 text-white'
                  : 'bg-gray-200 hover:bg-stone-800 hover:text-white'
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
              
              {cartItem.length > 0 ? (
                cartItem.map((item) => (
                  <div key={item.id}>
                    <div  className="text-right shadow sm:w-[300px] border-b pb-4 mb-4 hover:scale-[1.015] hover:shadow-lg duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-[300px] h-[280px] object-cover rounded mb-4 ml-auto cursor-pointer "
                      onClick={()=> navigate(`/product/${item.id}`)}
                      />
                    <p className="text-gray-800 font-semibold mt-3 mb-2">
                      نام محصول: {item.title}
                    </p>
                    <p className="text-gray-700 mb-2">
                      قیمت: {item.price.toLocaleString()} تومان
                    </p>
                    <p className="text-gray-700 mb-2">
                      تعداد: {item.quantity}
                    </p>
                    <div className="flex justify-evenly">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
                        onClick={() => handleRemove(item.id)}
                      >
                        +
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">
                        ادامه روند خرید
                      </button>
                    </div>
                  </div>
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={handleClearCart}
                        className="text-sm bg-red-500 text-white rounded hover:bg-red-600 w-[20%] py-2 px-4 font-bold transition"
                      >
                        حذف همه 🗑️
                      </button>
                    </div>
                  </div>
                ))
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
  );
}
