import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home } from './pages/Home';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
        </Switch>
      </AnimatePresence>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
