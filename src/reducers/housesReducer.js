export default (houses = [], action) => {
	switch(action.type) {
		case 'FETCH_HOUSES': 
			return [action.payload.pageData, ...action.payload.data];
		default:
			return houses;
	}
}
