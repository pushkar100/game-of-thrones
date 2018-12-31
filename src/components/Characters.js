import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../actions';
import Loader from './Loader';

class Characters extends React.Component {
	getCharacters = () => {
		return this.props.characters.filter((b, i) => i !== 0) || [];
	}

	getPageData = () => {
		if(this.props.characters[0] instanceof Array)
			return this.props.characters[0];
		else
			return [ 1, false, true ];
	}

	fetchNextPage = () => {
		this.props.fetchCharacters(this.getPageData()[0] + 1);
	}

	fetchPrevPage = () => {
		this.props.fetchCharacters(this.getPageData()[0] - 1);
	}

	componentDidMount() {
		this.props.fetchCharacters(this.getPageData()[0]);
	}

	renderCharacters() {
		if(!this.props.characters.length) {
			return <Loader topic="Characters" operation="fetch data" />;
		}

		return this.getCharacters().map(({ url, name, aliases, gender, culture, playedBy }) => (
			<div key={url} className="character col-3">
				<div>
					<Link to={`/characters/${url.split('/').pop()}`}>
						<h4>{name || aliases[0] || 'Unknown'}</h4>
						<p className="gender">{gender}</p>
						<p className="culture">{culture}</p>
						<p className="playedby">{playedBy || 'Unknown'}</p>
					</Link>
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
				<input hidden id="accordion-2" name="accordion-checkbox" type="checkbox" /> 
					<label className="accordion-header" htmlFor="accordion-2">
						<i className="icon icon-arrow-right mr-1"></i>
					</label>
				<h3>
					<label className="accordion-header" htmlFor="accordion-2">Characters</label>
				</h3>
				<div className="accordion-body">
					<div>
						<div className="columns">
							{this.renderCharacters()}
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
		characters: state.characters
	}
}

export default connect(mapStateToProps, { fetchCharacters })(Characters);