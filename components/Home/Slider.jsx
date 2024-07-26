import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div className="!-z-20">
            <Carousel className="!-z-20" 
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}>

                <div> 
                    <img src="Slider/slider1.jpg" alt="altProp"/>
                </div>
                <div>
                    <img src="Slider/slider2.jpg" alt="altProp"/>
                </div>
                <div>
                    <img src="Slider/slider3.jpg" alt="altProp"/>
                </div>
                <div>
                    <img src="Slider/slider4.jpg" alt="altProp"/>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Slider