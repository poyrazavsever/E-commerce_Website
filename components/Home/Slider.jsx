import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="Slider/slider1.jpg" />
                </div>
                <div>
                    <img src="Slider/slider2.jpg" />
                </div>
                <div>
                    <img src="Slider/slider3.jpg" />
                </div>
                <div>
                    <img src="Slider/slider4.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider