import React from 'react';
import { Router, Route } from 'dva/router';
import Index from './components/index';
import Size from './components/size';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/size" component={Size} />
    </Router>
  );
}

export default RouterConfig;
