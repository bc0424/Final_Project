//SECOND FOOD PAGE
function foodChoice() {

 this.display = function() {
  chocolatex = 600;
  chocolatey = 650;
  saladx = 1300;
  salady = 600;
  sushix = 1400;
  sushiy = 650;
  cheetox = 600;
  cheetoy = 750;
  parfaitx = 1600;
  parfaity = 350;
  sodax = 1800;
  soday = 1350;
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
  sizemx = 100;
  sizemy = 300;
  textSize(70);
  textFont(font);
  text("What are three things you would eat?", 500, 100);
  //enlarges chocolate when hovered over
  if ((mouseX >= 205) && (mouseX <= 385) && (value == 1) && (mouseY >= 223) && (mouseY <= 403)) {
   sizex += 100;
   sizey += 100;
   chocolatex -= 50;
   chocolatey -= 50;
   image(chocolate, chocolatex - (chocolate.width / 2), chocolatey - (chocolate.height / 2), sizex, sizey);
  } else {
   image(chocolate, chocolatex - (chocolate.width / 2), chocolatey - (chocolate.height / 2), sizex, sizey);
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
   sushix -= 50;
   sushiy -= 50;
   image(sushi, sushix - (sushi.width / 2), sushiy - (sushi.height / 2), sizeax, sizeay);
  } else {
   image(sushi, sushix - (sushi.width / 2), sushiy - (sushi.height / 2), sizeax, sizeay);
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
   sizemx += 50;
   sizemy += 100;
   sodax -= 50;
   soday -= 50;
   image(soda, sodax - (soda.width / 2), soday - (soda.height / 2), sizemx, sizemy);
  } else {
   image(soda, sodax - (soda.width / 2), soday - (soda.height / 2), sizemx, sizemy);

  }
 }



}