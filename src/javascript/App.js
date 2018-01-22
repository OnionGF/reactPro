import React, { Component } from 'react';

import Footer from './components/footer/footer.js'
class App extends Component {
  render() {
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}

export default App;
