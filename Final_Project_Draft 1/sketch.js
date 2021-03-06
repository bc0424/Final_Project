//BEAUTY VIDEO WAS TAKEN FROM DOVE COMMERCIAL
//^LINK: https://www.youtube.com/watch?v=7DdM-4siaQw&t=151s

//value used to change the screen or display when mouse is pressed
var value = -1;
var count = 0;
var soundcheck = false;

//boolean variables for adding food to the basket
var chocolatewilladd = false;
var saladwilladd = false;
var sushiwilladd = false;
var parfaitwilladd = false;
var cheetowilladd = false;
var sodawilladd = false;
var foodwilladd = false;

//boolean variables for adding activities to the basket
var yogawilladd = false;
var gymwilladd = false;
var eatwilladd = false;
var tvwilladd = false;
//counter to check for food option numbers
var foodcounter = 0;
var activitycounter = 0;
var counter = 0;
var soundcount = 0;

function preload() {
 yoga = loadImage("photo/Yoga.png");
 tv = loadImage("photo/TV.png");
 gym = loadImage("photo/Gym.png");
 eat = loadImage("photo/Eat.png");
 chocolate = loadImage("photo/Chocolate.png");
 salad = loadImage("photo/Salad.png");
 sushi = loadImage("photo/Sushi.png");
 cheeto = loadImage("photo/Cheeto_Puff.png");
 parfait = loadImage("photo/Parfait.png");
 soda = loadImage("photo/Soda.png");
 bananabody = loadImage("photo/Banana_Shape.png");
 applebody = loadImage("photo/Apple_Shape.png");
 pearbody = loadImage("photo/Pear_Shape.png");
 hourglassbody = loadImage("photo/Hourglass_Shape.png");
 bag = loadImage("photo/basket.png");
 font = loadFont("fonts/NexaRustScriptL.otf");
 mont_font = loadFont('fonts/Montserrat-Bold.ttf');
 guitar = loadSound('sound/guitarr.mp3');
}

function setup() {
 createCanvas(1900, 950);
 //calling the classes for food, bodyshape, basket, activity, and video collage...
 lifebag1 = new lifeBag();
 bodychoice1 = new bodyChoice();
 foodchoice1 = new foodChoice();
 activitychoice1 = new activityChoice();
 videogrid1 = new Videogrid();
 //CALL ALL THE VIDEOS THAT WILL BE PLAYED IN THE COLLAGE AND PLAY THEM IN A LOOP SO THAT IT WILL NEVER PAUSE
 cheetovid1 = createVideo('video/cheeto_1.mp4');
 cheetovid1.loop();
 cheetovid1.hide();
 chocovid = createVideo('video/chocolate.mp4');
 chocovid.loop();
 chocovid.hide()
 saladvid = createVideo('video/salad.mp4');
 saladvid.loop();
 saladvid.hide();
 sushivid = createVideo('video/sushi.mp4');
 sushivid.loop();
 sushivid.hide();
 sodavid = createVideo('video/soda.mp4');
 sodavid.loop();
 sodavid.hide();
 parfaitvid = createVideo('video/parfait.mp4');
 parfaitvid.loop();
 parfaitvid.hide();
 cookvid = createVideo('video/Cook.mp4');
 cookvid.loop();
 cookvid.hide();
 gymvid = createVideo('video/Workout.mp4');
 gymvid.loop();
 gymvid.hide();
 yogavid = createVideo('video/Yoga.mp4');
 yogavid.loop();
 yogavid.hide();
 eatvid = createVideo('video/Eat.mp4');
 eatvid.loop();
 eatvid.hide();
 spinvid = createVideo('video/Spin.mp4');
 spinvid.loop();
 spinvid.hide();
 bingevid = createVideo('video/Binge.mp4');
 bingevid.loop();
 bingevid.hide();
 beautyvid = createVideo('video/Beauty.mp4');
 beautyvid.hide();
 //FOR BACKGROUND SOUND
 guitar.setVolume(0.1);
}


function draw() {
 background(196, 188, 255);
 ClickingChange();
}

