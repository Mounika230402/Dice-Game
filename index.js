

var getBtn=document.querySelector("#btn")

getBtn.addEventListener("click",()=>{
    var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDice1="dice"+randomNumber1+".png";
var Source1="./images/"+randomDice1;
var image1=document.querySelector(".img1");
image1.setAttribute("src",Source1);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomNumber2+".png";
var Source2="./images/"+randomDice2;
var image2=document.querySelector(".img2");
image2.setAttribute("src",Source2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 is win 🚩";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player2 is win 🚩";
}
else{
    document.querySelector("h1").innerHTML="Both are draw";
}
})
//alert("Welcome to Dice game")
