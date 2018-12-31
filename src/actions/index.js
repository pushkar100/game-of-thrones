import iceAndFire from '../apis/iceAndFire';

export const fetchBooks = (page = 1) => {
	return async (dispatch) => {
		let response;
		if(_memoizeFetchBooks[page]) {
			response = _memoizeFetchBooks[page];
		} else {
			response = await iceAndFire.get('/books', {
				params: { page }
			});
			_memoizeFetchBooks[page] = response;
		}

		dispatch({
			type: 'FETCH_BOOKS',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ? 
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchBooks = {};

export const fetchCharacters = (page = 1) => {
	return async (dispatch) => {
		let response;
		if(_memoizeFetchCharacters[page]) {
			response = _memoizeFetchCharacters[page];
		} else {
			response = await iceAndFire.get('/characters', {
				params: { page }
			});
			_memoizeFetchCharacters[page] = response;
		}

		dispatch({
			type: 'FETCH_CHARACTERS',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ? 
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchCharacters = {};

export const fetchHouses = (page = 1) => {
	return async (dispatch) => {
		let response;
		if(_memoizeFetchHouses[page]) {
			response = _memoizeFetchHouses[page];
		} else {
			response = await iceAndFire.get('/houses', {
				params: { page }
			});
			_memoizeFetchHouses[page] = response;
		}

		dispatch({
			type: 'FETCH_HOUSES',
			payload: {
				data: response.data,
				pageData: [ 
					page, // Page #
					/rel="prev"/.test(response.headers.link), // Prev page ?
					/rel="next"/.test(response.headers.link) // Next page ?
				]
			}
		});
	};
}
const _memoizeFetchHouses = {};

export const fetchBookDetails = book => {
	return async (dispatch) => {
		let response;
		if(_memoizeBookDetails[book]) {
			response = _memoizeBookDetails[book];
		} else {
			response = await iceAndFire.get(`/books/${book}`);
			_memoizeBookDetails[book] = response;
		}

		dispatch({
			type: 'FETCH_BOOK_DETAILS',
			payload: response.data
		});
	};
}
const _memoizeBookDetails = {};

export const fetchCharacterDetails = character => {
	return async (dispatch) => {
		let response;
		if(_memoizeCharacterDetails[character]) {
			response = _memoizeCharacterDetails[character];
		} else {
			response = await iceAndFire.get(`/characters/${character}`);
			_memoizeCharacterDetails[character] = response;
		}

		dispatch({
			type: 'FETCH_CHARACTER_DETAILS',
			payload: response.data
		});
	};
}
const _memoizeCharacterDetails = {};

export const fetchHouseDetails = house => {
	return async (dispatch) => {
		let response;
		if(_memoizeHouseDetails[house]) {
			response = _memoizeHouseDetails[house];
		} else {
			response = await iceAndFire.get(`/houses/${house}`);
			_memoizeHouseDetails[house] = response;
		}

		dispatch({
			type: 'FETCH_HOUSE_DETAILS',
			payload: response.data
		});
	};
}
const _memoizeHouseDetails = {};