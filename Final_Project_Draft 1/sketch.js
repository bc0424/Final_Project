//variables for images


var value = 0;

function preload() {
 bananabody = loadImage("photo/Banana Shape.png");
 applebody = loadImage("photo/Apple Shape.png");
 pearbody = loadImage("photo/Pear Shape.png");
 hourglassbody = loadImage("photo/Hourglass Shape.png");
 cheesecake = loadImage("photo/Cheesecake.png");
 salad = loadImage("photo/Salad.png");
 acai = loadImage("photo/Acai Bowl.png");
 cheeto = loadImage("photo/Cheeto Puff.png");
 parfait = loadImage("photo/Parfait.png");
 milkshake = loadImage("photo/Milkshake.png");
 yoga = loadImage("photo/Yoga.jpg");
 tv = loadImage("photo/TV.jpg");
 gym = loadImage("photo/Gym.jpg");
 eat = loadImage("photo/Eat.jpg");
 party = loadImage("photo/Party Clothes.jpg");
 gymclothes = loadImage("photo/Gym Clothes.jpg");
 lazy = loadImage("photo/Lazy Clothes.jpg");
}


function setup() {
 createCanvas(2000, 1000);

}

function draw() {
 background(255);
 ClickingChange();

}


function mousePressed() {

 //If any of the body types are clicked it will switch to the food option page
 if ((mouseX >= 100) && (mouseX <= 300) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  value = 1;
 } else if ((mouseX >= 500) && (mouseX <= 800) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  value = 1;
 } else if ((mouseX >= 1000) && (mouseX <= 1400) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  value = 1;
 } else if ((mouseX >= 1500) && (mouseX <= 2000) && (value === 0) && (mouseY >= 250) && (mouseY <= 700)) {
  value = 1;
 }
 //If any of the food choices are picked it will switch to the activity page 
 //For the cheesecake
 if ((mouseX >= 205) && (mouseX <= 385) && (value == 1) && (mouseY >= 223) && (mouseY <= 403)) {
  value = 2;
  //For the salad
 } else if ((mouseX >= 710) && (mouseX <= 937) && (value == 1) && (mouseY >= 242) && (mouseY <= 447)) {
  value = 2;
 } else if ((mouseX >= 1400) && (mouseX <= 1572) && (value == 1) && (mouseY >= 167) && (mouseY <= 414)) {
  value = 2;
 } else if ((mouseX >= 448) && (mouseX <= 666) && (value == 1) && (mouseY >= 508) && (mouseY <= 808)) {
  value = 2;
 } else if ((mouseX >= 1023) && (mouseX <= 1243) && (value == 1) && (mouseY >= 435) && (mouseY <= 675)) {
   value = 2;
  } else if ((mouseX >= 1600) && (mouseX <=1702) && (value == 1 ) && (mouseY >= 452) && (mouseY <= 732)) {
   value = 2;
  }
  
  //If any of the activity choices are picked it will switch to fashion page
  if ((mouseX >= 490) && (mouseX <= 890) && (value == 2) && (mouseY >= 133) && (mouseY <= 480)){
   value = 3;
  } else if ((mouseX >= 1120) && (mouseX <= 1570) && (value == 2) && (mouseY >= 450) && (mouseY <= 750)){
   value = 3;
  } else if ((mouseX >= 1144) && (mouseX <= 1544) && (value == 2) && (mouseY >= 557) && (mouseY <= 907)){
   value = 3;
  } else if ((mouseX >= 500) && (mouseX <= 900) && (value == 2) && (mouseY >= 592) && (mouseY <= 918)){
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
  image(lazy, lazyx - (lazy.width / 2), lazyy - (lazy.height / 2), 400, 350);


 }



 function activityChoice() {
  yogax = 800;
  yogay = 400;
  gymx = 1500;
  gymy = 400;
  eatx = 1000;
  eaty = 900;
  tvx = 1650;
  tvy = 900;
  textSize(50);
  text("What type of activities do you think this body type does?");
  image(yoga, yogax - (yoga.width / 2), yogay - (yoga.height / 2), 400, 350);
  image(gym, gymx - (gym.width / 2), gymy - (gym.height / 2), 450, 300);
  image(eat, eatx - (eat.width / 2), eaty - (eat.height / 2), 400, 350);
  image(tv, tvx - (tv.width / 2), tvy - (tv.height / 2), 400, 350)
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
  milkshakey = 600;
  textSize(50);
  text("What types of food do you think this body type eats?", 300, 100);
  image(cheesecake, cheesecakex - (cheesecake.width / 2), cheesecakey - (cheesecake.height / 2), 350, 300);
  image(salad, saladx - (salad.width / 2), salady - (salad.height / 2), 350, 300);
  image(acai, acaix - (acai.width / 2), acaiy - (acai.height / 2), 300, 250);
  image(cheeto, cheetox - (cheeto.width / 2), cheetoy - (cheeto.height / 2), 250, 300);
  image(parfait, parfaitx - (parfait.width / 2), parfaity - (parfait.height / 2), 250, 250);
  image(milkshake, milkshakex - (milkshake.width / 2), milkshakey - (milkshake.height / 2), 350, 300);
 }

 function bodyChoice() {
  bananax = 200;
  bananay = 500;
  applex = 700;
  appley = 500;
  pearx = 1200;
  peary = 500;
  hourglassx = 1700;
  hourglassy = 500;
  textSize(50);
  text("Pick a Body Type!", 800, 100);
  image(bananabody, bananax - (bananabody.width / 2), bananay - (bananabody.height / 2));
  image(applebody, applex - (applebody.width / 2), appley - (applebody.height / 2));
  image(pearbody, pearx - (pearbody.width / 2), peary - (pearbody.height / 2));
  image(hourglassbody, hourglassx - (hourglassbody.width / 2), hourglassy - (hourglassbody.height / 2));

 }