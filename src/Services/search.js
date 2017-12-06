import { domain, init } from './Services';

function search(query) {
	var url = domain + '/search' + '?q=' + encodeURI(query); 
	debugger;
	return fetch(url, init).then(function(response) {debugger; return JSON.parse(response._bodyText);});
}

export default search;