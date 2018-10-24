import React, {Component} from 'react';
import './Reset.css';
import './Homepage.css';
import Product from './products/Product'

class Homepage extends Component {
render() {
return (
  <div class="app">
        <div class="wrapper">
            <div class="header">
              <h1>Techno World</h1>
            </div>
            <div class="menu">
               <ul>
                 <li><span1>Home</span1></li>
                 <li><span2>Products</span2></li>
                 <li><span3>Contact us</span3></li>
                 <li><span4>Login</span4></li>
               </ul>
            </div>
            <div class="content">
            <Product show={true}/>
            <button onClick={this.chageTitle}>Add to cart </button>
            </div>

            <div class="contact">
            <h2>Contacts</h2>
            </div>
             <div class="data">
              <p>Attention schedule:
                 Monday to Friday from 10 a.m to 6 p.m / Saturday from 10 a.m to 1 p.m <br></br>

                <br></br>Telephone: 04545434 <br></br>

                <br></br>Whatsapp: +5491554788 <br></br>

                <br></br>Location: Rosario, Santa Fé, Argentina
              </p>
          </div>
        </div>
  </div>
);
}
}

export default Homepage;
