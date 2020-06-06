import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './views/Landing/index'
import Categoria from './views/Categoria/index'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/categoria/:id" component={Categoria} exact></Route>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/" component={Landing} exact></Route>
      </Switch>
    </Router>

  );
}

export default App;
