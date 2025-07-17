import {  useNavigate } from 'react-router-dom'
import Container from '../../Component/Navbar/container/Container'
import Buttons from '../../Component/buttons/Buttons'
import { useCart } from '../../Component/cartitem/CartItems';

export default function Product() {
    const {addToCart} = useCart()
    const navigate = useNavigate()
    const handleBuyClick = () => {
    const product = 
      {
      id: 1,
      title: "عطر خاص کانادایی",
      price: 560000,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18l3WpAVbJkrC0TCxkV-jK0Z0is0Ke-Qt9Q&s"
    }

    addToCart(product) 
    navigate("/Cart" , {state : {product }}) 
}
    const handleFavorClick = () => {
      navigate("favorites")
    }

  return (
    <div className="bg-gray-50">
      <Container>
            <section  className="py-10 border-b">
        {/* معرفی محصول */}
        <div className="w-full text-right mb-6">
          <p
            className="text-[#212121] px-4"
            style={{ fontSize: "20px", fontWeight: "600" }}
          >
            رایحه‌ای خوشبو کننده و معتبر، وارداتی از کانادا. محبوب بین طرفداران عطرهای خاص و ماندگار.
          </p>
        </div>


        {/* عکس و اطلاعات اصلی */}
        <div className="flex flex-row-reverse items-center justify-between gap-6 flex-wrap">
          <div className="w-[350px] h-[290px] rounded shadow overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18l3WpAVbJkrC0TCxkV-jK0Z0is0Ke-Qt9Q&s"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-lg text-right">
            <h1 className="text-2xl font-bold mb-4 text-gray-900"></h1>
            <p className="text-lg text-green-600 font-semibold">قیمت: ۵۸۰٬۰۰۰ تومان</p>
            <p className="text-sm text-gray-500 mt-2">موجود در انبار | ارسال رایگان</p>
            <div className="flex flex-row-reverse gap-4 mt-6 justify-end">
{/* /////////////////////////////////////////////////////////////////////////////// */}
            <div className="flex flex-row-reverse gap-4 mt-6 justify-end">
                <Buttons variant="succes" onClick={handleBuyClick}>
                خریدن محصول
              </Buttons>


              <Buttons variant="primery" onClick={handleFavorClick} className="text-sm">
                افزودن به علاقه‌مندی‌ها
              </Buttons>

            </div>

            </div>
          </div>
        </div>
      </section>

        {/* بخش توضیحات و مشخصات پایین‌تر */}
        <section className="py-12 max-w-3xl mx-auto">
          <h2 className="text-xl text-right font-bold mb-4 text-gray-800">توضیحات محصول</h2>
          <p className="text-right leading-relaxed text-gray-700  bg-white p-6 rounded shadow">
            لورم ایپسوم دولور سیت آمِت، عطری از دل شب. این رایحه با نت‌های ابتدایی مرکبات تازه آغاز می‌شود،
            سپس در قلب خود گل‌های سفید و چوب صندل را آشکار می‌کند، و در پایان با لمس گرم مشک و وانیل،
            حسی ماندگار و اغواگر به جا می‌گذارد. مناسب برای روزهای خاص و لحظه‌هایی که می‌خواهی خاطره‌انگیز باشی.
          </p>
        </section>
      </Container>
    </div>
  )
}
