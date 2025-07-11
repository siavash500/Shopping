import React from 'react'
import Home from '../../Pages/home/Home'
import Store from '../../Pages/store/Store'
import Product from '../../Pages/Products/Product'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NavButton from '../navbuttons/NavButtons'
// کانتینر ساده با عرض کامل
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-4 max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="border-b shadow h-14 flex items-center">
        <Container>
          <ul className="flex justify-between w-full flex-row-reverse items-center">
            <NavButton to="/" label="فروشگاه حاجی" />
            <NavButton to="/store" label="سبد خرید" />
            <NavButton to="/products" label="محصولات" />
          </ul>
        </Container>
      </nav>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path='/Product/:id' element={<Product />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
