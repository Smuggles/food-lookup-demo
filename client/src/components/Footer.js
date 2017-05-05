import React, { Component } from 'react';


class Footer extends Component {

  render() {

    return (
      <footer className="footer-2 text-center-xs bg--white">
    <div className="container">
      {/*end row*/}
      <div className="row">
        <div className="col-md-6">
          <div className="footer">
            © Copyright Laura Theme. All Rights Reserved
            <div className="credits">
              {/*
                        All the links in the footer should remain intact.
                        You can delete the links only if you purchased the pro version.
                        Licensing information: https://bootstrapmade.com/license/
                        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Laura
                    */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade.com</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <ul className="social-list">
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-vimeo" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*end row*/}
    </div>
  </footer>

    );
  }
}

export default Footer;
