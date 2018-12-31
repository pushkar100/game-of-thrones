export default (houseDetails = {}, action) => {
	switch(action.type) {
		case 'FETCH_HOUSE_DETAILS': 
			return action.payload;
		default:
			return houseDetails;
	}
};
