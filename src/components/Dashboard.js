import React, { Component } from 'react';

import '../static/css/style.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid dborder div-align py-5">
        <h3 className="text-center text-primary">
          Yummy Recipes Dashboard
        </h3>
        <div className="container-fluid text-info">
          <center>Welcome! to the dashboard for your owesome yummy recipes. <br />
          To get started, select an item from the menu list.
          </center>
        </div>
      </div>
    );
  }
}

export default Dashboard;
