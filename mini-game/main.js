let questions = [
  {
    question: "Bone protecting brain?",
    answer: "Skull",
  },
  {
    question: "What is always in front of you but can't be seen?",
    answer: "Future",
  },
  {
    question: "First man on the moon?",
    answer: "Armstrong",
  },
];

let currentIndex = 0;
let currentAnswer = "";
let currentAnswerMap = [];
let gameLocked = false;

const questionText = document.getElementById("question-text");
const slotsContainer = document.getElementById("answer-slots");
const lettersContainer = document.getElementById("letters-grid");
const resetBtn = document.getElementById("reset-btn");

function startGame(index) {
  currentAnswer = "";
  currentAnswerMap = [];
  gameLocked = false;
  slotsContainer.innerHTML = "";
  lettersContainer.innerHTML = "";

  const { question, answer } = questions[index];
  const upperAnswer = answer.toUpperCase();
  questionText.innerText = `${question}`;

  for (let i = 0; i < answer.length; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";
    slot.dataset.slotIndex = i;
    slot.addEventListener("click", () => removeLetter(i));
    slotsContainer.appendChild(slot);
  }

  const letters = upperAnswer.split("");
  const randomLetters = Array.from(
    { length: 15 - answer.length },
    getRandomLetter
  );
  const allLetters = [...letters, ...randomLetters].sort(
    () => Math.random() - 0.5
  );

  allLetters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.innerText = letter;
    btn.addEventListener("click", () => selectLetter(letter, btn));
    lettersContainer.appendChild(btn);
  });
}

function selectLetter(letter, btn) {
  if (gameLocked || currentAnswer.length >= getCurrentAnswer().length) return;

  const slotIndex = currentAnswer.length;
  const slot = slotsContainer.querySelector(`[data-slot-index="${slotIndex}"]`);
  slot.innerText = letter;

  currentAnswer += letter;
  currentAnswerMap.push({ slotIndex, letter, button: btn });
  btn.classList.add("used");

  if (currentAnswer.length === getCurrentAnswer().length) {
    checkAnswer();
  }
}

function removeLetter(index) {
  if (gameLocked) return;

  const mapItemIndex = currentAnswerMap.findIndex(
    (item) => item.slotIndex === index
  );
  if (mapItemIndex !== -1) {
    const item = currentAnswerMap[mapItemIndex];
    currentAnswerMap.splice(mapItemIndex, 1);
    currentAnswer = currentAnswerMap.map((m) => m.letter).join("");

    const slot = slotsContainer.querySelector(`[data-slot-index="${index}"]`);
    slot.innerText = "";

    item.button.classList.remove("used");
  }
}

function checkAnswer() {
  const correctAnswer = getCurrentAnswer().toUpperCase();

  if (currentAnswer === correctAnswer) {
    gameLocked = true;
    // alert("✅ Correct!");

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        currentIndex++;
        startGame(currentIndex);
      } else {
        alert("🎉 You completed all levels!");
        currentIndex = 0;
        startGame(currentIndex);
      }
    }, 800);
  } else {
    alert("❌ Try again!");
    gameLocked = true;
  }
}

function resetGame() {
  startGame(currentIndex);
}

function getRandomLetter() {
  const code = Math.floor(Math.random() * 26) + 65;
  return String.fromCharCode(code);
}

function getCurrentAnswer() {
  return questions[currentIndex].answer;
}

// Event Listener
resetBtn.addEventListener("click", resetGame);

// Start the first game
startGame(currentIndex);
