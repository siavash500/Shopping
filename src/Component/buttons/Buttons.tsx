import React, { Children, type ComponentProps } from "react"

type TVariant = "primery" | "danger" | "succes"

//تمام ویژگی های باتن رو بگیره و در کنارش یه پراپ واریانت هم بگیره اختیاری
//واریانت کدوم رو میگم؟؟ خط 3 تی واریانت منظورمه

type TButtons = ComponentProps<"button"> & {
  variant?: TVariant
}



function getVariantClass(variant: TVariant = "primery") {
  //Record<TVariant, string> بررسی میکنه که مقدار واریانت معتبر باشه

  const styles: Record<TVariant, string> = {
    primery: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    succes: "bg-green-600 text-white hover:bg-green-700",
  }
  return styles[variant]
}

//vatiant = "primery" مقدار پیشفرضی گذاشته در صورتی که واریانت چیزی نده
//className =""اگر کاربر کلاس دیگری داد با این کلاس ها ترکیب بشه
//combinedClasses استایل های داخلی و خارجی رو باهم ادغام میکنه
//props ویژگی های onclick  و غیره رو منتقل میکنه
//Children ولیو داخل دکمه هست

export default function Buttons({ children, variant = "primery", className = "", ...props }: TButtons) {
  const combinedClasses = `py-2 px-6 rounded font-semibold transition ${getVariantClass(variant)} ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
