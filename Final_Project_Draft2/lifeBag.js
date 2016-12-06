function lifeBag() {
//Displays the basket's image
 this.display = function() {
  bagx = 1000;
  bagy = 600;
  image(bag, bagx - (bag.width / 2), bagy - (bag.height / 2));

 }
 //ADDS CHOCOLATE TO THE BASKET
 this.addchocolate = function () {
  chocolateax = 625;
  chocolateay = 500;
  sizecax = 250;
  sizecay = 200;
  image(chocolate, chocolateax,chocolateay, sizecax,sizecay);
 }
 //ADDS SALAD TO THE BASKET
 this.addsalad = function (){
  saladax = 800;
  saladay = 500;
  sizesax = 350;
  sizesay = 300;
  image(salad, saladax, saladay, sizesax, sizesay);
 }
 //ADDS SUSHI TO THE BASKET
 this.addsushi = function (){
  sushiax = 1400;
  sushiay = 750;
  sizesuax = 200;
  sizesuay = 150;
  image(sushi, sushiax - (sushi.width/2), sushiay - (sushi.height/2), sizesuax, sizesuay);

 }
 //ADDS PARFAIT TO THE BASKET
 this.addparfait = function (){
  parfaitax = 950;
  parfaitay = 500;
  sizepax = 150;
  sizepay = 150;
  image(parfait, parfaitax, parfaitay, sizepax, sizepay);
 }
 //ADDS CHEETOS TO THE BASKET
 this.addcheeto = function (){
  cheetoax = 1150;
  cheetoay = 450;
  sizecax = 150;
  sizecay = 200;
  image(cheeto, cheetoax, cheetoay, sizecax, sizecay);
 }
 //ADDS SODA TO THE BASKET
 this.addsoda = function (){
  sodaax = 1050;
  sodaay = 500;
  sizesoax = 70;
  sizesoay = 230;
  image(soda, sodaax, sodaay, sizesoax, sizesoay);
 }
 
 //ADDS YOGA TO THE BASKET
 this.addyoga = function (){
  yogaax = 650;
  yogaay = 400;
  sizeyax = 250;
  sizeyay = 200;
  image(yoga, yogaax, yogaay, sizeyax, sizeyay);
 }
 
 //ADDS GYM TO THE BASKET
 this.addgym = function (){
  gymax = 900;
  gymay = 450;
  sizegax = 450;
  sizegay = 250;
  image(gym, gymax, gymay, sizegax, sizegay);
 }
 //ADDS EATING TO THE BASKET
 this.addeat = function (){
  eatax = 960;
  eatay = 400;
  sizeeax = 200;
  sizeeay = 150;
  image(eat, eatax, eatay, sizeeax, sizeeay);
 }
 //ADDS WATCHING TV TO THE BASKET
 this.addtv = function (){
  tvax = 1020;
  tvay = 650;
  sizetax = 200;
  sizetay = 150;
  image(tv, tvax, tvay, sizetax, sizetay);
 }
}