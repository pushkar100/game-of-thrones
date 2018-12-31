import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacterDetails } from '../actions';
import Loader from './Loader';
import './CharacterDetails.css';

class CharacterDetails extends React.Component {
	componentDidMount() {
		this.props.fetchCharacterDetails(this.props.match.params.id);
	}

	renderButtons(arr, type) {
		if(arr && arr.length) {
			return arr.map((a, i) => {
				return (
					<Link key={a} to={`/${type}/${a.split('/').pop()}`}>
						<button className="btn">{a.split('/').pop()}</button>
					</Link>
				);
			});
		} 
	}

	render() {
		const details = this.props.characterDetails;
		if(!details.gender) {
			return <Loader topic="Character" operation="fetch character" />;
		}

		return (
			<div className="char-details">
				<h3 className="name">{details.name || '(Unknown)'}</h3>
				<h4 className="sub-header">Character information</h4>
				<table className="table">
				  <tbody>
				    <tr>
				      <td className="bold">Aliases</td>
				      <td>{(details.aliases && details.aliases.join(', ')) || 'None'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Born</td>
				      <td>{details.born || 'Unknown'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Gender</td>
				      <td>{details.gender}</td>
				    </tr>
				    <tr>
				      <td className="bold">Father / Mother / Spouse</td>
				      <td>{details.father && this.renderButtons([details.father.trim()], 'characters')} 
				      		/ {details.mother && this.renderButtons([details.mother.trim()], 'characters')} 
				      		/ {details.spouse && this.renderButtons([details.spouse.trim()], 'characters')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Played By</td>
				      <td>{(details.playedBy && details.playedBy.join(', ')) || 'Unknown'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Titles</td>
				      <td>{(details.titles && details.titles.join(', ')) || 'None'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Allegiances</td>
				      <td>{this.renderButtons(details.allegiances, 'houses')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Books</td>
				      <td>{this.renderButtons(details.books, 'books')}</td>
				    </tr>
				  </tbody>
				</table>
				<div className="columns pagination">
					<div className="col-12 center">
						<Link to="/"><button className="btn">Home Page</button></Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		characterDetails: state.characterDetails
	}
}

export default connect(mapStateToProps, { fetchCharacterDetails })(CharacterDetails);