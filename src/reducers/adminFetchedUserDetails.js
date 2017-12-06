import types from '../actions/actionTypes';

const initialState = {};

function adminFetchedUserDetails(state = initialState, action) {
	switch(action.type) {
		case types.updateAdminFetchedUserDetails:
			return Object.assign({}, action.data);
			break;
		default: 
			return state;
			break;
	}
}

export default adminFetchedUserDetails;