import React from "react";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Ride from "./Ride";

const Rides = () => {
    const [rides, setRides] = useState([]);
    useEffect(() => {
        fetch("https://infinite-eyrie-65036.herokuapp.com/rides")
            .then((res) => res.json())
            .then((data) => {
                setRides(data);
            });
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center my-5 text-primary">
                Browse Our best rides
            </h1>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {rides.map((ride) => (
                        <Ride key={ride._id} ride={ride}></Ride>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Rides;
