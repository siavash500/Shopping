interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductItem({ id, title, price, image }: ProductItem) {
  if (!title || !price || !image) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover border-b"
      />
      <div className="p-4 flex flex-col justify-between h-full text-right">
        <div>
          <h3 className="text-lg font-extrabold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-red-600 font-semibold mb-2">
            {price.toLocaleString()} تومان
          </p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            این عطر بی‌نظیر با رایحه‌ای خاص، طراحی لوکس و ماندگاری بالا، انتخابی مناسب برای هر سلیقه‌ایست.
          </p>
        </div>
      </div>
    </div>
  );
}
