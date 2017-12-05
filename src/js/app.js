import React from 'react';
import Layout from './components/Layout';
import {StyleRoot} from 'radium';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleRoot><Layout/></StyleRoot>
      </Provider>
    );
  }
}

export default App;
