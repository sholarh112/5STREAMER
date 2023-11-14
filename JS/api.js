const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://deezerdevs-deezer.p.rapidapi.com/search?q=accept');
xhr.setRequestHeader('X-RapidAPI-Key', '3a1507fae1msh9dbbf1a0fd93828p1e9b38jsn0eb57b1fc7b1');
xhr.setRequestHeader('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');

xhr.send(data);