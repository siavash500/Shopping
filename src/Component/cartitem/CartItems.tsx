import { Children, createContext , useContext , useState } from "react";

export type CartItem = {
  id:number
  title: string
  price: number
  quantity : number
}


const CartContext = createContext<any>(null)


export const CartProvider = ({children} : any) => {
  const [cart ,setCart] = useState<CartItem[]>([])

  const addToCart = (item:CartItem) => {
    setCart ([...cart , item])
  }

  return (
    <CartContext.Provider value={{cart , addToCart}}>
      {children}
    </CartContext.Provider>
  )
}


//این یک تدفنده جالبه

export const useCart = (p0?: (prevCart: any[]) => any[]) => useContext(CartContext)
