<h3>HTML5 Audio Player</h3>
<p>Minimal UI for the HTML5 audio player.</p>
<img src="media/audio_player.png">
<p>Easy to use. Just download the resources and include the audio player as a partial if you want to in rails or any other project as: </p>
```ruby
<%=render :partial=>"audio_player"%>
```

<p>Just change the source for the audio file in the audio tag on the page</p>
```html
<audio controls preload="auto" hidden id="audio-file" >
          <source src="media/water.mp3" type="audio/mpeg">
          <source src="media/water.ogg" type="audio/ogg">
</audio>
```



