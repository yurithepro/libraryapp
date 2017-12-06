import types from '../actions/actionTypes';

//when setting expiry save as date

const initialState = {
	username: '',
	password: '',
	loggedIn: false
};



function credentials(state = initialState, action) {
	switch(action.type) {
		case types.updateCredentials:
			return Object.assign({}, state, action.payload);
			break;
		default: 
			return state;
			break;
	}
}

export default credentials;