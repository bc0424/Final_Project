//variables for images


var value = 0;

function preload() {
 party = loadImage("photo/Party Clothes.jpg");
 gymclothes = loadImage("photo/Gym Clothes.jpg");
 lazy = loadImage("photo/Lazy Clothes.jpg");
 yoga = loadImage("photo/Yoga.png");
 tv = loadImage("photo/TV.png");
 gym = loadImage("photo/Gym.png");
 eat = loadImage("photo/Eat.png");
 cheesecake = loadImage("photo/Cheesecake.png");
 salad = loadImage("photo/Salad.png");
 acai = loadImage("photo/Acai Bowl.png");
 cheeto = loadImage("photo/Cheeto Puff.png");
 parfait = loadImage("photo/Parfait.png");
 milkshake = loadImage("photo/Milkshake.png");
 bananabody = loadImage("photo/Banana Shape.png");
 applebody = loadImage("photo/Apple Shape.png");
 pearbody = loadImage("photo/Pear Shape.png");
 hourglassbody = loadImage("photo/Hourglass Shape.png");
 font = loadFont("fonts/NexaRustScriptL.otf");
}

function setup() {
 createCanvas(1900, 950);

}

function draw() {
 background(196, 188, 255);
 ClickingChange();

}

function ClickingChange() {
 if (value === 0){
 bodyChoice();
 }

 if (value == 1) {
  foodChoice();
 } 
 
 if (value == 2){
  activityChoice();
 } 
 
 if (value == 3){
  fashionChoice();
 } 
}

function mousePressed() {

 //If any of the body types are clicked it will switch to the food option page
 if ((mouseX >= 60) && (mouseX <= 360) && (mouseY >= 180) && (mouseY <= 880) && (value === 0)) {
  value = 1;
 } else if ((mouseX >= 550) && (mouseX <= 850) && (mouseY >= 180) && (mouseY <= 880) && (value === 0)) {
  value = 1;
 } else if ((mouseX >= 1050) && (mouseX <= 1350) && (mouseY >= 180) && (mouseY <= 880) && (value === 0)) {
  value = 1;
 } else if ((mouseX >= 1550) && (mouseX <= 1850) && (mouseY >= 180) && (mouseY <= 880) && (value === 0)) {
  value = 1;
 }

 //If any of the food choices are picked it will switch to the activity page 
//For the cheesecake
 if ((mouseX >= 60) && (mouseX <= 510) && (mouseY >= 170) && (mouseY <= 520) && (value === 1)) {
  value = 2;
  //For the salad
 } else if ((mouseX >= 630) && (mouseX <= 1030) && (mouseY >= 150) && (mouseY <= 500) && (value === 1)) {
  value = 2;
  //Parfait
 } else if ((mouseX >= 1350) && (mouseX <= 1650) && (mouseY >= 100) && (mouseY <= 480) && (value === 1)) {
  value = 2;
  //Cheetos
 } else if ((mouseX >= 350) && (mouseX <= 750) && (mouseY >= 500) && (mouseY <= 880) && (value === 1)) {
  value = 2;
  //Acai Bowl
 } else if ((mouseX >= 980) && (mouseX <= 1290) && (mouseY >= 400) && (mouseY <= 750) && (value === 1) ) {
  value = 2;
  //Milkshake
 } else if ((mouseX >= 1550) && (mouseX <= 1750) && (mouseY >= 450) && (mouseY <= 820) && (value === 1) ) {
  value = 2;
 } 

 //If any of the activity choices are picked it will switch to fashion page
 if ((mouseX >= 490) && (mouseX <= 890) && (value == 2) && (mouseY >= 133) && (mouseY <= 480)) {
  value = 3;
 } else if ((mouseX >= 1120) && (mouseX <= 1570) && (value == 2) && (mouseY >= 450) && (mouseY <= 750)) {
  value = 3;
 } else if ((mouseX >= 1144) && (mouseX <= 1544) && (value == 2) && (mouseY >= 557) && (mouseY <= 907)) {
  value = 3;
 } else if ((mouseX >= 500) && (mouseX <= 900) && (value == 2) && (mouseY >= 592) && (mouseY <= 918)) {
  value = 3;
 }
}



