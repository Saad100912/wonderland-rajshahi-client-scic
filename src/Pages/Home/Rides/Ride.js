import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Ride.css";

const Ride = ({ ride }) => {
    const { _id, img, name, shortInfo } = ride;
    return (
        <Col>
            <Card>
                <Card.Img className="p-3" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-success">{name}</Card.Title>
                    <Card.Text>{shortInfo}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 text-center pb-3">
                    <Link className="book-now-btn" to={`/rideDetail/${_id}`}>
                        Book Now
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Ride;
