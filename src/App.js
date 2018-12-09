import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 
import LandingPage from './containers/LandingPage/LandingPage'; 
import InputPage from './containers/InputPage/InputPage';
import BuildCloze from './containers/BuildCloze/BuildCloze';
import ConfirmCloze from './containers/ConfirmCloze/ConfirmCloze'; 

import './App.css';

class App extends Component {
  render() {
    return (
      < Provider store={ store } > 
      < BrowserRouter >
        < Switch >
            < Route exact path="/" component={ LandingPage } />         
             < Route exact path="/input-text" component={ InputPage } />       
             < Route exact path="/build-cloze" component={ BuildCloze } />
             < Route exact path="/confirm-cloze" component={ ConfirmCloze } />
        </Switch> 
      </BrowserRouter>   
      </Provider>
    );
  }
}

export default App;