function fashionChoice() {
 gymcx = 400;
 gymcy = 600;
 partyx = 900;
 partyy = 600;
 lazyx = 1500;
 lazyy = 600;
 image(gymclothes, gymcx - (gymclothes.width / 2), gymcy - (gymclothes.height / 2), 400, 350);
 image(party, partyx - (party.width / 2), partyy - (party.height / 2), 400, 350);
 image(lazy, lazyx - (lazy.width / 2), lazy - (lazy.height / 2), 400, 350);
}


function activityChoice() {
 yogax = 800;
 yogay = 400;
 gymx = 1300;
 gymy = 350;
 eatx = 1000;
 eaty = 900;
 tvx = 1300;
 tvy = 700;
 sizeyx = 450;
 sizeyy = 400;
 sizegx = 750;
 sizegy = 400;
 sizeex = 500;
 sizeey = 350;
 sizetx = 550;
 sizety = 400;
 textSize(50);
 text("What type of activities do you think this body type does?", 800, 100);
 if ((mouseX >= 490) && (mouseX <= 890) && (value == 2) && (mouseY >= 133) && (mouseY <= 480)) {
  sizeyx += 100;
  sizeyy += 100;
  yogax -= 50;
  yogay -= 50;
  image(yoga, yogax - (yoga.width / 2), yogay - (yoga.height / 2), sizeyx, sizeyy);
 } else {
  image(yoga, yogax - (yoga.width / 2), yogay - (yoga.height / 2), sizeyx, sizeyy);
 }
 if ((mouseX >= 1120) && (mouseX <= 1570) && (value == 2) && (mouseY >= 450) && (mouseY <= 750)) {
  sizegx += 100;
  sizegy += 100;
  gymx -= 50;
  gymy -= 50;
  image(gym, gymx - (gym.width / 2), gymy - (gym.height / 2), sizegx, sizegy);
 } else {
  image(gym, gymx - (gym.width / 2), gymy - (gym.height / 2), sizegx, sizegy);
 }
 if ((mouseX >= 500) && (mouseX <= 900) && (value == 2) && (mouseY >= 592) && (mouseY <= 918)) {
  sizeex += 100;
  sizeey += 100;
  eatx -= 50;
  eaty -= 50;
  image(eat, eatx - (eat.width / 2), eaty - (eat.height / 2), sizeex, sizeey);
 } else {
  image(eat, eatx - (eat.width / 2), eaty - (eat.height / 2), sizeex, sizeey);
 }
 if ((mouseX >= 1144) && (mouseX <= 1544) && (value == 2) && (mouseY >= 557) && (mouseY <= 907)) {
  sizetx += 100;
  sizety += 100;
  tvx -= 50;
  tvy -= 50;
  image(tv, tvx - (tv.width / 2), tvy - (tv.height / 2), sizetx, sizety);
 } else {
  image(tv, tvx - (tv.width / 2), tvy - (tv.height / 2), sizetx, sizety);
 }
}

