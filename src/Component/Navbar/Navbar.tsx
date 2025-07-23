import React from 'react';
import Home from '../../Pages/home/Home';
import Store from '../../Pages/store/Store';
import Product from '../../Pages/Products/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavButton from '../navbuttons/NavButtons';
import Addtocart from '../../Pages/AddToCart/Addtocart';
import Cart from '../cart/Cart';
import Favorites from '../favorites/Favoritis';
import iconeimg from "./icone.png";
import iconesearch from "./search1.png"
import { useState } from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 max-w-screen-2xl mx-auto">{children}</div>
  );
}

export default function Navbar() {
  

    const [isFocused, setIsFocused] = useState(false);

  return (
    <BrowserRouter>
      <header className="bg-white border-b shadow-sm overflow-visible">
  <Container>
    <div className="flex flex-col md:flex-row items-center gap-6 py-4 m-1 mb-0" dir="rtl">
  {/* لوگو فروشگاه */}
  <div className="flex items-center gap-3 mb-4 md:mb-0">
    <a href="/" className="cursor-pointer">
      <img
        src={iconeimg}
        alt="لوگو فروشگاه"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow min-w-14 "
      />
    </a>
   
  </div>

  {/* باکس جستجو */}
  <div className="relative w-full md:w-[500px]">
    <input
      type="text"
      placeholder="جستجو..."
      className="w-full pr-12 py-2 px-4 rounded border border-gray-300 text-right bg-gray-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (e.target.value.trim() === "") setIsFocused(false);
      }}
    />
    {!isFocused && (
      <img
        src={iconesearch}
        alt="آیکون جستجو"
        className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6 transition-opacity duration-300"
      />
    )}
  </div>
</div>
  </Container>

    {/* پایین ناوبری: لینک‌ها جدا */}
    {/* منو */}
     <nav className="sticky top-0 z-[1000] ">
    <ul className="flex mb-[10px] gap-2 sm:gap-2 xl:gap-6 text-xs sm:text-sm xl:text-base 2xl:text-lg flex-row-reverse ml-1">
      <NavButton to="/" label="خانه" />
      <NavButton to="/store" label="محصولات" />
      <NavButton to="/addtocart" label="سبد خرید" />
      <NavButton to="/favorites" label="علاقه‌مندی‌ها" />
    </ul>
</nav>


</header>



      <main className="py-6 xl:py-8">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/addtocart" element={<Addtocart />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
}
