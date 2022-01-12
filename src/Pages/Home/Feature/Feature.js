import React from "react";
import "./Feature.css";

const Feature = () => {
    return (
        <div className="container my-5 feature-container">
            <h1 className="py-4 text-danger text-center">
                Top features of Wonderland
            </h1>
            <div className="row g-5 py-3">
                <div className="col-12 col-md-6 px-md-5">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/8crFQBw/feature1.png"
                        alt=""
                    />
                    <h3 className="text-warning py-3">
                        The tallest ferris wheel in the country
                    </h3>
                    <p>
                        We've got the tallest ferris wheel in the country. The
                        ferris wheel is 80 feet tall and can host a total of 100
                        people at a time. So, it doesn't matter whether your
                        with your family or as a group are just by yourself, you
                        can get the best ferris wheel experience you ever had.
                        Moreover you can get the full view of the city.
                    </p>
                </div>
                <div className="col-12 col-md-6 px-md-5">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/42HzSqf/feature2.png"
                        alt=""
                    />
                    <h3 className="text-warning py-3">
                        Drop tower State of the art lighting
                    </h3>
                    <p>
                        Our drop tower features the top quality state of the art
                        lighting. This can be used to display anything you like.
                        Looking for something to show to the whole world, then
                        this is your chance. Whether its the anniversary or
                        maybe you want to pop the biggest question to your loved
                        one, this state of art lighting can do it with style.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
