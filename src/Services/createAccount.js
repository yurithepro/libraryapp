import { domain, init } from './Services';


function checkUsername(username) {
	if(RegExp("^[a-zA-Z0-9]{7,17}$").test(username))
		return;
	else 
		throw 'invalid username';
}

function checkPassword(password) {
	if(RegExp("^[a-zA-Z0-9]{7,17}$").test(password))
		return;
	else 
		throw 'invalid password';
}

function checkEmail(email) {
	if(RegExp("^[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+(\.{1}[a-z]*)*$").test(email))
		return;
	else 
		throw 'invalid email';
}

function checkNumber(number) {
	if(RegExp("^[0-9]{10}$").test(number))
		return;
	else 
		throw 'invalid number';

}

function checkExists(username) {
	var url = domain + '/usernameExists' + '?username=' + username;
	return fetch(url, init).then(function(response) {
		if(response._bodyText === 'false')
			return;
		else
			throw 'username already exists';
	});
}

//good thing this is not an app SECURITY competition........

function createAccount(username, password, email, number) {
	var url = domain + '/createAccount' + '?username=' + username + '&password=' + password + '&email=' + email + '&number' + number;

	try {
		checkUsername(username);
		checkPassword(password);
		checkEmail(email);
		checkNumber(number);
	} catch(err) {
		debugger;
		return new Promise((resolve, reject) => reject(err));
	}
	debugger;

	return checkExists(username).then(function(result) {debugger; return fetch(url, init)});
}

export default createAccount;