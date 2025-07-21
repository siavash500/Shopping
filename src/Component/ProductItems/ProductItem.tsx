interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
}
export default function ProductItem({ id, title, price, image }: ProductItemProps) {
  return (
    <div className="shadow border rounded pb-5">
      <span className="block text-sm text-gray-600 px-4 pt-2">شماره محصول: {id}</span>

      <img
        className="rounded-t object-cover w-full h-[180px]"
        src={image}
        alt={title}
      />

      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3 className="text-base font-bold text-gray-800">{title}</h3>
        <span className="text-sm font-semibold text-red-500">{price.toLocaleString()} تومان</span>
      </div>

      <div className="px-4 mt-2">
        <p className="line-clamp-2 text-right text-gray-600 text-sm">
          این عطر بی‌نظیر با رایحه‌ای خاص، طراحی لوکس و ماندگاری بالا، انتخابی مناسب برای هر سلیقه‌ایست.
        </p>
      </div>
    </div>
  );
}

