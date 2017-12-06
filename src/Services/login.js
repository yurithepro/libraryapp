import {domain, init} from './Services';


function checkForUsername(username) {
	var url = domain + '/usernameExists' + '?username=' + username;
	return fetch(url, init).then(function(response) {
		debugger;
		if(response._bodyText === 'true') return;
		else throw 'no such account';
	});
}

//way to go... you managed to publically distribute what is supposed to be a secret key...

//welcome to promise hell..

/*
function login(username, password) {
	return server.get('/search?q=Cat');
	
}
*/



//get must be used because post fails for some reason...
//react native bug....
//this shouldn't be an issue as nowadays get requests hardly get rerun
//~hueristic solution

function login(username, password) {
	var url = domain + '/login' + '?username=' + username + '&password=' + password;
	return checkForUsername(username).then(function() {return fetch(url, init).then(function(result) {
		if(result.status === 400)
			throw 'incorrect password';
		return JSON.parse(result._bodyText)});
	});
}


export default login;
