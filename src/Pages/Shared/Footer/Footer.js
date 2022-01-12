import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row m-0 g-5">
                <div className="col-12 col-md-4">
                    <h3>Our address</h3>
                    <p style={{ fontWeight: "500" }}>
                        Wonderland Rajshahi, Mohisbathan, Rajpara, Rajshahi
                        Court, Rajshahi, Bangladesh
                    </p>
                    <p className="mb-0">Saturday -Thursday: 11 AM – 07 PM</p>
                    <p>Friday and Holiday: 10 AM – 08 PM</p>
                    <p className="mb-0">Phone: 01710101010, 01710101010</p>
                    <p>Email: wonderland@rajshahi.com</p>
                </div>
                <div className="col-12 col-md-4 footer-payment-methods">
                    <h3>Payment methods</h3>
                    <div>
                        <img
                            src="https://i.ibb.co/NFqvDxW/mastercard.png"
                            alt=""
                        />
                        <img src="https://i.ibb.co/dGMthDc/paypal.png" alt="" />
                        <img src="https://i.ibb.co/L50S6bP/visa.png" alt="" />
                        <br />
                        <img src="https://i.ibb.co/qNyHV53/ipay.png" alt="" />
                        <img src="https://i.ibb.co/BggzDdY/gpay.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-4 footer-message">
                    <h5>Contact us:</h5>
                    <input type="email" placeholder="Enter your email" />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your question or suggestion"
                    />
                    <br />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
