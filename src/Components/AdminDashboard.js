import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminDashboard.css';

class AdminDashboard extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <ul className="admin-dashboard">
                <li className="admin-dashboard-item2">LOGGED IN AS ADMIN</li>
                <li className="admin-dashboard-item"><NavLink to="/admindashboard" className="admin-dashboard-link">ADMIN DASHBOARD</NavLink>
                <ul className="admin-dashboard-list">
                    <li className="admin-dashboard-subitem"><NavLink to="#" className="admin-dashboard-sublink">My Account</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="/view" className="admin-dashboard-sublink">My Profile</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="#" className="admin-dashboard-sublink">Settings</NavLink></li>
                    <li className="admin-dashboard-subitem"><NavLink to="/welcome" className="admin-dashboard-sublink">Logout</NavLink></li>
                </ul>
                </li>
            </ul>
        )
    }
}
export default AdminDashboard;