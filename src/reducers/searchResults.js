import types from '../actions/actionTypes';

const initialState = [];

function searchResults(state = initialState, action) {
	switch(action.type) {
		case types.updateSearchResults:
			return Object.assign([], action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default searchResults;