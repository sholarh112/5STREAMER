let album_container = document.querySelector("#album_container");
let track_container = document.querySelector("#track_container");
let playlist_container = document.querySelector("#playlist_container");
let artist_container = document.querySelector("#artist_container");

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		var api = JSON.parse(this.responseText);

		let album = api.albums;
		for (i=1; i<api.albums.data.length; i+=2) {
			album_container.innerHTML += `<div
			class="card pb-2 max-w-[16rem] relative rounded-2xl duration-300 shadow-lg hover:shadow-2xl tranform transition-all hover:-translate-y-2"
		  ><a href="${album.data[i].link}">
			<img
			  src="${album.data[i].cover}"
			  alt="Cover"
			  class="mt-8 rounded-2xl"
			/>
			<div class="mt-5">
			  <h4><b class="text-3xl uppercase text-clip w-2 overflow-auto">${album.data[i].title}</b></h4>
			  <p>${album.data[i].artist.name}</p>
			</div>
		  </a>
		  </div>`
		}
	}
});

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		var api = JSON.parse(this.responseText);

		let track = api.tracks;
		for (i=0; i<api.tracks.data.length; i++){
		  track_container.innerHTML += `
		  <li
		  class="list bg-[#09090941] mb-5 py-5 grid grid-cols-6 place-items-center"
		  >
		  <span>${track.data[i].position}</span>
				<img src="${track.data[i].artist.picture}" alt="" class="h-24 w-24" />
				<div>
				<audio src="${track.data[i].preview}" id="track" class="audio">a</audio>
				  <h4 class="mb-3 text-2xl capitalize">${track.data[i].title}</h4>
				  <p class="capitalize">${track.data[i].artist.name}</p>
				</div>
				<span>${time_convert(`${track.data[i].duration}`)}</span>
				<button class="ml-28 cursor-pointer" id="play_btn"><i class="fa fa-play text-4xl play_btn" arial-hidden="true"></i></button>
				<span class="ml-28 cursor-pointer"><i class="fa fa-heart text-4xl"></i></span>
			  </li>
		  `
		}
	}
});

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		var api = JSON.parse(this.responseText);

		let playlist = api.playlists;
		for (i=0; i<api.playlists.data.length; i++){
		  playlist_container.innerHTML += `
		  <li class="mb-8">
		  <a href="${playlist.data[i].link}" class="relative"
			><img
			  src="${playlist.data[i].picture}"
			  alt=""
			  class="h-44 w-full rounded-lg"
			/>
			<span class="absolute right-6 bottom-1">Play</span></a
		  >
		</li>
		  `
		}
	}
});

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		var api = JSON.parse(this.responseText);

		let artist = api.artists;
		for (i=0; i<api.artists.data.length; i++){
		  artist_container.innerHTML += `
		  <div
		  class="card pb-2 min-w-[12rem] relative rounded-2xl shadow-lg hover:shadow-2xl tranform transition-all duration-300"
		>
		  <a href="${artist.data[i].link}">
			<img
			  src="${artist.data[i].picture}"
			  alt="Cover"
			  class="w-48 h-48 mt-8 rounded-2xl"
			/>
			<span
			  class="absolute bottom-3 left-4 font-extrabold text-3xl"
			  >${artist.data[i].name}</span
			>
		  </a>
		</div>
		  `
		}
	}
});

function time_convert(num){
	let hours = Math.floor(num/60);
	let minutes = num%60;
	return hours + ":" + minutes;
}

xhr.open('GET', '/JS/api.json', true);

xhr.send();