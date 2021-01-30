import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import './UserDashboard.css';

class UserDashboard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <ul className="admin-dashboard">
                <li className="admin-dashboard-item2">LOGGED IN AS USER</li>
                <li className="admin-dashboard-item"><NavLink to="/userdashboard" className="admin-dashboard-link">USER DASHBOARD</NavLink>
                <ul className="admin-dashboard-list">
                    <li className="admin-dashboard-subitem"><NavLink to="#" className="admin-dashboard-sublink">My Account</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="/view" className="admin-dashboard-sublink">My Profile</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="#" className="admin-dashboard-sublink">Settings</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="/welcome" className="admin-dashboard-sublink">Logout</NavLink></li>
                </ul>
                </li>
            </ul>

                <div id="image-item">
                    <img className="camera_image" src="/Images/Camera.jpg" height="170px" width="170px"/>
                <Link to="/cameraproduct"><button className="camera-button"><b>Buy</b></button></Link>
                </div>

                <div>
                    <img className="headphone-image" height="164px" width="170px" src="Images/Headphone.jpg"/>
                    <Link to="/headphoneproduct"><button className="headphone-button"><b>Buy</b></button></Link>
                </div>

                <div>
                    <img className="watch-image" height="164px" width="170px" src="Images/Watch_case.jpg"/>
                   <Link to="/watchproduct"><button className="watch-button"><b>Buy</b></button></Link>
                </div>

                <div>
                    <img className="tshirt-image" height="164px" width="170px" src="Images/T-shirt.jpg"/>
                   <Link to="tshirtproduct"><button className="tshirt-button"><b>Buy</b></button></Link>
                </div>

                <div>
                    <img className="cellphone-image" height="164px" width="170px" src="Images/Cell phone.jpg"/>
                   <Link to="/cellphoneproduct"><button className="cellphone-button"><b>Buy</b></button></Link>
                </div>

                <div>
                    <img className="laptop-image" height="164px" width="170px" src="Images/Laptop.jpg"/>
                   <Link to="/laptopproduct"><button className="laptop-button"><b>Buy</b></button></Link>
                </div>
                </div>

        )
    }
}
export default UserDashboard;