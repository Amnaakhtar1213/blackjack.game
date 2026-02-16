 let player = {
     name: "Per",
    chips: 200
 }

count = [] ;
sum = 0;
hasBlackJack = false;
isAlive = false;
message = "";
const btn = document.querySelector("button");
let btn1 = document.querySelector("#btn-1")
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");



 playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  count = [firstCard, secondCard]
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if(randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function renderGame() {
  cardEl.textContent = "Cards: "; 
  for(let i = 0; i < count.length; i++) {
    cardEl.textContent += count[i] + " ";
  }

  sumEl.textContent = "Sum: "+ sum;
  if(sum <= 20) {
    message = "Do you want to draw a new card."
  } else if(sum === 21) {
    message = "WOOHOOO!!! you got a blackjack"
    hasBlackJack = true;
  } else {
    message = "OHOOO! TRY AGAIN"
    isAlive = false;
  }
 messageEl.textContent = message;
}
btn.addEventListener("click", startGame)


function newCard() {
  if(isAlive === true && hasBlackJack === false) {
let card = getRandomCard();
sum += card;
count.push(card);
renderGame();
  }


}
btn1.addEventListener("click", newCard)




