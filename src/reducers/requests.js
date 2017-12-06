import types from '../actions/actionTypes';

const initialState = [];

function requests(state = initialState, action) {
	switch(action.type) {
		case types.updateRequests:
			return Object.assign([], action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default requests;