import React from 'react';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/SignIn' component={SignIn} />
            <Route path='/Welcome' component={Welcome} />
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
