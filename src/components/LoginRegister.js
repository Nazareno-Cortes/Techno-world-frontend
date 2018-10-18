import React, { Component } from 'react';
import './LoginRegister.css';

class LoginRegister extends Component{
  render(){
    return(
      <div class="app">
               <div class="loginregister">
                   <div class="loginregister-box">
                       <h1>Register</h1>
                       <form>
                          <div class="firstname">
                               <label>First Name</label>
                               <input type="text" id="firstname" name="firstname" placeholder="First name"/>
                           </div>
                           <div class="surname">
                               <label>Surname</label>
                               <input type="text" id="surname" name="surname" placeholder="Surname"/>
                           </div>
                           <div class ="address">
                                <label>Address</label>
                                <input type="text" id="address" name="address" placeholder="Address"/>
                           </div>
                           <div class ="telephone">
                                <label>Telephone</label>
                                <input type="text" id="telephone" name="telephone" placeholder="Telephone"/>
                           </div>
                           <div class ="email">
                                <label>Email</label>
                                <input type="text" id="email" name="email" placeholder="Email"/>
                           </div>
                           <input type="submit" value="Submit"/>
                       </form>

                   </div>
               </div>
           </div>
    );
  }
}

export default LoginRegister;
