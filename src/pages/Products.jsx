import React from 'react'
import ProductsCarrousel from '../components/ProductsCarrousel'

const Products = () => {
  return (
    <div className='flex flex-col md:items-center text-center gap-5 py-10 px-4 overflow-x-hidden'>
      <h1 className='text-2xl text-sky-600 font-bold uppercase'>Productos</h1>

      <ProductsCarrousel />
    </div>
  )
}

export default Products
