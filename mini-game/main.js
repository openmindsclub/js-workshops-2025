const question = "Ce qui ne se ...... pas se perd !";
const answer = "partage";
let currentAnswer = "";

document.querySelector("#question-text").innerHTML = question;

// 1. cerate answer slots
const nbrSlot = answer.length;
const slotsContainer = document.querySelector(".answer-slots");
for (let i = 0; i < nbrSlot; i++) {
  const slotElement = document.createElement("div");
  slotElement.className = "slot";
  slotElement.dataset.slotIndex = i;

  slotsContainer.appendChild(slotElement);
}

// 2. create the letters (button)
const answerLetters = answer.toLocaleUpperCase().split("");
// add more random letters
const radomLetters = [];
const rest = 15 - answer.length;
for (let i = 0; i < rest; i++) {
  const l = getRandomLetter();
  radomLetters.push(l);
}

const allLetters = [...answerLetters, ...radomLetters];

// 3. mix (shuffle) the letters
allLetters.sort((a, b) => Math.random() - 0.5);

const lettersContainer = document.querySelector("#letters-grid");
for (let l of allLetters) {
  const letterBtn = document.createElement("button");
  letterBtn.className = "letter-btn";
  letterBtn.innerText = l;

  // add event listeners
  letterBtn.addEventListener("click", function () {
    if (currentAnswer.length >= answer.length) {
      return;
    }
    currentAnswer += l;
    const slotIndex = currentAnswer.length - 1;

    const slot = document.querySelector(
      `[data-slot-index="${slotIndex}"].slot`
    );
    slot.innerHTML = l;

    letterBtn.classList.add("used");

    // check game status
    if (currentAnswer === answer.toUpperCase()) {
      alert("Correct!");
    } else if (currentAnswer.length === answer.length) {
      alert("Try again : (");
    }
  });
  // add it to the parent
  lettersContainer.append(letterBtn);
}

function getRandomLetter() {
  const randomNumber = Math.floor(Math.random() * 26);
  const radomLetter = String.fromCharCode(randomNumber + 65);

  return radomLetter;
}
