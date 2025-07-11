import { useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">صفحه محصول شماره: {id}</h1>
      {/* اینجا می‌تونی اطلاعات مربوط به محصول رو از API بگیری */}
    </div>
  )
}
