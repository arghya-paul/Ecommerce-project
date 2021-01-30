import React from 'react';
import swal from 'sweetalert';
import './CameraProduct.css'
class CameraProduct extends React.Component{

    PlaceOrder=(e)=>{
        swal('Success','Your order has been placed','success')
    }

    CartOrder=(e)=>{
        swal('Success','Your order has been added to cart','success')
    }

    render(){
        return(
            <div>
                  <img className="camera-product" src="/Images/Camera.jpg" height="300px" width="408px"/>
                  <div id="product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="product-info">
                      Nikon Camera<br/>
                      <b>Cost:₹44,699</b>
                  </div>
            </div>
        )
    }
}
export default CameraProduct;