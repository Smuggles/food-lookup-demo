import React, { Component } from 'react';


class Blog extends Component {

  render() {

    return (
      <div className="container">
        <div className="row Blog-Row">
          <div className="Blog-Title">
            {this.props.title}
          </div>
          <div className="Blog-Text">
            {this.props.text}
          </div>
          <div className="Blog-Info">
            {this.props.info}
          </div>
        </div>
      </div>
        );
      }
    }

export default Blog;
