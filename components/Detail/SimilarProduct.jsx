import { useRouter } from 'next/router'
import { data } from "../../productData"
import Icon from "../Icon"

import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';

import SimilarCard from './SimilarCard';

function SimilarProduct() {

    const router = useRouter()
    let type, color;
    let similarProduct = []

    data?.forEach((dataItem) => {
        if (dataItem.name === router.query.product) {
            type = dataItem.type
            color = dataItem.color
        }
    })

    data?.forEach((item) => {
        if (item.type === type && item.color === color && item.name !== router.query.product) {
            similarProduct.push(item)
        }
    })

    return (
        <div>

            <h4 className='text-2xl font-medium text-neutral-600 mb-8'>Benzer Ürünler</h4>

            <div>

                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={2}
                    totalSlides={similarProduct.length < 4 ? similarProduct.length : 4}
                    isPlaying={similarProduct.length < 4 ? false : true}
                    visibleSlides={4}
                    interval={10000}
                    className='relative'>
                    <Slider>
                        {
                            similarProduct?.map((product) => {
                                return (
                                    <Slide>
                                        <SimilarCard name={product.name} discount={product.discount} price={product.price} link={product.images[0].image} />
                                    </Slide>
                                )
                            })

                        }
                    </Slider>

                    {similarProduct.length > 3 ? (
                        <ButtonNext className='absolute top-32 right-0'>
                            <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-tert-200 ">
                                <Icon iconType="bi" iconName="BiRightArrowCircle" iconColor="text-neutral-100" classname="text-xl" />
                            </div>

                        </ButtonNext>
                    ) : ""}

                </CarouselProvider>

            </div>
        </div>
    )
}

export default SimilarProduct