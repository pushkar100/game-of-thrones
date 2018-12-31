export default (bookDetails = {}, action) => {
	switch(action.type) {
		case 'FETCH_BOOK_DETAILS': 
			return action.payload;
		default:
			return bookDetails;
	}
};
