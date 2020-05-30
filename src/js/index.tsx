import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import {Registration} from './screens';
import {Authorization} from './screens';
import {store} from './store';
import { ScoreScreen } from "./screens/Score";

require("../sass/style.scss");

const Root = () => {
  return <Provider store={store}>
      <Router>
        <Route exact path="/" component={Authorization}/>
        <Route path='/reg' component={Registration} />
        <Route path='/score' component={ScoreScreen} />
      </Router>
  </Provider>
}


ReactDOM.render(<Root />, document.getElementById("root"));
