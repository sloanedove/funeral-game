
let kissy=document.getElementById("kissy");
kissy.addEventListener("click", updateResults);
kissy.myParam="images/kissycoffin.png";

let dolphin=document.getElementById("dolphin");
dolphin.addEventListener("click", updateResults);
dolphin.myParam="images/dolphincoffin.png";

let finalSelections=[];

let flower1=document.getElementById("flower1");
flower1.addEventListener("click", updateResults);
flower1.myParam="images/flower1bow.png";

let flower2=document.getElementById("flower2");
flower2.addEventListener("click", updateResults);
flower2.myParam="images/flower2bow.png";

let flower3=document.getElementById("flower3")
flower3.addEventListener("click", updateResults);
flower3.myParam="images/flower3bow.png"

let cake1=document.getElementById("cake1");
cake1.addEventListener("click", updateResults);
cake1.myParam="images/cake1.png"

let cake2=document.getElementById("cake2");
cake2.addEventListener("click", updateResults);
cake2.myParam="images/cake2.png";

let cake3=document.getElementById("cake3");
cake3.addEventListener("click", updateResults);
cake3.myParam="images/cake3.png";
let screen=0;

let window1=document.getElementById("window1");
window1.addEventListener("click", updateResults);
window1.myParam="images/sgGreen.png"

let window2=document.getElementById("window2");
window2.addEventListener("click", updateResults);
window2.myParam="images/sgPink.png"

let window3=document.getElementById("window3");
window3.addEventListener("click", updateResults);
window3.myParam="images/sgPurple.png"


function updateResults(evt){
finalSelections.push(evt.currentTarget.myParam);
console.log(finalSelections);
updateScreen();
}

let startButton;
startButton=document.getElementById("startButton");
startButton.addEventListener("click", updateScreen);
let casketScreen;
let startScreen;
let flowerScreen;
let cakeScreen;
let windowScreen;

startScreen=document.getElementById("start");
casketScreen=document.getElementById("caskets");
flowerScreen=document.getElementById("flowers");
cakeScreen=document.getElementById("cakescreen");
windowScreen=document.getElementById("windowscreen")


let result1=document.getElementById("result1");
let result2=document.getElementById("result2");
let result3=document.getElementById("result3");
let result4=document.getElementById("result4")
let finalScreen=document.getElementById("final");

function updateScreen(){
    screen++;
    console.log(screen);
    if (screen == 1){
        startScreen.style.display="none";
        casketScreen.style.display="block";
    }
    if (screen == 2){
        casketScreen.style.display="none";
        flowerScreen.style.display="block";
    }
    if(screen == 3){
        flowerScreen.style.display="none";
        cakeScreen.style.display="block";
    }
    if(screen == 4){
        cakeScreen.style.display="none";
        windowScreen.style.display="block"
    }
    if (screen == 5){
        windowScreen.style.display="none";
        finalScreen.style.display="block";
        result1.src=finalSelections[0]
        result2.src=finalSelections[1]
        result3.src=finalSelections[2]
        result4.src=finalSelections[3]
    }
}


// floating hearts p5
// let hearts;
// let Hearts = [];

// function setup() {
//     createCanvas(600,800);
//      angleMode(DEGREES);
    
//      for (let i = 0; i < 10; i++){
//      Hearts[i] = new Heart(hearts);

//      push();
//   translate(-width/2, -height/2);
//   for (let i = 0; i < Hearts.length; i++){
//     Hearts[i].display();
//     Hearts[i].move();
