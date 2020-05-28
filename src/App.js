import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import CategoriaId from "./components/CategoriaId";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home" component={Home} />
          <Route path="/categoria/:id" component={CategoriaId} />
      </Switch>
    </Router>
  );
}

export default App;
