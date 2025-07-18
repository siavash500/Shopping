import ProductItem from '../../Component/ProductItems/ProductItem';
import Container from '../../Component/Navbar/container/Container';
import { useNavigate } from 'react-router-dom';

export default function Store() {
  const navigate = useNavigate();
  const productIds = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <div className="text-right mt-5 mb-4" dir="rtl">
        <h1 className="font-bold text-2xl text-gray-800">جدیدترین محصولات</h1>
        <p className="text-sm text-gray-500 mt-2">
          مجموعه‌ای از بهترین و جدیدترین عطرها برای سلیقه‌های خاص
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productIds.map((id) => (
          <div
            key={id}
            onClick={() => navigate(`/Product/${id}`)}
            className="cursor-pointer hover:shadow-lg transition-all border rounded-lg overflow-hidden bg-white"
          >
            <ProductItem />
          </div>
        ))}
      </div>
    </Container>
  );
}
