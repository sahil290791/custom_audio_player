jQuery.noConflict();
    jQuery( document ).ready(function( $ ){
//color generator

   var cover = $('#cover-art');
   var headphone = $('.fa-headphones');
   var headphone_colors = ['#004B44','#005C6A','#456125','#666E1C','#4F4F4F','#5D3464'];
   var controls_color = ['#004B44','#005C6A','#456125','#666E1C','#4F4F4F','#5D3464'];
   var colors = ['#009688','#00B8D4','#8BC34A','#CDDC39','#9E9E9E','#BA68C8'];
   var bar_colors = ['#FFC107','#FFC107','#FFC107','#00B8D4','#00B8D4','#FFC107']
   var index = Math.floor(Math.random() * colors.length);
   cover.css('background',colors[index]);
   headphone.css('color',headphone_colors[index]);
   $('#player .text-center > i.fa').css('color',controls_color[index]);
   $('.progress-bar').css('background',bar_colors[index]);
//audio player
   var player= document.getElementById('audio-file');
   //PLAY AND PAUSE
$('#play').click(function(){
  var state = player.readyState;
  if(player.paused === true){
    player.play();
    $(this).find('i').removeClass('fa-play-circle-o').addClass('fa-pause');
  }
  else if(player.paused === false){
    player.pause();
    $(this).find('i').removeClass('fa-pause').addClass('fa-play-circle-o');
  }
});
//REWIND AND FORWARD
$('#forward').click(function(){
    var time = player.currentTime;
     player.currentTime=time+10;
});
$('#rewind').click(function(){
    var time = player.currentTime;
    if (time >10){
    player.currentTime=time - 10;
  }
  else{
    $('#play').click();
  }
});

//SEEKING
$('.progress').click(function(e){
  var audio_file = document.getElementById('audio-file');
  var x =e.pageX;
  var x1 = $(this).offset().left;
  var actual_position = parseFloat(x-x1);
  var width = $('.progress').width();

  if(actual_position < width){
    $('.progress-bar').css('width',actual_position+'px');
      var new_time = parseFloat(actual_position / width);
       audio_file.currentTime = audio_file.duration * new_time;
       audio_file.play();
      $('#play').find('i').removeClass('fa-play-circle-o').addClass('fa-pause');
  }
});

$('.progress').hover(function(e){
  var audio_file = document.getElementById('audio-file');
  var x =e.pageX;
  var x1 = $(this).offset().left;
  var actual_position = parseFloat(x-x1);
  var width = $('.progress').width();
  if(actual_position < width){
      var new_time = parseFloat(actual_position / width);
       var time = audio_file.duration * new_time;
       $('.progress').attr('title',timeFormat(time));
  }
});

//ON END
$('#audio-file').on('ended',function(){
  $('#play').find('i').removeClass('fa-pause').addClass('fa-play-circle-o');
});

//PROGRESS BAR
$('#audio-file').on('timeupdate',function(){
    var total_time = this.duration;
    var current_time = this.currentTime;
    var completed = parseFloat(current_time/total_time);
    var total_width= $('.progress').width();
    bar_width = parseFloat(total_width* completed);
    $('.progress-bar').css('width',bar_width+'px');

    //TIME DISPLAY
        $('#duration').html(timeFormat(total_time));
        $('#current_time').html(timeFormat(current_time));
});

function timeFormat(timeValue){
	var timeStamp;
	var time = parseFloat((timeValue/60).toFixed(2));
	var time1= parseInt(time);
	var diff = parseFloat((time-time1).toFixed(2));
	var secs = (60*diff).toFixed(0);
	if (secs < 10){
	    timeStamp = ''+time1+':0'+secs+'';
	}
	else{
		timeStamp = ''+time1+':'+secs+'';
	}
	return timeStamp;
}

});

