import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../actions';
import Loader from './Loader';

class Houses extends React.Component {
	getHouses = () => {
		return this.props.houses.filter((b, i) => i !== 0) || [];
	}

	getPageData = () => {
		if(this.props.houses[0] instanceof Array)
			return this.props.houses[0];
		else
			return [ 1, false, true ];
	}

	fetchNextPage = () => {
		this.props.fetchHouses(this.getPageData()[0] + 1);
	}

	fetchPrevPage = () => {
		this.props.fetchHouses(this.getPageData()[0] - 1);
	}

	componentDidMount() {
		this.props.fetchHouses(this.getPageData()[0]);
	}

	renderHouses() {
		if(!this.props.houses.length) {
			return <Loader topic="Houses" operation="fetch data" />;
		}

		return this.getHouses().map(({ url, name, region, words }) => (
			<div key={url} className="house col-3">
				<div>
					<h4>{name}</h4>
					<p className="region">{region || 'unknown'}</p>
					<p className="words">{words || 'unknown'}</p>
				</div>
			</div>
		));
	}

	renderPrev() {
		return this.getPageData()[1] 
		? <button className="btn" onClick={this.fetchPrevPage}>Prev</button>
		: '';		
	}

	renderNext() {
		return this.getPageData()[2] 
		? <button className="btn" onClick={this.fetchNextPage}>Next</button>
		: '';
	}

	render() {
		return (
			<div className="accordion">
				<input hidden id="accordion-3" name="accordion-checkbox" type="checkbox" />
					<label className="accordion-header" htmlFor="accordion-3">
						<i className="icon icon-arrow-right mr-1"></i>
					</label>
				<h3>
					<label className="accordion-header" htmlFor="accordion-3">Houses</label>
				</h3>
				<div className="accordion-body">
					<div>
						<div className="columns">
							{this.renderHouses()}
						</div>
						<div className="columns pagination">
							<div className="col-12 center">
								{this.renderPrev()}
								{this.renderNext()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		houses: state.houses
	}
}

export default connect(mapStateToProps, { fetchHouses })(Houses);