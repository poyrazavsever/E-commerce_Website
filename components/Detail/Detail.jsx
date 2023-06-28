import React from 'react'
import DetailProduct from './DetailProduct'
import SimilarProduct from './SimilarProduct'
import Comments from './Comments'

const Detail = () => {
  return (
    <div className='mt-12'>

      <div className='bg-primary py-12 mb-24'>
        <div className='container mx-auto'>
          <DetailProduct />
        </div>
      </div>

      <div className='container mx-auto'>
        <SimilarProduct />

        <Comments />
      </div>


    </div>
  )
}

export default Detail