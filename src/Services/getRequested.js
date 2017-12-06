import { domain, init } from './Services';

function getRequested(id) {
	var url = domain + '/getRequested' + '?username=' + id;
	return fetch(url, init).then(function(response) {debugger; return JSON.parse(response._bodyText);});
	
}

export default getRequested;