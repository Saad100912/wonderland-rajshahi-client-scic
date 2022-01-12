import React from "react";
import "./Package.css";

const Package = () => {
    return (
        <div className="container my-5 feature-container pb-2">
            <h1 className="py-4 text-danger text-center">
                Packages for everyone
            </h1>
            <div className="row g-5">
                <div className="col-12 col-md-6 px-md-5">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/NpJ4rpr/package1.png"
                        alt=""
                    />
                    <h3 className="text-warning  py-3">
                        1 Year membership card
                    </h3>
                    <h5>Benefits:</h5>
                    <ul>
                        <li>
                            Entry and all (08) rides once at parks (FK+WK) on
                            every visit for 04 persons. Members (04 persons)
                            will get I (ONE) welcome drink / ice-cream in his /
                            her every visit.
                        </li>
                        <li>
                            ln the presence of Members, he will get 25% discount
                            on entry for 2 (Two) accompanying guests on every
                            visit.
                        </li>
                        <li>
                            Members can enter 1 (ONE) time on every visit during
                            his / her Membership tenure
                        </li>
                        <li>
                            Members (04 persons) will get 25% Discount on Resort
                            Atlantis and 20% discount on Xtreme Racing.
                        </li>
                    </ul>
                    <button className="package-btn">Buy Now</button>
                </div>
                <div className="col-12 col-md-6 px-md-5">
                    <img
                        className="img-fluid"
                        src="https://i.ibb.co/GRBvX9M/package2.png"
                        alt=""
                    />
                    <h3 className="text-warning py-3">
                        Parent and Toddler Pass
                    </h3>
                    <p>
                        This exclusive online offer is for visits on selected
                        dates during off-peak periods for just £25 an adult and
                        a toddler (under 5) can spend the day at Wonderland
                        Rajshahi. This special ticket is not available during
                        weekends and school holidays. Benefits of booking online
                        include:
                    </p>
                    <ul>
                        <li>
                            This offer is only available online - book now for
                            the best price for a Parent and Toddler
                        </li>
                        <li>
                            Add on an extra Under 5 for £5 and Under 3's go
                            free!
                        </li>
                        <li>
                            Enjoy more fun - head straight to the turnstiles
                            with a E-Ticket
                        </li>
                    </ul>
                    <button className="package-btn">Buy Now</button>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn-info border-0 rounded-3 py-1 px-3">
                    see more
                </button>
            </div>
        </div>
    );
};

export default Package;
