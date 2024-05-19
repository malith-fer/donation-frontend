import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <div>Home</div>} />
        <Route path="/login" component={() => <div>Login</div>} />
      </Switch>
    </Router>
  );
}

export default App;