import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartStr = localStorage.getItem("cartProducts") || "[]";
    setCart(JSON.parse(cartStr));
  }, []);

 const addToCart = (item: CartItem) => {
  setCart((prevCart) => {
    const updatedCart = [...prevCart, item];
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    return updatedCart;
  });
};


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart باید داخل <CartProvider> استفاده شود");
  return context;
};
