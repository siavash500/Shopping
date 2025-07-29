import React, { useRef, useEffect, useState } from 'react';
import NavButton from '../navbuttons/NavButtons';
import iconeimg from './icone.png';
import iconesearch from './search1.png';

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 max-w-screen-2xl mx-auto">{children}</div>
  );
}

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsSticky(navTop <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white border-b shadow-sm overflow-visible" dir="rtl">
  <Container>
    {/* لوگو + سرچ دسکتاپ */}
    <div className="hidden sm:flex flex-col md:flex-row items-center gap-6 py-4 m-1 mb-0">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <a href="/" className="cursor-pointer">
          <img
            src={iconeimg}
            alt="لوگو فروشگاه"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow min-w-14"
          />
        </a>
      </div>

      <div className="relative w-full md:w-[500px]">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full pr-12 py-2 px-4 rounded border border-gray-300 text-right bg-gray-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (e.target.value.trim() === '') setIsFocused(false);
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

    {/* لوگو + همبرگر + سرچ موبایل */}
    <div className="sm:hidden flex flex-col gap-3  pt-4">
      <div className="flex items-center justify-between gap-2">
        <a href="/" className="cursor-pointer pr-[12px]">
          <img
            src={iconeimg}
            alt="لوگو فروشگاه"
            className="w-12 h-12 rounded-full  shadow min-w-12"
          />
        </a>

        <button
          className="p-2  border rounded-md ml-[12px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز و بسته کردن منو"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      <div className="relative w-full p-3">
        <input
          type="text"
          placeholder="جستجو..."
          className="w-full pr-12 py-3 px-4 rounded border border-gray-300 text-right bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (e.target.value.trim() === '') setIsFocused(false);
          }}
        />
        {!isFocused && (
          <img
            src={iconesearch}
            alt="آیکون جستجو"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5"
          />
        )}
      </div>
    </div>
  </Container>

  {/* نوار ناوبری چسبان */}
  <div
    ref={navRef}
    className={`${
      isSticky
        ? 'sticky top-0 z-[1000] bg-white shadow-md transition-all duration-300'
        : ''
    }`}
  >
    <Container>
      {/* موبایل: منوی باز شده همبرگری */}
      {menuOpen && (
        <div className="sm:hidden bg-white border rounded shadow-md px-4 py-4 flex flex-col gap-4 text-right items-end">
          <NavButton to="/" label="خانه" />
          <NavButton to="/store" label="محصولات" />
          <NavButton to="/addtocart" label="سبد خرید" />
          <NavButton to="/favorites" label="علاقه‌مندی‌ها" />
          <hr className="my-2 w-full" />
          <div className="flex flex-col gap-2 items-end">
            <NavButton to="/login" label="ورود" />
            <NavButton to="/signup" label="ثبت نام" />
          </div>
        </div>
      )}

      {/* دسکتاپ: منوی کلاسیک */}
      <div className="hidden sm:flex items-center justify-between">
        <ul className="flex w-full justify-between items-center gap-6 text-xs sm:text-sm xl:text-base 2xl:text-lg flex-row pb-2">
          <li className="flex gap-4">
            <NavButton to="/" label="خانه" />
            <NavButton to="/store" label="محصولات" />
            <NavButton to="/addtocart" label="سبد خرید" />
            <NavButton to="/favorites" label="علاقه‌مندی‌ها" />
          </li>
          <li className="flex gap-3 items-center">
            <NavButton to="/login" label="ورود" />
            <NavButton to="/signup" label="ثبت نام" />
          </li>
        </ul>
      </div>
    </Container>
  </div>
</header>

  );
}