function foodChoice() {
 cheesecakex = 600;
 cheesecakey = 500;
 saladx = 1300;
 salady = 600;
 acaix = 1300;
 acaiy = 650;
 cheetox = 600;
 cheetoy = 750;
 parfaitx = 1600;
 parfaity = 350;
 milkshakex = 1650;
 milkshakey = 650;
 sizex = 350;
 sizey = 300;
 sizesx = 350;
 sizesy = 300;
 sizeax = 300;
 sizeay = 250;
 sizepx = 250;
 sizepy = 250;
 sizecx = 250;
 sizecy = 300;
 sizemx = 350;
 sizemy = 300;
 textSize(50);
 textFont(font);
 text("What types of food do you think this body type eats?", 300, 100);
 //enlarges cheesecake when hovered over
 if ((mouseX >= 205) && (mouseX <= 385) && (value == 1) && (mouseY >= 223) && (mouseY <= 403)) {
  sizex += 100;
  sizey += 100;
  cheesecakex -= 50;
  cheesecakey -= 50;
  image(cheesecake, cheesecakex - (cheesecake.width / 2), cheesecakey - (cheesecake.height / 2), sizex, sizey);
 } else {
  image(cheesecake, cheesecakex - (cheesecake.width / 2), cheesecakey - (cheesecake.height / 2), sizex, sizey);
 }

 //enlarges salad when hovered over
 if ((mouseX >= 710) && (mouseX <= 937) && (value == 1) && (mouseY >= 242) && (mouseY <= 447)) {
  sizesx += 100;
  sizesy += 100;
  saladx -= 50;
  salady -= 50;
  image(salad, saladx - (salad.width / 2), salady - (salad.height / 2), sizesx, sizesy);
 } else {
  image(salad, saladx - (salad.width / 2), salady - (salad.height / 2), sizesx, sizesy);
 }
 if ((mouseX >= 1023) && (mouseX <= 1243) && (value == 1) && (mouseY >= 435) && (mouseY <= 675)) {
  sizeax += 100;
  sizeay += 100;
  acaix -= 50;
  acaiy -= 50;
  image(acai, acaix - (acai.width / 2), acaiy - (acai.height / 2), sizeax, sizeay);
 } else {
  image(acai, acaix - (acai.width / 2), acaiy - (acai.height / 2), sizeax, sizeay);
 }
 if ((mouseX >= 1400) && (mouseX <= 1572) && (value == 1) && (mouseY >= 167) && (mouseY <= 414)) {
  sizepx += 100;
  sizepy += 100;
  parfaitx -= 25;
  parfaity -= 50;
  image(parfait, parfaitx - (parfait.width / 2), parfaity - (parfait.height / 2), sizepx, sizepy);
 } else {
  image(parfait, parfaitx - (parfait.width / 2), parfaity - (parfait.height / 2), sizepx, sizepy);
 }

 if ((mouseX >= 448) && (mouseX <= 666) && (value == 1) && (mouseY >= 508) && (mouseY <= 808)) {
  sizecx += 100;
  sizecy += 100;
  cheetox -= 50;
  cheetoy -= 50;
  image(cheeto, cheetox - (cheeto.width / 2), cheetoy - (cheeto.height / 2), sizecx, sizecy);
 } else {
  image(cheeto, cheetox - (cheeto.width / 2), cheetoy - (cheeto.height / 2), sizecx, sizecy);
 }

 if ((mouseX >= 1600) && (mouseX <= 1702) && (value == 1) && (mouseY >= 452) && (mouseY <= 732)) {
  sizemx += 100;
  sizemy += 100;
  milkshakex -= 50;
  milkshakey -= 50;
  image(milkshake, milkshakex - (milkshake.width / 2), milkshakey - (milkshake.height / 2), sizemx, sizemy);
 } else {
  image(milkshake, milkshakex - (milkshake.width / 2), milkshakey - (milkshake.height / 2), sizemx, sizemy);

 }
}

//THE FIRST BODY CHOICE PAGE
function bodyChoice() {
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
 //Writing the header for the first page
 textSize(80);
 textFont(font);
 text("Pick a Body Type!", 800, 100);

 //Image of body shape enlarges when the mouse hovers on top of the image
 if ((mouseX >= 100) && (mouseX <= 300) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  sizex += 1200;
  sizey += 900;
  bananax -= 100;
  bananay -= 50;
  image(bananabody, bananax - (bananabody.width / 2), bananay - (bananabody.height / 2), sizex, sizey);
 } else {
  image(bananabody, bananax - (bananabody.width / 2), bananay - (bananabody.height / 2), sizex, sizey);
 }

 if ((mouseX >= 500) && (mouseX <= 800) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  sizeax += 1200;
  sizeay += 900;
  applex -= 100;
  appley -= 50;
  image(applebody, applex - (applebody.width / 2), appley - (applebody.height / 2), sizeax, sizeay);
 } else {
  image(applebody, applex - (applebody.width / 2), appley - (applebody.height / 2), sizeax, sizeay);
 }
 if ((mouseX >= 1000) && (mouseX <= 1400) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  sizepx += 1200;
  sizepy += 900;
  pearx -= 100;
  peary -= 50;
  image(pearbody, pearx - (pearbody.width / 2), peary - (pearbody.height / 2), sizepx, sizepy);
 } else {
  image(pearbody, pearx - (pearbody.width / 2), peary - (pearbody.height / 2), sizepx, sizepy);
 }

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
