document.querySelector("#btn").addEventListener("click", 
function dicee() {
  var randomNumber1 = Math.ceil(Math.random()*6);
  var randomNumber2 = Math.ceil(Math.random()*6);
  
  var images1 = "images/dice" + randomNumber1 + ".png";
  var images2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", images1)
  document.querySelector(".img2").setAttribute("src", images2)

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
  }

  if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
  }

  if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = " 🚩 Draw! 🚩"
  }
}
);

