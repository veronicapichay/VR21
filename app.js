//prevents null pointer reference errors, waits for contents to be loaded before game starts
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".game-card"); //returns an array inherently dynamic
  let numCards = cards.length;
  let card1 = null; //bucket to assign what user picked on 
  let card2 = null;
  let cardsFlipped = 0;

 //each card invokes the fx 
  for (let card of cards) { 
    card.addEventListener("click", handleCardClick);
  }

  let startBtn = document.getElementById("start-button");
  startBtn.addEventListener("click", startGame);

  //veryfying state of card if not flipped
  function handleCardClick(e) {
    if (!e.target.classList.contains("front")) return; //if statement is met it stops right here 
    let currentCard = e.target.parentElement;

    if (!card1 || !card2) { //if either is false 
      currentCard.classList.add("flipped");
      card1 = card1 || currentCard; 
      card2 = currentCard === card1 ? null : currentCard; //if c1 equals to current card assign c2 to null else assign c2 to be current card 

    if (card1 && card2) { //if both true assign value from gif source 
      let gif1 = card1.children[1].children[0].src; 
      let gif2 = card2.children[1].children[0].src;

      //matching logic
      if (gif1 === gif2) { //increment card flipped by 2 and remove listener
        cardsFlipped += 2;
        card1.removeEventListener("click", handleCardClick);
        card2.removeEventListener("click", handleCardClick);
        card1 = null;
        card2 = null;
      } else {
        setTimeout(function() { //resets the board
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          card1 = null;
          card2 = null;
        }, 1000);
      }
    }
  }
    if (cardsFlipped === numCards) endGame(); //value of length of array numCards
  }

  function startGame() {
    start.classList.add("playing");
    let indices = []; //creates an empty arr
    for (let i = 1; i <= numCards / 2; i++) { 
      indices.push(i.toString()); //values of i in empt arr, strings 
    }
    let pairs = shuffle(indices.concat(indices)); //creating indices of arr
    for (let i = 0; i < cards.length; i++) {
      let path = pairs[i] + ".gif";
      cards[i].children[1].children[0].src = path;
    }
  }

  function shuffle(array) {
    let arrayCopy = array.slice(); //copy of the input array
    //end of the array - decrementing the array backwards
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) { 
      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1)); //random numbers between range of the array, assigning where it should go

      // swap elements at idx1 and idx2
      let temp = arrayCopy[idx1]; 
      arrayCopy[idx1] = arrayCopy[idx2];
      arrayCopy[idx2] = temp;
    }
    return arrayCopy;
  }

  function endGame() {
    document.getElementById("end").classList.add("game-over");
  }
});
