import { useState , useEffect } from 'react';
import ProductItem from '../../Component/ProductItems/ProductItem';
import Container from '../../Component/Navbar/container/Container';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../service/api';
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Store() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
     async function fetchData() {
       try {
         const result = await getProducts();
         setProducts(result);
       } catch (error) {
         console.error('❌ خطا در دریافت محصولات:', error);
       }
     }
   
     fetchData();
   }, []);
   
  return (
     <Container>
      <div className="text-right mt-5 mb-4" dir="rtl">
        <h1 className="font-bold text-2xl text-gray-800">جدیدترین محصولات</h1>
        <p className="text-sm text-gray-500 mt-2">
          مجموعه‌ای از بهترین و جدیدترین عطرها برای سلیقه‌های خاص
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-end text-right"
      dir="rtl">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/Product/${product.id}`)}
            className="cursor-pointer hover:shadow-lg transition-all border rounded-lg overflow-hidden bg-white"
          >
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
