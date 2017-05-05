import React, { Component } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Blog from './components/Blog.js';



class App extends Component {

  render() {

    return (
      <div>
        <Header />
        <Blog />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
