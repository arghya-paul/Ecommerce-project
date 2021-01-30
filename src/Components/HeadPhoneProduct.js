import React from 'react';
import swal from 'sweetalert';
import './HeadPhoneProduct.css';
class HeadPhoneProduct extends React.Component{

    PlaceOrder=()=>{
        swal('Success','Your order has been placed','success')
    }

    CartOrder=()=>{
        swal('Success','Your order has been added to cart','success')
    }

    render(){
        return(
            <div>
                  <img className="headphone-product" src="Images/Headphone.jpg" height="300px" width="408px"/>
                  <div id="headphone-product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="headphone-product-info">
                  MARVO HG8941 <br/>Gaming Headphone<br/>
                      <b>Cost:₹1,299</b>
                  </div>
            </div>
        )
    }
}
export default HeadPhoneProduct;