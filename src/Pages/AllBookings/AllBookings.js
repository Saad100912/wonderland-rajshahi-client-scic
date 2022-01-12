import React from "react";
import { useState, useEffect } from "react";
import "./AllBookings.css";

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    // console.log(allBookings);

    useEffect(() => {
        fetch("http://localhost:5000/bookings")
            .then((res) => res.json())
            .then((data) => setAllBookings(data));
    }, []);

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
                    const rest = allBookings.filter((s) => s._id !== id);
                    // console.log(rest);
                    setAllBookings(rest);
                });
        }
    };

    const handleApproveBtn = (id) => {
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                status: "approved",
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("This booking has been approved successfully");
                    fetch("http://localhost:5000/bookings")
                        .then((res) => res.json())
                        .then((data) => {
                            setAllBookings(data);
                        });
                }
            });
    };

    return (
        <div className="container my-5 all-bookings-page">
            <h1>Manage all bookings</h1>
            <div>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Ride Name</th>
                            <th>Booked by</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBookings.map((s) => (
                            <tr key={s._id}>
                                <td data-title="Ride Name">{s.rideName}</td>
                                <td data-title="Booked by">{s.name}</td>
                                <td data-title="Phone">{s.phone}</td>
                                <td data-title="Status">{s.status}</td>
                                <td data-title="Approve">
                                    <button
                                        className="approve-bookings-btn"
                                        onClick={() => handleApproveBtn(s._id)}
                                    >
                                        Approve
                                    </button>
                                </td>
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

export default AllBookings;
