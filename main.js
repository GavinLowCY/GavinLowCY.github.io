// const b1=document.getElementById("B1");
// b1.addEventListener("click", callbackfn);

// function callbackfn(){
//     alert("hello world from the click");
//     b1.innerHTML=("ts pmo");
//     b1.style.width="300px";
//     b1.style.height="300px";
// }

//target all elements to save to constants
// const page1btn=document.querySelector("#page1btn");
// const page2btn=document.querySelector("#page2btn");
// const page3btn=document.querySelector("#page3btn");
// var allpages=document.querySelectorAll(".page");
// //select all subtopic pages
// function hideall(){ //function to hide all pages
// for(let onepage of allpages){ //go through all subtopic pages
// onepage.style.display="none"; //hide it
// }
// }
// function show(pgno){ //function to show selected page no
// hideall();
// //select the page based on the parameter passed in
// let onepage=document.querySelector("#page"+pgno);
// onepage.style.display="block"; //show the page
// }
// /*Listen for clicks on the buttons, assign anonymous
// eventhandler functions to call show function*/
// page1btn.addEventListener("click", function () {
// show(1);
// });
// page2btn.addEventListener("click", function () {
// show(2);
// });
// page3btn.addEventListener("click", function () {
// show(3);
// });
// hideall();

// /*find references to all the buttons and ball */
// const leftBtn = document.querySelector("#leftBtn");
// const rightBtn = document.querySelector("#rightBtn");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");
// const resetBtn = document.querySelector("#resetBtn");
// const ball = document.querySelector("#ball");
// var ballX = ballY = 0; //assign initial position of ball
// function ResetPos() {
// ballX=ballY=0; //reset to zero
// ball.style.left = ballX+"px"; //set left property to ball x variable
// ball.style.top = ballY+"px"; //set top property to ball x variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }
// function MovePos(leftInc, topInc) {
// ballX =ballX+ leftInc;
// ballY =ballY+ topInc;
// ball.style.left = ballX+"px"; //set left css property to ball x variable
// ball.style.top = ballY+"px"; //set top css property to ball y variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
//}
// function MoveLeft(){
// ballX =ballX-10; //decrement by 10
// ballY =ballY+0; //no change
// ball.style.left = ballX+"px"; //set left css property to ball x variable
// ball.style.top = ballY+"px"; //set top css property to ball y variable
// ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
// }
//eventlistener to activate MoveLeft (named callback function)
// leftBtn.addEventListener("click", function(){
//     if(ballX<0){
//      ballX=0+10;
     
//     }    
//     MovePos(-10,0)
    
    
// }); //no brackets after MoveLeft
// //eventListener to anonymous callback function (other way)
// rightBtn.addEventListener("click", function () {
// MovePos(10, 0);
// if(ballX>1130){
//     ballX=1130-10;
// }
// });
// upBtn.addEventListener("click", function () {
// MovePos(0, -10);
// if(ballY>460){
//     ballY=460;
// }
// if(ballY<-20){
//     ballY=-20;
// }
// });
// downBtn.addEventListener("click", function () {
// MovePos(0, 10);
// if(ballY>460){
//     ballY=460;
// }
// if(ballY<-20){
//     ballY=-20;
// }
// });
// resetBtn.addEventListener("click", ResetPos);


// 1. Find Min X, Min y, Max X, Max Y
// Min x = 0;
// Min y = -20;
// Max x = 1130;
// Max y = 460;
// 2. Check if ballY or ballX goes over the Max X or Y values OR Min X or Y values
// 3. If over, restrict

// if(ballX>1130){
//     ballX=1130;
// }
// if(ballX<0){
//     ballX=0;
// }    
// if(ballY>460){
//     ballY=460;
// }
// if(ballY<-20){
//     ballY=-20;
// }


//JS for assignment 2
// console.log("linked"); //test to check link




//Button for sub-topics
//assign variables to affected content
const main1 = document.querySelector('#MTB1'); //1st btn
const main2 = document.querySelector('#MTB2'); //2nd btn
const main3 = document.querySelector('#MTB3'); //3rd btn
const context1 = document.querySelector('#BIntro');
const context2 = document.querySelector('#BSpeciesRoles');
const context3 = document.querySelector('#BEcosystem');

//link the content to the buttons


function hideall(){ //function to hide all pages
// for(let onepage of allpages){ //go through all subtopic pages
// onepage.style.display="none"; //hide it
// }

//manually key in to hide all pages
document.querySelector('#BIntro').style.display = "none";
document.querySelector('#BSpeciesRoles').style.display = "none";
document.querySelector('#BEcosystem').style.display = "none";

}


// function show(pgno){ //function to show selected page no
// hideall();
// //select the page based on the parameter passed in
// let onepage=document.querySelector("#BText"+pgno);
// onepage.style.display="block"; //show the page
// }
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
main1.addEventListener("click", function() {
    hideall();
    
    document.querySelector('#BIntro').style.display = "block";
});
main2.addEventListener("click", function () {
    hideall();
    document.querySelector('#BSpeciesRoles').style.display = "block";
});
main3.addEventListener("click", function () {
    hideall();
   document.querySelector('#BEcosystem').style.display = "block";
});
hideall();


//button for facts


function Facthide(){
    document.querySelector('#F1T').style.display = "none";
    document.querySelector('#F2T').style.display = "none";
    document.querySelector('#F3T').style.display = "none";

}



let Fact1 = document.querySelector('#FCT1');
let Fact2 = document.querySelector('#FCT2');
let Fact3 = document.querySelector('#FCT3');



Fact1.addEventListener("click", function() {
    Facthide();
    
    document.querySelector('#F1T').style.display = "block";
});
Fact2.addEventListener("click", function () {
    Facthide();
    document.querySelector('#F2T').style.display = "block";
});
Fact3.addEventListener("click", function () {
    Facthide();
   document.querySelector('#F3T').style.display = "block";
});
Facthide();

