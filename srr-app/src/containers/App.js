import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Listing from '../components/Business/BusinessListing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Listing />
      </div>
    );
  }
}

export default App;
