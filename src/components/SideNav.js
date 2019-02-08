import React, { Component } from 'react';
import logo from '../img/TSCRALogo.png'

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
          <div className="side-nav-img"><img src={logo} alt="logo"/></div>
          <div className="user-info">
            USER: Lisa Walker
            <br/>
            ROLE: Executive Admin
            <div className="user-info-btn">
              <button>LOG OUT</button>
              <button>MANAGE USERS</button>
            </div>
          </div>
          <div className="dash-bar">

          </div>
      </div>
    );
  }
}

export default SideNav;