import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import Features from '../../containers/Features';
import NoMatch from '../../containers/NoMatch';
import Admin from '../../containers/Admin';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
    <Switch>
	    <Route exact path="/" component={Home}/>
	    <Route path="/features" component={Features} history={history}/>
	    <Route path="/admin" component={Admin}/>
	    <Route component={NoMatch}/>
  	</Switch>
    );
  }
}

export default Routes;