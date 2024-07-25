import { Inter } from 'next/font/google'

// Components 
import Slider from '@/components/Home/Slider'
import Category from '@/components/Home/Category/Category'
import Product from '@/components/Home/Product/Product'
import Upper from '@/components/Home/Upper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Slider />

      {/* Ürünler  */}

      <div className='md:container md:mx-auto my-12'>
        
        <Upper />

        <div className='flex items-start gap-24 mt-24'>
          <Category />
          <Product />
        </div>

      </div>

    </>
  )
}
