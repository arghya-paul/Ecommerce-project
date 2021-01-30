import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';
class Welcome extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img className="hero_image" src="/Images/Hero_image.jpg" />
                   <marquee className="marquee-tag"> WELCOME TO TECH WORLD WEBSITE</marquee>
                </div>
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

            </React.Fragment>
        )
    }
}

export default Welcome;