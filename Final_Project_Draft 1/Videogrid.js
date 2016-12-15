function Videogrid() {

 //Create a display function that will play the text and videos automatically based on a counter
 this.display = function() {
  soundcount += 1;
  counter += 1;
  background(0);
  if (counter < 100) {
   textSize(70);
   textFont(mont_font);
   fill(255);
   text('IF WE LOOK CLOSELY..', 600, 475);


  }

  //Using if statements create a collage where videos show up one by one 
  //after a certain amount of time between each video
  if ((counter >= 100) && (counter <= 1850)) {
   image(cheetovid1, 0, 0, 350, 225);
  }
  if ((counter >= 200) && (counter <= 1850)) {
   image(chocovid, 350, 0, 350, 225);
  }
  if ((counter >= 300) && (counter <= 1850)) {
   image(sodavid, 700, 0, 350, 225);
  }
  if ((counter >= 400) && (counter <= 1850)) {
   image(sushivid, 1050, 0, 350, 225);
  }
  if ((counter >= 500) && (counter <= 1850)) {
   image(saladvid, 1400, 0, 350, 225);
  }
  if ((counter >= 600) && (counter <= 1850)) {
   image(parfaitvid, 1750, 0, 350, 225);
  }

  if ((counter >= 850) && (counter <= 1850)) {
   image(cookvid, 0, 225, 350, 225);
  }
  if ((counter >= 1000) && (counter <= 1850)) {
   image(gymvid, 0, 450, 350, 225);
  }
  if ((counter >= 1100) && (counter <= 1850)) {
   image(yogavid, 0, 675, 350, 225);
  }
  if ((counter >= 1200) && (counter <= 1850)) {
   image(bingevid, 1550, 225, 350, 225);
  }
  if ((counter >= 1300) && (counter <= 1850)) {
   image(spinvid, 1550, 450, 350, 225);
  }
  if ((counter >= 1400) && (counter <= 1850)) {
   image(eatvid, 1550, 675, 350, 225);
  }
  //Using if statements create text that changes automatically based on the counter above
  if ((counter >= 100) && (counter <= 399)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("WHETHER ITS JUNK FOOD..", 500, 475);
  }

  if ((counter >= 400) && (counter <= 600)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("OR HEALTHY FOOD..", 600, 475);
  }
  if ((counter >= 601) && (counter <= 700)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("WE ALL EAT...", 400, 475);
  }

  if ((counter >= 701) && (counter <= 800)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("WE ALL EAT...THE SAME THINGS", 400, 475);
  }
  if ((counter >= 801) && (counter <= 1000)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("WHETHER WE WORKOUT DAILY...", 450, 475);
  }
  if ((counter >= 1001) && (counter <= 1150)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("OR FOCUS ON THE PLEASURES", 500, 475);
  }
  if ((counter >= 1001) && (counter <= 1150)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("OF EATING...", 800, 575);
  }

  if ((counter >= 1151) && (counter <= 1300)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("SOME BODY TYPES", 600, 475);
  }

  if ((counter >= 1151) && (counter <= 1300)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("ARE ACQUIRED", 650, 575);
  }
  if ((counter >= 1151) && (counter <= 1300)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("THROUGH HARD WORK", 500, 675);
  }
  if ((counter >= 1301) && (counter <= 1450)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("OTHERS ARE GENETIC", 525, 475);
  }
  if ((counter >= 1451) && (counter <= 1650)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("BUT MOST IMPORTANTLY", 510, 475);
  }
  if ((counter >= 1651) && (counter <= 1800)) {
   fill(255);
   textSize(120);
   textFont(mont_font);
   text("EVERYONE", 625, 475);
  }
  if ((counter >= 1651) && (counter <= 1800)) {
   fill(255);
   textSize(90);
   textFont(mont_font);
   text("IS BEAUTIFUL ", 650, 675);
  }
  if (counter >= 1800) {
   beautyvid.play();
   image(beautyvid, 300, 200, 1300, 700);
  }
  if ((counter >= 2100) && (counter <= 3650)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("YOU ARE BEAUTIFUL.", 575, 100);
  }
  if ((counter >= 3650) && (counter <= 5300)) {
   fill(255);
   textSize(70);
   textFont(mont_font);
   text("EMBRACE IT WITH CONFIDENCE.", 400, 100);
  }
  if (counter > 5300) {
   guitar.stop();

  }
 }
}