import './style.css';
import { CartProvider } from './Component/cartitem/CartItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Component/Layout/Layout';
import Home from './Pages/home/Home';
import Store from './Pages/store/Store';
import Addtocart from './Pages/AddToCart/Addtocart';
import Product from './Pages/Products/Product';
import Cart from './Component/cart/Cart';
import Favorites from './Component/favorites/Favoritis';
import Login from './Component/login/Login';
import SignUp from './Component/signup/SignUp';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="addtocart" element={<Addtocart />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
