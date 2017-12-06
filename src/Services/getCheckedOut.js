import { domain, init } from './Services';

function getCheckedOut(id) {

	var url = domain + '/getCheckedOut' + '?username=' + id;
	debugger;
	return fetch(url, init).then(function(response) {debugger; return JSON.parse(response._bodyText);});
}

export default getCheckedOut;