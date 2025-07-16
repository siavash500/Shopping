import { useLocation } from 'react-router-dom'
import Container from "../../Component/Navbar/container/Container"
import { useCart } from "../../Component/cartitem/CartItems"
import { useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal } from "react"
export default function CartPage() {
  const location = useLocation()
  const product = location.state?.product
  const { cart } = useCart()
  const [activeTab, setActiveTab] = useState<"cart" | "favorites">("cart")

  return (
    <Container>
      {/* نوبار ساده با دو تب */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${activeTab === "cart" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("cart")}
        >
          🛒 سبد خرید
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "favorites" ? "bg-pink-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("favorites")}
        >
           علاقه‌مندی‌ها
        </button>
      </div>

      {/* محتوای تب‌ها */}
      {activeTab === "cart" ? (
        <div>
          {cart.length === 0 ? (
            <p className="text-right text-gray-600">سبد خرید خالیه 😅</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {cart.map((item: { id: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; quantity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: { toLocaleString: () => string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined } })  => (
                <div key={`${item.id}-${item.title}-${item.quantity}`} className="p-4 bg-gray-100 rounded shadow text-right">
                  <p><strong>نام:</strong> {item.title}</p>
                  <p><strong>قیمت:</strong> {item.price.toLocaleString()} تومان</p>
                  <p><strong>تعداد:</strong> {item.quantity}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-right text-gray-600">
          علاقه‌مندی‌ها هنوز پیاده‌سازی نشده 😄
        </div>
      )}

      {/* جزئیات محصول انتخاب‌شده */}
      {product && (
        <div className="mt-10 p-6 border-t text-right">
          <h3 className="text-xl font-bold mb-4">🔍 جزئیات محصول</h3>
          <p><strong>نام محصول:</strong> {product.title}</p>
          <p><strong>قیمت:</strong> {product.price.toLocaleString()} تومان</p>
          <p><strong>توضیحات:</strong> محصول وارداتی و خاص مناسب لحظات ماندگار.</p>

          <div className="mt-4 bg-green-100 p-4 rounded shadow text-center cursor-pointer hover:bg-green-200 transition">
            <strong>💳 به درگاه پرداخت برید</strong>
          </div>
        </div>
      )}
    </Container>
  )



}