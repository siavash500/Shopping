import React from 'react'
import ProductItem from '../../Component/ProductItems/ProductItem'
import Container from '../../Component/Navbar/container/Container'
import { Link } from 'react-router-dom'

export default function Store() {
  return (
    <>
      <Container>
        <h1 className='text-right mt-5'>جدیدترین محصولات</h1>

        <div className='grid grid-cols-4 gap-4 mt-10'>

          <Link to={`/Product/${1}`} >
            <ProductItem />
          </Link>
          <Link to={`/Product/${2}`} >
            <ProductItem />
          </Link>
          <Link to={`/Product/${3}`} >
            <ProductItem />
          </Link>
          <Link to={`/Product/${4}`} >
            <ProductItem />
          </Link>
          <Link to={`/Product/${5}`} >
            <ProductItem />
          </Link>
          <Link to={`/Product/${6}`} >
            <ProductItem />
          </Link>
        </div>
      </Container>

    </>
  )
}
