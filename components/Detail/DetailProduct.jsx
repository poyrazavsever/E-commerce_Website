import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { data } from "../../productData"
import { Tooltip } from 'react-tooltip'
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';

import Body from './body';
import Star from './star';

import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-tooltip/dist/react-tooltip.css'


const DetailProduct = () => {

  const router = useRouter()

  let totalSlides
  let total = 0
  let commentArray = []
  let name, star, rate, comments, price, discount, color, images, otherColors;
  const [isBody, setIsBody] = useState("XS")


  data?.forEach((dataItem) => {
    if (dataItem.name === router.query.product) {
      totalSlides = dataItem.images.length

      // Ekleme yaptık
      name = dataItem.name
      dataItem.comments?.forEach((item) => {
        total += item.star
        commentArray.push(item)
        rate = commentArray.length
        star = total / commentArray.length
      })
      comments = dataItem.comments
      price = dataItem.price
      discount = dataItem.discount
      images = dataItem.images
      color = dataItem.color
      otherColors = dataItem.otherColors
    }
  })

  console.log(commentArray)

  return (
    <div>

      <div className='flex items-start gap-24'>

        <div className='w-72 !z-0'>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={totalSlides}
            infinite
            isPlaying
            playDirection='forward'>

            <Slider
              preventVerticalScrollOnTouch={false}>

              {
                images?.map((item, i) => {
                  return (
                    <Slide index={i} key={i}>
                      <img src={item.image} className='rounded-xl' />
                    </Slide>
                  )

                })
              }

            </Slider>

            <DotGroup>
              {
                images?.map((item, i) => {
                  return (
                    <Dot key={i} index={i} slide={i} className='border border-neutral-300 rounded w-9 mr-2 mt-1 disabled:grayscale'>
                      <img src={item.image} />
                    </Dot>
                  )
                })
              }

            </DotGroup>

          </CarouselProvider>

        </div>

        <div className='flex flex-col items-start'>

          <h4 className='font-medium'>{name}</h4>

          {/* Değerlendirme */}

          <div className='flex items-center gap-2 mt-4'>

            <Star star={star} />

            <span className='text-sm text-neutral-400'>{rate} Değerlendirme</span>

          </div>

          {/* Fiyat */}

          <div className='flex flex-col items-start mt-4'>
            <span className='text-xs text-neutral-400 line-through pr-2'>{discount}</span>
            <span className='text-xl md:text-3xl font-semibold text-tert-200'>{price}</span>
          </div>

          <div className='h-[1px] w-full bg-neutral-300 rounded-full my-3'></div>

          {/* Renk */}

          <div className='flex flex-col items-start gap-2 mt-23'>

            <h6 className='text-sm text-neutral-800'>Renk: <span className='font-semibold'>{color}</span></h6>

            <div className='flex items-start gap-3'>
              {
                otherColors?.map((color, i) => {
                  return (
                    <>
                      <button className='w-10'>
                        <img src={color.image} key={i} data-tooltip-id={color.color} data-tooltip-content={color.color} className='w-full rounded' />
                      </button>
                      <Tooltip id={color.color} />
                    </>

                  )
                })
              }
            </div>

          </div>

          {/* Beden */}

          <div className='flex flex-col items-start gap-2 mt-5'>

            <h6 className='text-sm text-neutral-800'>Beden: <span className='font-semibold'>{isBody}</span></h6>

            <Body isBody={isBody} setIsBody={setIsBody} />

          </div>

          <button className='w-96 py-3 rounded-md bg-tert-200 text-white hover:bg-tert-100 transition-all mt-8'>Sepete Ekle</button>

          {/* Öne Çıkanlar  */}

          <div className='flex flex-col items-start gap-4 mt-8'>
            <div className='flex flex-col items-start gap-2'>
              <h6 className='text-sm text-neutral-800'>Öne Çıkan Bilgiler</h6>

              <ul className='flex flex-col items-start gap-1'>

                <li className='text-neutral-400 text-xs'>30 gün içersinde ücretsiz iade. <a href='#' className='underline font-medium text-neutral-600'>Detaylı bilgi için tıklayın.</a> </li>

                <li className='text-neutral-400 text-xs'>Bu ürün sizlere <a href='/about' className='underline font-medium text-neutral-600'>“Harika Butik”</a> tarafından gönderilecektir.</li>

                <li className='text-neutral-400 text-xs'>Mankenin üzrindeki ürün M bedendir.</li>

                <li className='text-neutral-400 text-xs'>Modelin Ölçüleri: Boy: 1,80, Göğüs: 97 Bel: 80, Kalça: 94 </li>

              </ul>
            </div>


            <button className='w-96 py-1 text-sm border uppercase border-neutral-600 text-neutral-600 hover:bg-neutral-600 hover:text-neutral-50 transition-all'>ürünün tüm özellikleri</button>

          </div>

        </div>

      </div>



    </div >
  )
}

export default DetailProduct