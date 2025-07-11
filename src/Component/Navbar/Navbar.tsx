import React from 'react'
import Home from '../../Pages/home/Home'
import Store from '../../Pages/store/Store'
import { BrowserRouter , Link , Route , Routes } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
      <BrowserRouter>
        <ul 
          className='flex justify-between 
                      flex-row-reverse 
                      border-b shadow
                      items-center
                      h-14
                      '
                      
                      >
          <li>
            <Link to={'/'}>فروشگاه حاجی</Link>
          </li>
          <li>
            <Link to={'/store'}>سبد خرید</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
