
export default function ProductItem() {
    return (
        <div className="shadow border rounded pb-5">
            <img
                className="rounded-t object-cover w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18l3WpAVbJkrC0TCxkV-jK0Z0is0Ke-Qt9Q&s" alt="" />

            <div className="flex justify-between flex-row-reverse px-4 mt-2  " >
                <h3>عنوان محصول</h3>
                <span>555</span>
            </div>
            <div className="px-4 mt-2">
                <p className="line-clamp-2 text-right">
                     این عطر بی‌نظیر با رایحه‌ای متعادل از نت‌های چوبی، گلی و مرکبات، حس طراوت و شادابی را با شکوهی خاص ترکیب می‌کند.
          طراحی شیشه‌ی محصول به گونه‌ای است که هم در مجموعه شخصی شما می‌درخشد و هم به‌عنوان هدیه‌ای لوکس قابل استفاده است.
          ماندگاری بالا، پخش رایحه مناسب و اصالت ترکیب، این عطر را به گزینه‌ای ایده‌آل برای استفاده روزمره یا مهمانی‌های رسمی تبدیل کرده‌اند.
                </p>
            </div>
        </div>
      
    )
}
