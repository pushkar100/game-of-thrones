import React from 'react';
import Books from './Books';
import Description from './Description';
import Characters from './Characters';
import Houses from './Houses';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="column col-3 left">
						<img alt="GOT logo" className="img-responsive" src="/got.png" />
						<Description />
					</div>
					<div className="column col-9 right">
						<h1>Discover Game of Thrones!</h1>
						<h2>Learn the details of various books, characters, and houses</h2>
						{/* Books */}
						<Books />
						{/* Characters */}
						<Characters />
						{/* Houses */}
						<Houses />
					</div>
				</div>
			</div>
		);
	}
}

export default App;