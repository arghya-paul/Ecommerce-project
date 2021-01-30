import React from 'react';
import swal from 'sweetalert';
import './WatchProduct.css';
class WatchProduct extends React.Component{

    PlaceOrder=()=>{
        swal('Success','Your order has been placed','success')
    }

    CartOrder=()=>{
        swal('Success','Your order has been added to cart','success')
    }

    render(){
        return(
            <div>
                  <img className="watch-product" src="Images/Watch_case.jpg" height="300px" width="408px"/>
                  <div id="watch-product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="watch-product-info">
                  LCS-8188 BLUE DIAL WATCH<br/>
                      <b>Cost:₹331</b>
                  </div>
            </div>
        )
    }
}
export default WatchProduct;