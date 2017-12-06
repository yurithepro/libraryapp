import { domain, init } from './Services';

function fetchBook(isbn) {
	var url = domain + '/fetchBook' + '?isbn=' + isbn;
	return fetch(url, init).then(function(result) { debugger; return JSON.parse(result._bodyText);});
}

export default fetchBook;