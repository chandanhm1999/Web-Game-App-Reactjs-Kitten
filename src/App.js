import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import HomePage from './Component/HomePage';
import "./Global.css"
import Navbar from './Component/navbar';
import { Footer } from './Component/footer/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <HomePage />
        <Footer />
      </Provider>
    );
  }
}

export default App;
