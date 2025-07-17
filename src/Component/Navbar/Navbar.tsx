import React from 'react'
import Home from '../../Pages/home/Home'
import Store from '../../Pages/store/Store'
import Product from '../../Pages/Products/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavButton from '../navbuttons/NavButtons'
import Addtocart from '../../Pages/AddToCart/Addtocart'
import Cart from '../cart/Cart'
import Favorites from '../favorites/Favoritis'
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
            <NavButton to="/store" label="محصولات" />
            <NavButton to="/addtocart" label="سبد خرید" />
            {/* <NavButton to={`/Product/${1}`} label='Product' /> */}
          </ul>
        </Container>
      </nav>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/addtocart" element={<Addtocart />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path='cart' element={<Cart/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
