import { Inter } from 'next/font/google'

// Components 
import Slider from '@/components/Home/Slider'
import Category from '@/components/Home/Category/Category'
import Product from '@/components/Home/Product/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Slider />

      {/* Ürünler  */}

      <div className='container mx-auto my-24'>

        <div className='flex items-start gap-24'>
          <Category />
          <Product />
        </div>

      </div>

    </>
  )
}
