function setup() {

 cheetovid = createVideo('final_videos/cheeto.mp4');
 cheetovid.play();
 cheetovid.hide();

 chocovid = createVideo('final_videos/chocolate.mp4');
}

function draw() {

 var s = millis();
 text('Current second: \n' + s, 0, 0);
 duration = millis(cheetovid.duration());

 console.log(duration);
 console.log(s);


//if the time counter is the same as the duration of the video, 
//then the next video will play
 if (s == duration) {
  image(chocovid, 0, 0, width, height);
  chocovid.play();
  chocovid.hide();
 } else {
  image(cheetovid, 0, 0, width, height);

 }

}