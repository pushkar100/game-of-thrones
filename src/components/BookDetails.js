import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBookDetails } from '../actions';
import Loader from './Loader';
import './BookDetails.css';

class BookDetails extends React.Component {
	componentDidMount() {
		this.props.fetchBookDetails(this.props.match.params.id);
	}

	renderButtons(arr) {
		if(arr && arr.length) {
			return arr.map((a, i) => {
				return (
					<Link key={a} to={`/characters/${a.split('/').pop()}`}>
						<button className="btn">{a.split('/').pop()}</button>
					</Link>
				);
			});
		}
	}

	render() {
		const details = this.props.bookDetails;
		if(!details.name) {
			return <Loader topic="Book" operation="fetch book" />;
		}

		return (
			<div className="book-details">
				<h3 className="name">{details.name}</h3>
				<h4 className="sub-header">Information related to the book</h4>
				<table className="table">
				  <tbody>
				    <tr>
				      <td className="bold">Authors</td>
				      <td>{details.authors && details.authors.join(', ')}</td>
				    </tr>
				    <tr>
				      <td className="bold">Country</td>
				      <td>{details.country}</td>
				    </tr>
				    <tr>
				      <td className="bold">ISBN</td>
				      <td>{details.isbn}</td>
				    </tr>
				    <tr>
				      <td className="bold">Media Type</td>
				      <td>{details.mediaType}</td>
				    </tr>
				    <tr>
				      <td className="bold">Number of Pages</td>
				      <td>{details.numberOfPages}</td>
				    </tr>
				    <tr>
				      <td className="bold">Publisher</td>
				      <td>{details.publisher}</td>
				    </tr>
				    <tr>
				      <td className="bold">Released</td>
				      <td>{new Date(details.released).toLocaleString()}</td>
				    </tr>
				    <tr>
				      <td className="bold">Main Characters</td>
				      <td>{this.renderButtons(details.povCharacters)}</td>
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
		bookDetails: state.bookDetails
	}
}

export default connect(mapStateToProps, { fetchBookDetails })(BookDetails);