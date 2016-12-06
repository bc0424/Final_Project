//THE FIRST BODY CHOICE PAGE
function bodyChoice() {




 //Image of body shape enlarges when the mouse hovers on top of the image
 this.display = function() {
   //WRITING THE HEADER FOR THIS PAGE
 textSize(80);
 textFont(font);
 text("Pick a Body Type!", 800, 100);
 //VARIABLES FOR IMAGES
 bananax = 200;
 bananay = 500;
 applex = 700;
 appley = 500;
 pearx = 1200;
 peary = 540;
 hourglassx = 1700;
 hourglassy = 500;
 sizex = 0;
 sizey = 0;
 sizeax = 0;
 sizeay = 0;
 sizepx = 0;
 sizepy = 0;
 sizehx = 0;
 sizehy = 0;
  //BANANA BODY(FIRST BODY SHAPE ON THE LEFT)
  if ((mouseX >= 100) && (mouseX <= 300) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
   sizex += 1200;
   sizey += 900;
   bananax -= 100;
   bananay -= 50;
   image(bananabody, bananax - (bananabody.width / 2), bananay - (bananabody.height / 2), sizex, sizey);
  } else {
   image(bananabody, bananax - (bananabody.width / 2), bananay - (bananabody.height / 2), sizex, sizey);
  }


  //APPLE BODY(SECOND BODY SHAPE)
  if ((mouseX >= 500) && (mouseX <= 800) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
   sizeax += 1200;
   sizeay += 900;
   applex -= 100;
   appley -= 50;
   image(applebody, applex - (applebody.width / 2), appley - (applebody.height / 2), sizeax, sizeay);
  } else {
   image(applebody, applex - (applebody.width / 2), appley - (applebody.height / 2), sizeax, sizeay);
  }


  //PEAR BODY (THIRD BODY SHAPE)
  if ((mouseX >= 1000) && (mouseX <= 1400) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
   sizepx += 1200;
   sizepy += 900;
   pearx -= 100;
   peary -= 50;
   image(pearbody, pearx - (pearbody.width / 2), peary - (pearbody.height / 2), sizepx, sizepy);
  } else {
   image(pearbody, pearx - (pearbody.width / 2), peary - (pearbody.height / 2), sizepx, sizepy);
  }

  //HOURGLASS BODY (FOURTH BODY SHAPE)

  if ((mouseX >= 1500) && (mouseX <= 2000) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
   sizehx += 1200;
   sizehy += 900;
   hourglassx -= 100;
   hourglassy -= 50;
   image(hourglassbody, hourglassx - (hourglassbody.width / 2), hourglassy - (hourglassbody.height / 2), sizehx, sizehy);
  } else {
   image(hourglassbody, hourglassx - (hourglassbody.width / 2), hourglassy - (hourglassbody.height / 2), sizehx, sizehy);

  }


 }
}