import React from 'react';

const Loader = ({ topic, operation }) => {
	return (
		<div className="empty col-12">
			<p className="empty-title h5">Loading {topic}...</p>
			<p className="empty-subtitle">Please give us a few seconds to {operation}</p>
		</div>
	);
}

export default Loader;