//If any of the body types are clicked it will switch to the food option page
//VALUE 1 IS THE FOOD OPTION PAGE
function bodyClick() {
 if ((mouseX >= 60) && (mouseX <= 360) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 550) && (mouseX <= 850) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 1050) && (mouseX <= 1350) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 1550) && (mouseX <= 1850) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 }
}
//When the mouse is pressed the entire screen will switch to a different 
//page depending on where user clicks
//THE FUNCTIONS CHECK THAT THE USER CLICKS THE RIGHT AREA
function mousePressed() {
 if (value == -1) {
  startClick();
 }
 if (value === 0) {
  //Clicked once and will go to body shape page
  bodyClick();
 } else if (value == 1) {
  //Clicked once and will go to food page
  foodClick();
 } else if (value == 2) {
  //Click three options for food, check the number of clicks for food, and switch to basket screen
  foodBag();
  pickClick();
  foodcounter += 1;
  foodcounterCheck();
 } else if (value == 3) {
  activityClick();
 } else if (value == 4) {
  activityBag();
  pickClick2();
  activitycounter += 1;
  activitycounterCheck();


 } else if (value == 5) {
  //MUST CLICK MOUSE TO PLAY MUSIC
  guitar.play();

 }
}

//Decides what is displayed at each value 
function ClickingChange() {
 if (value == -1) {
  startPage();
 }
 if (value === 0) {
  bodychoice1.display();
 }

 if (value == 1) {
  foodchoice1.display();
 }

 if (value == 2) {
  foodBag();
  pickAgain();
 }
 if (value == 3) {
  activitychoice1.display();

 }
 if (value == 4) {
  activityBag();
  pickAgain();
 }

 if (value == 5) {

  if ((count >= 0) && (count <= 10000)) {
   Prevideo();
   soundcheck = true;
  } else {
   videogrid1.display();

  }
 }
}


function startClick() {
 if ((mouseX >= 700) && (mouseX <= 1200) && (mouseY >= 550) && (mouseY <= 700)) {
  value = 0;
 }
}
//FUNCTION THAT CREATES NEW SCREEN TO START
function startPage() {
 background(196, 188, 255);
 textSize(120);
 textFont(font);
 text("Find the Beauty in You", 450, 300);
 fill(255);
 stroke(0);
 strokeWeight(2);
 rect(700, 550, 500, 150);
 textSize(70);
 textFont(font);
 fill(0);
 text("START", 850, 650);
}


//CREATE A BLACK SCREEN THAT WILL START OFF THE NARRATION FOR THE VIDEO COLLAGE
function Prevideo() {
 background(0);
 textSize(50);
 textFont(mont_font);
 fill(255);
 text("IS THIS WHAT A DAY WITH YOUR BODY TYPE WOULD BE LIKE?", 200, 500);
 fill(0);
 count += 100;
}

//CREATES A BUTTON THAT GOES BACK TO THE FOOD PAGE
function pickAgain() {
 push();
 //Rectangle Button for Pressing Again
 fill(255);
 stroke(0);
 strokeWeight(2);
 rect(800, 60, 500, 150);
 //Text inside the button that says:"PICK AGAIN?"
 textSize(70);
 textFont(font);
 fill(0);
 text("Pick Again", 900, 150);
 pop();

}

//Function that checks that user only presses within the button
function pickClick() {
 if ((mouseX >= 800) && (mouseX <= 1300) && (mouseY >= 60) && (mouseY <= 210)) {
  value = 1;
 }
}

//Function that checks that user presses within the button and goes back to activity page
function pickClick2() {
 if ((mouseX >= 800) && (mouseX <= 1300) && (mouseY >= 60) && (mouseY <= 210)) {
  value = 3;
 }
}

function activitycounterCheck() {
 //COUNTER TO CHECK THEY ONLY PICK TWO OPTIONS
 if (activitycounter <= 2) {
  activitywilladd = false;
 } else {
  activitywilladd = true;
 }
 if (activitywilladd === true) {
  value = 5
 }
 if (activitycounter == 2) {
  value = 5;
 }
}


