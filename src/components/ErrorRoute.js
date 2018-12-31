import React from 'react';
import { Link } from 'react-router-dom';

const ErrorRoute = () => {
	return (
		<div className="empty error-route col-12">
			<p className="empty-title h5">Oops!...</p>
			<p className="empty-subtitle">Seems like this route does not exist</p>
			<p className="empty-subtitle">
				<Link to="/">Visit Home Page</Link>
			</p>
		</div>
	);
}

export default ErrorRoute;