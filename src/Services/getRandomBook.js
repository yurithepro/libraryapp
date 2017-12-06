import { domain, init } from './Services';
//avoiding promise hell

function getRandomBook() {
	
	var url = domain + '/getRandomBook';
	return fetch(url, init).then(function(result) {return result._bodyText;});

}

export default getRandomBook;