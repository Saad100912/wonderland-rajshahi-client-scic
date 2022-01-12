import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import useFirebase from "./../../../hooks/useFirebase";

const Header = () => {
    const { user, logOut } = useFirebase();
    const [offCanvasShow, setoffCanvasShow] = useState(false);

    const handleClose = () => setoffCanvasShow(false);
    const handleShow = () => setoffCanvasShow(true);

    return (
        <div className="navbar-container">
            <Navbar variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="header-logo"
                            src="https://i.ibb.co/Stp0gWB/wonderland-rajshahi-logo.png"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto nav-menu-items">
                            <Link to="/home">Home</Link>
                        </Nav>
                        <Navbar.Text>
                            {user.displayName ? (
                                <div>
                                    <img
                                        onClick={handleShow}
                                        className="profile-picture"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                    <Offcanvas
                                        className="offcanvas-container"
                                        style={{ width: "270px" }}
                                        placement="end"
                                        show={offCanvasShow}
                                        onHide={handleClose}
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title className="text-center">
                                                <img
                                                    className="rounded-circle"
                                                    onClick={handleShow}
                                                    src={user.photoURL}
                                                    alt=""
                                                />
                                                <p>{user.displayName}</p>
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Link to="/manageMyBookings">
                                                Manage my bookings
                                            </Link>
                                            <Link to="/manageAllBookings">
                                                Manage all bookings
                                            </Link>
                                            <Link to="/addNewRide">
                                                Add new ride
                                            </Link>
                                            <button
                                                className="logout-btn"
                                                onClick={logOut}
                                            >
                                                Logout
                                            </button>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>
                            ) : (
                                <Link className="login-btn" to="/login">
                                    Login / Sign Up
                                </Link>
                            )}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
