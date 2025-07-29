import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../../Component/Navbar/container/Container';
import Buttons from '../../Component/buttons/Buttons';
import { useCart } from '../../Component/cartitem/CartItems';

// تعریف نوع محصول
interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Product() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  //get the API

 useEffect(() => {
  if (!productId) return;

  fetch(`http://localhost:3001/products/${productId}`)
    .then((res) => {
      if (!res.ok) throw new Error('محصول یافت نشد');
      return res.json();
    })
    .then((data) => setProduct(data))
    .catch(() => setProduct(null));
}, [productId]);


  if (!product) {
  return (
    <Container>
      <div className="text-center py-10">
        <p className="text-gray-500">محصول یافت نشد</p>
      </div>
    </Container>
  );
}



  const handleBuyClick = () => {
    if (!product) return;
    addToCart(product);
     // دریافت لیست فعلی از localStorage
    const prevCartStr = localStorage.getItem("cartProducts") || "[]";
    const prevCart = JSON.parse(prevCartStr);


    // اضافه‌کردن محصول جدید
    const updatedCart = [...prevCart, product];
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    localStorage.setItem("cartProduct", JSON.stringify(product));
    navigate("/addtocart");
  };

 
  const handleFavorClick = () => {
    if (!product) return;
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    const favorites: Record<number, Product> = JSON.parse(localStorage.getItem("favorites") || "{}");

    if (newFavoriteStatus) {
      favorites[product.id] = product;
    } else {
      delete favorites[product.id];
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  if (!product) {
    return (
      <Container>
        <div className="text-center py-10">
          <p className="text-gray-500">محصول یافت نشد</p>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-10 px-4 text-right" dir="rtl">
        <div className="mb-8">
          <p className="text-gray-800 text-xl leading-relaxed mt-5">
            در این بخش با یکی از محصولات خاص مجموعه عطرهای ما آشنا می‌شوید. انتخابی بی‌نظیر برای سلیقه‌های خاص.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-cover rounded shadow-md ml-auto"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{product.title}</h2>
            <p className="text-gray-700 mb-4 font-medium">قیمت: {product.price.toLocaleString()} تومان</p>

            <div className="flex flex-col gap-4">
              <Buttons
                variant="primery"
                onClick={handleBuyClick}
                className="text-sm"
              >
                افزودن به سبد خرید
              </Buttons>

              <Buttons
                variant={isFavorite ? "danger" : "primery"}
                onClick={handleFavorClick}
                className="text-sm"
              >
                {isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
              </Buttons>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">درباره‌ی این عطر</h3>
          <p className="text-lg text-gray-800 leading-7">
            این عطر بی‌نظیر با رایحه‌ای متعادل از نت‌های چوبی، گلی و مرکبات، حس طراوت و شادابی را با شکوهی خاص ترکیب می‌کند.
            طراحی شیشه‌ی محصول به گونه‌ای است که هم در مجموعه شخصی شما می‌درخشد و هم به‌عنوان هدیه‌ای لوکس قابل استفاده است.
            ماندگاری بالا، پخش رایحه مناسب و اصالت ترکیب، این عطر را به گزینه‌ای ایده‌آل برای استفاده روزمره یا مهمانی‌های رسمی تبدیل کرده‌اند.
          </p>
        </div>
      </div>
    </Container>
  );
}
