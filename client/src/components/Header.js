import React, { Component } from 'react';


class Header extends Component {

  render() {

    return (
      <div className="header">
          <div className="bg-color">
            <header id="main-header">
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#lauraMenu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Jordans Blog</a>
                </div>
                <div className="collapse navbar-collapse" id="lauraMenu">
                  <ul className="nav navbar-nav navbar-right navbar-border">
                    <li className="active"><a href="#main-header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li> <a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            </header>
            <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12 wow fadeIn delay-05s">
                  <div className="banner-text">
                    <h2>Jordan Cruz</h2>
                    <p>Full-Stack Developer</p>
                  </div>
                  <div className="overlay-detail text-center">
                      <a href="#about"><i className="fa fa-angle-down"></i></a>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
    );
  }
}

export default Header;
