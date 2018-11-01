import React, { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
