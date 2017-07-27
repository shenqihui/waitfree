import React from 'react';
import { Router, Route } from 'dva/router';
import Index from './components/index';
import Size from './components/size';
import Info from './components/info';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/size" component={Size} />
      <Route path="/info" component={Info} />
    </Router>
  );
}

export default RouterConfig;
