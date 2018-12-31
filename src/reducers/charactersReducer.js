export default (characters = [], action) => {
	switch(action.type) {
		case 'FETCH_CHARACTERS': 
			return [action.payload.pageData, ...action.payload.data];
		default:
			return characters;
	}
}
