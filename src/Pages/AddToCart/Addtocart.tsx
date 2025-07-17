import { useNavigate } from 'react-router-dom';
import Container from "../../Component/Navbar/container/Container";

export default function PageCart() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className='border flex flex-col text-right mt-10 p-4'>
        <div className=' border'>
          <div>
          <button 
          onClick={() => navigate('/cart')}
          className="border border-black w-[123px] py-2 px-4 rounded  hover:bg-black hover:text-white transition font-bold"
        >
         🛒 سبد خرید
        </button>
        </div>
        <div>
          <button
              onClick={() => navigate('/favorites')}
              className="border border-black w-[123px] py-2 px-4 rounded  hover:bg-stone-800 hover:text-white transition font-bold">
               علاقه‌مندی‌ها
          </button>
        </div>
        </div>
      </div>
    </Container>
  );
}
