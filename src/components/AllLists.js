import React from 'react';
import Books from './Books';
import Characters from './Characters';
import Houses from './Houses';

const AllLists = () => {
	return (
		<React.Fragment>
			<Books />
			<Characters />
			<Houses />
		</React.Fragment>
	);
}

export default AllLists;