function foodcounterCheck() {
 //COUNTER TO CHECK THEY ONLY PICK THREE OPTIONS
 if (foodcounter <= 3) {
  foodwilladd = false;
 } else {
  foodwilladd = true;
 }
 if (foodwilladd === true) {
  value = 2;
 }
 if (foodcounter == 3) {
  value = 3;
 }
}



//Function checks that the user is only clicking on area occupied by body shape
function bodyClick() {
 if ((mouseX >= 60) && (mouseX <= 360) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 550) && (mouseX <= 850) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 1050) && (mouseX <= 1350) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 } else if ((mouseX >= 1550) && (mouseX <= 1850) && (mouseY >= 180) && (mouseY <= 880)) {
  value = 1;
 }
}
//function checks that user is only clicking on area occupied by food image
function foodClick() {
 //Chocolate
 if ((mouseX >= 60) && (mouseX <= 510) && (mouseY >= 170) && (mouseY <= 520)) {
  value = 2;
  chocolatewilladd = true;
  //Salad
 } else if ((mouseX >= 630) && (mouseX <= 1030) && (mouseY >= 150) && (mouseY <= 500)) {
  value = 2;
  saladwilladd = true;
  //Parfait
 } else if ((mouseX >= 1350) && (mouseX <= 1650) && (mouseY >= 100) && (mouseY <= 480)) {
  value = 2;
  parfaitwilladd = true;
  //Cheetos
 } else if ((mouseX >= 350) && (mouseX <= 750) && (mouseY >= 500) && (mouseY <= 880)) {
  value = 2;
  cheetowilladd = true;
  //Sushi
 } else if ((mouseX >= 980) && (mouseX <= 1290) && (mouseY >= 400) && (mouseY <= 750)) {
  value = 2;
  sushiwilladd = true;
  //Soda
 } else if ((mouseX >= 1550) && (mouseX <= 1750) && (mouseY >= 450) && (mouseY <= 820)) {
  value = 2;
  sodawilladd = true;

 }
}



//Function checks that user only clicks on the area occupied by activity images
function activityClick() {
 //YOGA
 if ((mouseX >= 490) && (mouseX <= 890) && (mouseY >= 133) && (mouseY <= 480)) {
  value = 4;
  yogawilladd = true;
  //GYM
 } else if ((mouseX >= 1120) && (mouseX <= 1570) && (mouseY >= 300) && (mouseY <= 650)) {
  value = 4;
  gymwilladd = true;
  //WATCHING TV
 } else if ((mouseX >= 1144) && (mouseX <= 1544) && (mouseY >= 557) && (mouseY <= 907)) {
  value = 4;
  tvwilladd = true;
  //EATING
 } else if ((mouseX >= 500) && (mouseX <= 900) && (mouseY >= 592) && (mouseY <= 918)) {
  value = 4;
  eatwilladd = true;
 }
}

//Function that shows the basket with the activity objects that user has chosen
function activityBag() {
 //Pulling the food bag so we can keep the food user picked in the basket
 foodBag();
 //Yoga will be added to the basket
 if (yogawilladd === true) {
  lifebag1.addyoga();
 }
 //Gym will be added to the basket
 if (gymwilladd === true) {
  lifebag1.addgym();
 }
 if (eatwilladd === true) {
  lifebag1.addeat();
 }
 if (tvwilladd === true) {
  lifebag1.addtv();
 }
}



//Function that shows the basket with the objects that user has chosen (Uses boolean variables to add images)

function foodBag() {

 lifebag1.display();

 if (chocolatewilladd === true) {
  lifebag1.addchocolate();
 }

 if (saladwilladd === true) {
  lifebag1.addsalad();
 }

 if (sushiwilladd === true) {
  lifebag1.addsushi();
 }

 if (parfaitwilladd === true) {
  lifebag1.addparfait();
 }

 if (cheetowilladd === true) {
  lifebag1.addcheeto();
 }
 if (sodawilladd === true) {
  lifebag1.addsoda();
 }

}
