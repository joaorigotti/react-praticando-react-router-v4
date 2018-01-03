import React from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './home';
import About from './about';
import Products from './products';

const App = () => (
  <HashRouter>
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  </HashRouter>
);

export default App;
