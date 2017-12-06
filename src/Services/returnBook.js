import { domain, init } from './Services';

function returnBook(username, isbn) {
	var url = domain + '/returnBook' + '?username=' + encodeURI(username) + '&isbn=' + encodeURI(isbn); 
	debugger;
	return fetch(url, init);
}

export default returnBook;