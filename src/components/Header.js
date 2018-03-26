import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import logo from '../static/img/logo.jpg';
import '../static/css/style.css';
import '../static/css/w3.css';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="m-0">
          <div className="row mb-5">
            <div className="header-bg w3-bar m-0 pb-2">
              <span className="name p-5">
                <img className="img-thumbnail logo mr-3 ml-2 bg-warning" src={logo} alt="logo" />
              Yummy Recipes
              </span>
            </div>
            <nav className="w3-bar navbar-expand-lg navbar-dark bg-dark ">
              {/* <Notifications /> */}

              <div className="w3-bar m-0 text-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="container collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to="#/">
                        <span className="glyphicon glyphicon-dashboard text-white"> Dashboard</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        id="profile"
                        data-toggle="dropdown"
                        href="#/"
                      >
                        <span className="glyphicon glyphicon-list-alt text-white"> Category</span>
                      </a>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="profile">
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            // onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-plus"> Add Category</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            // onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-folder-open"> View Report</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        id="profile"
                        data-toggle="dropdown"
                        href="#/"
                      >
                        <span className="glyphicon glyphicon-list-alt text-white"> Recipes</span>
                      </a>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="profile">
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            // onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-plus"> New Recipes</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            // onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-folder-open"> View Report</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navbar-nav navbar-right ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        id="profile"
                        data-toggle="dropdown"
                        href="#/"
                      >
                        <span className="glyphicon glyphicon-user text-white"> User</span>
                      </a>
                      <ul className="dropdown-menu" role="menu" aria-labelledby="profile">
                        <li className="nav-item">
                          <a
                            className="nav-link text-info"
                            // onClick={User.logoutUser.bind(this)}
                            href="#/"
                          >
                            <span className="glyphicon glyphicon-log-out"> Logout</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;

