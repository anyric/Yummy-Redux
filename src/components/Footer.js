import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <footer className="py-4 w3-blue-grey bg-dark footer">
          <div className="container">
            <p className="m-0 text-center text-white small">
              Designed with love by anyric; &copy; {(new Date().getFullYear())}
              , All Rights Reserved!
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
