import { Link } from "react-router-dom";
export default function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
  to={to}
  className="
    w-[90px] p-[6px] text-[15px] text-black text-center font-medium
    border border-transparent hover:border-stone-900
    rounded-[6px] hover:rounded-[4px]
    transition-all duration-300 ease-in-out
     hover:text-gray-900
    m-1
  "
>
  {label}
</Link>

  )
}
