import React, { type ComponentProps } from "react"

type TVariant = "primery" | "danger" | "succes"

type TButtons = ComponentProps<"button"> & {
  variant?: TVariant
}

function getVariantClass(variant: TVariant = "primery") {
  const styles: Record<TVariant, string> = {
    primery: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    succes: "bg-green-600 text-white hover:bg-green-700",
  }
  return styles[variant]
}

export default function Buttons({ children, variant = "primery", className = "", ...props }: TButtons) {
  const combinedClasses = `py-2 px-6 rounded font-semibold transition ${getVariantClass(variant)} ${className}`

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
