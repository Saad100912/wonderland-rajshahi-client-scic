import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login";
import RideDetail from "./Pages/RideDetail/RideDetail";
import MyBookings from "./Pages/MyBookings/MyBookings";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import AllBookings from "./Pages/AllBookings/AllBookings";
import AddNewRide from "./Pages/addNewRide/AddNewRide";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute exact path="/rideDetail/:rideId">
                        <RideDetail />
                    </PrivateRoute>
                    <PrivateRoute exact path="/manageMyBookings">
                        <MyBookings />
                    </PrivateRoute>
                    <PrivateRoute exact path="/manageAllBookings">
                        <AllBookings />
                    </PrivateRoute>
                    <PrivateRoute exact path="/addNewRide">
                        <AddNewRide />
                    </PrivateRoute>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
