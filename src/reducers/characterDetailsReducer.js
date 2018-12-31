export default (characterDetails = {}, action) => {
	switch(action.type) {
		case 'FETCH_CHARACTER_DETAILS': 
			return action.payload;
		default:
			return characterDetails;
	}
};
