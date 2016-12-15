function activityChoice() {

 this.display = function() {
  textSize(70);
  text("What are two types of activities you would do?", 450, 100);
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

  if ((mouseX >= 490) && (mouseX <= 890) && (mouseY >= 133) && (mouseY <= 480)) {
   sizeyx += 100;
   sizeyy += 100;
   yogax -= 50;
   yogay -= 50;
   image(yoga, yogax - (yoga.width / 2), yogay - (yoga.height / 2), sizeyx, sizeyy);
  } else {
   image(yoga, yogax - (yoga.width / 2), yogay - (yoga.height / 2), sizeyx, sizeyy);
  }
  if ((mouseX >= 1120) && (mouseX <= 1570) && (mouseY >= 350) && (mouseY <= 750)) {
   sizegx += 100;
   sizegy += 100;
   gymx -= 50;
   gymy -= 50;
   image(gym, gymx - (gym.width / 2), gymy - (gym.height / 2), sizegx, sizegy);
  } else {
   image(gym, gymx - (gym.width / 2), gymy - (gym.height / 2), sizegx, sizegy);
  }
  if ((mouseX >= 500) && (mouseX <= 900) && (mouseY >= 592) && (mouseY <= 918)) {
   sizeex += 100;
   sizeey += 100;
   eatx -= 50;
   eaty -= 50;
   image(eat, eatx - (eat.width / 2), eaty - (eat.height / 2), sizeex, sizeey);
  } else {
   image(eat, eatx - (eat.width / 2), eaty - (eat.height / 2), sizeex, sizeey);
  }
  if ((mouseX >= 1144) && (mouseX <= 1544) && (mouseY >= 600) && (mouseY <= 907)) {
   sizetx += 100;
   sizety += 100;
   tvx -= 50;
   tvy -= 50;
   image(tv, tvx - (tv.width / 2), tvy - (tv.height / 2), sizetx, sizety);
  } else {
   image(tv, tvx - (tv.width / 2), tvy - (tv.height / 2), sizetx, sizety);
  }
 }
}