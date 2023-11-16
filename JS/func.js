let track = document.getElementsByClassName("audio");
let play = document.getElementsByClassName("play_btn")
console.log(track)
let play_pause_btn = document.querySelector('#play_pause_btn');
let slider = document.querySelector('#slider');
let forward_btn = document.querySelector('#forward_btn');
let backward_btn = document.querySelector('#backward_btn');

let current_duration = document.querySelector('#current_duration');
let total_duration = document.querySelector('#total_duration');

let is_song_played = false;
let track_status = false;
let index_no = 0;

let track_img = document.querySelector("#track_img");
let track_name = document.querySelector("#track_name");
let track_artist = document.querySelector("#track_artist");

for (let index = 0; index < play.length; index++) {
    // for (let index of play) {
        console.log(play[index]);
        play[index].addEventListener('click', function() {
        console.log("click");
	// s_m_player.style.transform = 'translateY(0px)';

		if (index != index_no) {
			track_status = false;
		}

		index_no = index;

		track[index].currentTime = 0;

		if (track_status == false) {
			play_song();
		} else {
			pause_song();
		}

	})
}

// play.forEach((play, index) => {
//     // console.log(index);
// 	;
// });

function pause_song() {
	track[index_no].pause();
	track_status = false;
	clearInterval(update_second);
	// wave_animation.style.opacity = '0';
	play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function update_second() {

	let position = 0;

	// update slider position
	if (!isNaN(track[index_no].duration)) {
		position = track[index_no].currentTime * (100 / track[index_no].duration);
		slider.value = position;
	}

	let durationMinutes = Math.floor(track[index_no].duration / 60);
	let durationSeconds = Math.floor(track[index_no].duration - durationMinutes * 60);
	total_duration.textContent = durationMinutes + ":" + durationSeconds;

	// Calculate the time left and the total duration
	let curr_minutes = Math.floor(track[index_no].currentTime / 60);
	let curr_seconds = Math.floor(track[index_no].currentTime - curr_minutes * 60);

	// Add a zero to the single digit time values
	if (curr_seconds < 10) {
		curr_seconds = "0" + curr_seconds;
	}

	if (durationSeconds < 10) {
		durationSeconds = "0" + durationSeconds;
	}

	// Display the updated duration
	current_duration.textContent = curr_minutes + ":" + curr_seconds;

	// function will run when the track is over
	if (track[index_no].ended) {
		clearInterval(update_second);
		wave_animation.style.opacity = '0';
		play_pause_btn.innerHTML = '<i class="fa fa-play text-5xl" aria-hidden="true"></i>';
	}
}

play_pause_btn.addEventListener('click', function() {
	if (track_status == false) {
		track[index_no].play();
		track_status = true;
		// wave_animation.style.opacity = '1';
		this.innerHTML = '<i class="fa fa-pause text-5xl" aria-hidden="true"></i>';
	} else {
		track[index_no].pause();
		track_status = false;
		// wave_animation.style.opacity = '0';
		this.innerHTML = '<i class="fa fa-play text-5xl" aria-hidden="true"></i>';
	}
});

function change_duration() {
	slider_position = track[index_no].duration * (slider.value / 100);
	track[index_no].currentTime = slider_position;
}

/*forward btn (next)*/
forward_btn.addEventListener('click', function() {
	index_no = index_no + 1;
	if (index_no == All_song.length) {
		index_no = 0;
	}

	track[index_no].currentTime = 0;
	play_song();
});

/*backward btn (previous)*/
backward_btn.addEventListener('click', function() {

	if (index_no == 0) {
		index_no = All_song.length-1;
	} else {
		index_no = index_no -1;
	}

	track[index_no].currentTime = 0;

	play_song();
});


/*play function*/
function play_song() {
	track[index_no].play();

	if (is_song_played == true) {
		document.querySelector(".active_song").pause();
		document.querySelector(".active_song").classList.remove("active_song");
	} else {
		is_song_played = true;
	}

	track[index_no].classList.add("active_song");

	song_status = true;
	setInterval(update_second, 1000);
	// wave_animation.style.opacity = '1';
	// p_m_player.style.transform = 'translateY(0%)';

	track_img.src = `${All_song[index_no].artist.picture}`;

	track_name.innerHTML = All_song[index_no].title;
	track_artist.innerHTML = All_song[index_no].artist.name;

	// current_track_name.innerHTML = All_song[index_no].name;
	// current_singer_name.innerHTML = All_song[index_no].singer;
	play_pause_btn.innerHTML = '<i class="fa fa-pause text-5xl" aria-hidden="true"></i>';
}