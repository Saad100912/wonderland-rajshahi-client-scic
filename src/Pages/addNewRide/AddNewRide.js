import React from "react";
import { useForm } from "react-hook-form";

const AddNewRide = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/rides", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Added new ride information successfully");
                    reset();
                }
            });
    };
    return (
        <div className="container my-5 add-new-ride-page">
            <h1>Add new ride information</h1>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="booking-form"
                >
                    <p>Ride name:</p>
                    <input
                        placeholder="Enter ride name"
                        {...register("name", { required: true })}
                    />
                    <p>Short info:</p>
                    <input
                        placeholder="Write short info"
                        {...register("shortInfo", { required: true })}
                    />
                    <p>Description:</p>
                    <input
                        placeholder="Write description"
                        {...register("description", { required: true })}
                    />
                    <p>Ticket price:</p>
                    <input
                        placeholder="Enter ticket price"
                        {...register("price", { required: true })}
                    />
                    <p>Image url:</p>
                    <input
                        placeholder="Enter image url"
                        {...register("img", { required: true })}
                    />
                    <br />
                    <div className="text-center">
                        <input
                            type="submit"
                            value="Submit"
                            className="booking-btn"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewRide;
