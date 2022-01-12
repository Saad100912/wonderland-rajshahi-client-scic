import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://i.ibb.co/t4L50dq/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-info">
                        <h1 className="mb-lg-5">
                            Have the best experience of theme park
                        </h1>
                        <h5>
                            Wonderland Rajshahi has everything that you need to
                            have a great time. It doesn't matter what group of
                            people you are family, couple or single, we've got
                            everything covered with our services.
                        </h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
