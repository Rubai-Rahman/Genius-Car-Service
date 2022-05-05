import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';



const Banner = () => {
    return (
        < >
            <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100 letSee"
                        src="https://i.ibb.co/1dnhWBY/slider-1.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 letSee"
                        src="https://i.ibb.co/DCKZhfK/slider2.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 letSee"
                        src=" https://i.ibb.co/PgGHd8D/slider3.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;