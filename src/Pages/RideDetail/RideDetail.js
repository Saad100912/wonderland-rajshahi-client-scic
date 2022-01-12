import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RideDetail.css";
import useAuth from "./../../hooks/useAuth";

const RideDetail = () => {
    const { rideId } = useParams();
    const [ride, setRide] = useState({});
    const { user } = useAuth();
    const { img, name, description } = ride;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    useEffect(() => {
        fetch(`https://infinite-eyrie-65036.herokuapp.com/rides/${rideId}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setRide(data));
    }, [rideId]);

    const onSubmit = (data) => {
        data = {
            ...data,
            rideName: ride?.name,
            rideImg: ride?.img,
            rideCost: ride?.price,
            status: "pending",
        };
        // console.log(data);

        fetch("https://infinite-eyrie-65036.herokuapp.com/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Booking successful");
                    reset();
                }
            });
    };

    return (
        <div className="container my-5">
            <div className="row detail-container p-md-5 p-3">
                <div className="col-12 col-md-6 p-md-5">
                    <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <div className="col-12 col-md-6 p-md-5 my-3">
                    <h1 className="text-light">{name}</h1>
                    <p className="fs-5 my-5 text-light">{description}</p>
                </div>
            </div>
            <div className="row my-5">
                <h2 className="text-center text-secondary">Booking form</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="booking-form"
                >
                    <p>Name:</p>
                    <input
                        placeholder="Enter your name"
                        defaultValue={user?.displayName}
                        {...register("name", { required: true })}
                    />
                    <p>Email:</p>
                    <input
                        placeholder="Enter your email"
                        defaultValue={user?.email}
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <p>Address:</p>
                    <input
                        placeholder="Enter Address"
                        defaultValue=""
                        {...register("address", { required: true })}
                    />
                    <p>Phone:</p>
                    <input
                        placeholder="Enter phone number"
                        defaultValue=""
                        type="number"
                        {...register("phone", { required: true })}
                    />
                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <br />
                    <div className="text-center">
                        <input
                            type="submit"
                            value="Confirm booking"
                            className="booking-btn"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RideDetail;
