import React, {Component} from 'react';
import './Reset.css';
import './Homepage.css';

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
                       <li>Login</li>
                     </ul>
                  </div>
                <div class="contact">
                    <p>Attention schedule:
                       Mon to Vier from 10 a.m. to 6 p.m. / Sat from 10 a.m. to 1 p.m.<br></br>

                      <br></br>Telephone: 04545434 <br></br>

                      <br></br> Whatsapp: +5491554788 <br></br>

                      <br></br>Location: Rosario, Santafe
                      </p>
                </div>
              </div>
        </div>
    );
}
}

export default Homepage;
