import React from 'react'
import ProductItem from '../../Component/ProductItems/ProductItem'
import Container from '../../Component/Navbar/container/Container'
import { useNavigate } from 'react-router-dom'

export default function Store() {
  const navigate = useNavigate()

  const productIds = [1, 2, 3, 4, 5, 6]

  return (
    <Container>
      <h1 className='text-right mt-5 font-bold text-xl'>جدیدترین محصولات</h1>

      <div className='grid grid-cols-4 gap-4 mt-10'>
        {productIds.map((id) => (
          <div
            key={id}
            onClick={() => navigate(`/Product/${id}`)}
            className="cursor-pointer hover:shadow-md transition rounded"
          >
            <ProductItem />
          </div>
        ))}
      </div>
    </Container>
  )
}
