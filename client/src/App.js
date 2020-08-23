import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import OtherPage from './containers/OtherPage/OtherPage';
import Fib from './containers/Fib/Fib';
import MainNavigation from './components/Navigation/MainNavigation'

const App = () => {
	return (
		<Router>
            <Fragment>
                <MainNavigation/>
                    <Switch>
                        <Route path="/" exact><Fib /></Route>
                        <Route path="/authors" exact><OtherPage/></Route>
                        <Redirect to="/"/>
                    </Switch>
            </Fragment>
        </Router>
	);
};

export default App;
