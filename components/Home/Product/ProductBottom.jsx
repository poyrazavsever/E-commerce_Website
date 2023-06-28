import React from 'react'
import { data } from "../../../productData"
import ProductCard from './ProductCard'

const ProductBottom = () => {
  return (
    <div className='w-full mt-12'>

      <div className='w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-16'>
        {
          data?.map((product, i) => {
            return (
              <ProductCard key={i} name={product.name} discount={product.discount} price={product.price} link={product.images[0].image} />
            )
          })
        }

      </div>

    </div>
  )
}

export default ProductBottom