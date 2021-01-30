import React from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
// import img1 from './Images/Camera.jpg';

class Home extends React.Component {

    render(){
        return(
    <React.Fragment>
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                
                    {/* <li className="nav-item"><NavLink className="navbar-brand" to="/">home</NavLink></li>    */}
                    <li className="nav-item"><NavLink className="navbar-brand" to="/welcome">Welcome</NavLink></li>
                    <li classname="nav-item"><NavLink className="navbar-brand" to="/signup">Sign Up</NavLink></li>
                    <li className="nav-item"><NavLink className="navbar-brand" to="/view">View</NavLink></li>
                    <li className="nav-item"><NavLink  className="navbar-brand" to="/edit">Edit</NavLink></li>
                    <li className="nav-item"><NavLink  className="navbar-brand" to="/login">Login</NavLink>
                       <ul>
                        <li className="nav-item1">
                            <NavLink className="nav-subitem" to="/adminlogin">Admin Login</NavLink>
                            <NavLink className="nav-subitem" to="/userlogin">User Login</NavLink>
                        </li>
                       </ul>
                    </li>
                </ul>
            </nav>

            {/* <ul className="admin-dashboard">
             <li className="admin-dashboard-item"><NavLink to="/admindashboard" className="admin-dashboard-link">Admin Dashboard</NavLink></li>
        </ul> */}
        </div><br/><br/>

    <input placeholder="Search.." className="search-bar"/>
    <button type="button" className="search-btn">Search</button><br/><br/>
    

    <div>
    {/* <img src={img1}/> */}
    {/* <img className="hero_image" src="/Images/Hero_image.jpg"/> */}
    <img src="/Images/Tech-world.jpg" className="logo-image" height="150px" width="150px"/>
    </div>
    </React.Fragment>  
        )
    } 
}
export default Home;
