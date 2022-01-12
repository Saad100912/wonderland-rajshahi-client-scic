import React from "react";
import { useState, useEffect } from "react";
import useAuth from "./../../hooks/useAuth";
import "./MyBookings.css";

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(
            `https://infinite-eyrie-65036.herokuapp.com/bookings/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setMyBookings(data);
            });
    }, [user.email]);

    const handleCancelBtn = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to cancel this booking?"
        );
        if (proceed) {
            fetch(`https://infinite-eyrie-65036.herokuapp.com/bookings/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Canceled the booking successfully");
                    }
                    const rest = myBookings.filter((s) => s._id !== id);
                    // console.log(rest);
                    setMyBookings(rest);
                });
        }
    };

    return (
        <div className="container my-5 my-booking-page">
            <h1>My bookings</h1>
            <div>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Ride Image</th>
                            <th>Ride Name</th>
                            <th>Cost</th>
                            <th>Booked by</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myBookings.map((s) => (
                            <tr key={s._id}>
                                <td data-title="Ride Image">
                                    <img
                                        className="img-fluid"
                                        src={s.rideImg}
                                        alt=""
                                    />
                                </td>
                                <td data-title="Ride Name">{s.rideName}</td>
                                <td data-title="Cost">{s.rideCost}</td>
                                <td data-title="Booked by">{s.name}</td>
                                <td data-title="Phone">{s.phone}</td>
                                <td data-title="Status">{s.status}</td>
                                <td data-title="Cancel">
                                    <button
                                        className="cancel-bookings-btn"
                                        onClick={() => handleCancelBtn(s._id)}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
