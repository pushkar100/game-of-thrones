import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHouseDetails } from '../actions';
import Loader from './Loader';
import './HouseDetails.css';

class HouseDetails extends React.Component {
	componentDidMount() {
		this.props.fetchHouseDetails(this.props.match.params.id);
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
		const details = this.props.houseDetails;
		if(!details.name) {
			return <Loader topic="House" operation="fetch house" />;
		}

		return (
			<div className="house-details">
				<h3 className="name">{details.name || 'unknown'}</h3>
				<h4 className="sub-header">House information</h4>
				<table className="table">
				  <tbody>
				    <tr>
				      <td className="bold">Coat of arms</td>
				      <td>{details.coatOfArms}</td>
				    </tr>
				    <tr>
				      <td className="bold">Region</td>
				      <td>{details.region}</td>
				    </tr>
				    <tr>
				      <td className="bold">Overlord</td>
				      <td>{details.overlord && this.renderButtons([details.overlord], 'houses')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Seats</td>
				      <td>{details.seats && details.seats.join(', ')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Died Out</td>
				      <td>{details.diedOut || 'No'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Current Lord</td>
				      <td>{details.currentLord || 'Unknown'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Heir</td>
				      <td>{details.heir || 'Unknown'}</td>
				    </tr>
				    <tr>
				      <td className="bold">Founded / Founder</td>
				      <td>{details.founded} / {details.founder && this.renderButtons([details.founder], 'characters')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Ancestral Weapons</td>
				      <td>{details.ancestralWeapons && details.ancestralWeapons.join(', ')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Titles</td>
				      <td>{details.titles && details.titles.join(', ')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Sworn Members</td>
				      <td>{details.overlord && this.renderButtons(details.swornMembers, 'characters')}</td>
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
		houseDetails: state.houseDetails
	}
}

export default connect(mapStateToProps, { fetchHouseDetails })(HouseDetails);