import './style.css';
import Navbar from './Component/Navbar/Navbar';
import { CartProvider } from './Component/cartitem/CartItems';

function App() {

  return (
    <CartProvider>
      <Navbar />
    </CartProvider>
  )
}
export default App;