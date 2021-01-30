import React from 'react';
import swal from 'sweetalert';
import './LaptopProduct.css';
class LaptopProduct extends React.Component{

    PlaceOrder=()=>{
        swal('Success','Your order has been placed','success')
    }

    CartOrder=()=>{
        swal('Success','Your order has been added to cart','success')
    }

    render(){
        return(
            <div>
              <img className="laptop-product" src="Images/Laptop.jpg" height="300px" width="408px"/>
                  <div id="laptop-product-button">
                      <button className="add-button" onClick={this.CartOrder}><b>ADD TO CART</b></button>
                      <button className="buy-button" onClick={this.PlaceOrder}><b>BUY NOW</b></button>
                  </div>

                  <div className="laptop-product-info">
                  Lenovo Ideapad S145<br/> Core i3 7th Gen<br/>
                      <b>Cost:₹30,990</b>
                  </div>
            </div>
        )
    }
}
export default LaptopProduct;