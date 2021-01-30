
import React from 'react';
import swal from 'sweetalert';
import './TshirtProduct.css';
class TshirtProduct extends React.Component{

    PlaceOrder=()=>{
        swal('Success','Your order has been placed','success')
    }

    CartOrder=()=>{
        swal('Success','Your order has been added to cart','success')
    }

    render(){
        return(
            <div>
                 <img className="tshirt-product" src="Images/T-shirt.jpg" height="300px" width="408px"/>
                  <div id="tshirt-product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="tshirt-product-info">
                  Men Round Neck <br/>Gray T-Shirt<br/>
                      <b>Cost:₹304</b>
                  </div>
            </div>
        )
    }
}
export default TshirtProduct;