import { Link } from "react-router-dom";
export default function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="
        w-[120px] py-[5px] px-[10px] font-semibold text-black text-center
        transition duration-500 hover:bg-black 
        rounded-[5px]
        hover:text-white hover:rounded-[5px]
      "
    >
      {label}
    </Link>
  )
}
