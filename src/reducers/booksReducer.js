export default (books = [], action) => {
	switch(action.type) {
		case 'FETCH_BOOKS': 
			return [action.payload.pageData, ...action.payload.data];
		default:
			return books;
	}
};
