/* called to validate song request form */
function submitSongRequest(){
	$('#songSubmitFailed').hide();
	$('#songSubmitSuccess').hide();
	
	var artist = $('#submitArtist').val();
	var song = $('#submitSong').val();
	var album = $('#submitAlbum').val();
	var name = $('#submitName').val();
	var email = $('#submitEmail').val();			
	
	if (artist == "") {	
		$('#songSubmitFailed').html("Please specify Artist.");
		$('#songSubmitFailed').show();
	} else if (song == "") {	
		$('#songSubmitFailed').html("Please specify Song.");
		$('#songSubmitFailed').show();
	} else if (name == "") {	
		$('#songSubmitFailed').html("Please fill in your Name.");
		$('#songSubmitFailed').show();
	} else if (!validateEmail(email)) {	
		$('#songSubmitFailed').html("Please enter a valid Email");
		$('#songSubmitFailed').show();
	} else {
		$('#songSubmitSuccess').show();
	}
}

/* checks if an email is valid */
function validateEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9])+$/;
	return regex.test(email);
}
