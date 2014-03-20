/* Player control scripts */		
var volume = 50;
var prevVolume = 0;
var isPlaying = false;

$(function() {
	$('#volumeSlider').slider({range: "min", value: 50, min: 0, max: 100,
		slide: function( event, ui ){
			volume = $('#volumeSlider').slider("option", "value");
			changeVolumeGraphic();
		},
		
		change: function(event, ui) {
			changeVolumeGraphic();
		}
	});
});

function togglePlayPause(){		
	$('#soundbars').toggle();
	$('#soundbarsStatic').toggle();
	$('#playButton').toggle();
	$('#pauseButton').toggle();
}

function volumeClick(){
	if(volume == 0){
		volume = prevVolume;
		prevVolume = 0;
	}else{
		prevVolume = volume;
		volume = 0;
	}
	
	//set slider to current volume, and update graphic
	$('#volumeSlider').slider("option", "value", volume);
}

function changeVolumeGraphic(){
	if(volume == 0){
		$('#speakerMute').show();
		$('#speakerLow').hide();
		$('#speakerHigh').hide();
	}else if(volume > 50){
		$('#speakerHigh').show();
		$('#speakerMute').hide();
		$('#speakerLow').hide();
	}else{
		$('#speakerLow').show();
		$('#speakerMute').hide();
		$('#speakerHigh').hide();			
	}
}