import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Description from './Description';
import HeaderAndSub from './HeaderAndSub';
import AllLists from './AllLists';
import BookDetails from './BookDetails';
import CharacterDetails from './CharacterDetails';
import HouseDetails from './HouseDetails';
import ErrorRoute from './ErrorRoute';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<div className="columns">
						<div className="column col-3 left">
							<Link to="/">
								<img alt="GOT logo" className="img-responsive" src="/got.png" />
							</Link>
							<Description />
						</div>
						<div className="column col-9 right">
							<HeaderAndSub />
							<Switch>
								<Route path="/" component={AllLists} exact />
								<Route path="/books/:id" component={BookDetails} exact />
								<Route path="/characters/:id" component={CharacterDetails} exact />
								<Route path="/houses/:id" component={HouseDetails} exact />
								<Route component={ErrorRoute} exact />
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;