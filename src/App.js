import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home';

import ReactGA from 'react-ga';
const TRACKING_ID = "UA-196424021-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
