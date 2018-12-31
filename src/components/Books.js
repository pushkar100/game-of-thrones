import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../actions';
import Loader from './Loader';

class Books extends React.Component {
	getBooks = () => {
		return this.props.books.filter((b, i) => i !== 0) || [];
	}

	getPageData = () => {
		if(this.props.books[0] instanceof Array)
			return this.props.books[0];
		else
			return [ 1, false, true ];
	}

	fetchNextPage = () => {
		this.props.fetchBooks(this.getPageData()[0] + 1);
	}

	fetchPrevPage = () => {
		this.props.fetchBooks(this.getPageData()[0] - 1);
	}

	componentDidMount() {
		this.props.fetchBooks(this.getPageData()[0]);
	}

	renderBooks() {
		if(!this.props.books.length) {
			return <Loader topic="Books" operation="fetch data" />;
		}
		
		console.log(this.getBooks());
		
		return this.getBooks().map(({ url, name, authors, released, numberOfPages }) => (
			<div key={url || 0} className="book col-3">
				<div>
					<Link to={`/books/${url.split('/').pop()}`}>
						<h4>{name}</h4>
						<p className="author">{authors && authors[0]}</p>
						<p className="date">{new Date(released).toLocaleDateString()}</p>
						<p className="pages">{numberOfPages} pages</p>
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
				<input defaultChecked hidden id="accordion-1" name="accordion-checkbox" type="checkbox"/> 
					<label className="accordion-header" htmlFor="accordion-1">
						<i className="icon icon-arrow-right mr-1"></i>
					</label>
				<h3>
					<label className="accordion-header" htmlFor="accordion-1">Books</label>
				</h3>
				<div className="accordion-body">
					<div>
						<div className="columns">
							{this.renderBooks()}
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
		books: state.books
	}
}

export default connect(mapStateToProps, { fetchBooks })(Books);