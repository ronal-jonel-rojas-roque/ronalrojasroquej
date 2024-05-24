import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface CarouselProps {
    images: string[];
}

class DetalleCarrusel extends Component<CarouselProps> {

    render() {
        const { images } = this.props;
        return (
            <Carousel>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className='img-carrusel' />
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default DetalleCarrusel;
