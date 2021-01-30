
import React from 'react';
import swal from 'sweetalert';
import './CellphoneProduct.css';
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
               <img className="cellphone-product" src="Images/Cell phone.jpg" height="300px" width="408px"/>
                  <div id="cellphone-product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="cellphone-product-info">
                  POCO M2 (Slate Blue, 64 GB) <br/> (6 GB RAM)<br/>
                      <b>Cost:₹9,999</b>
                  </div>
            </div>
        )
    }
}
export default TshirtProduct;