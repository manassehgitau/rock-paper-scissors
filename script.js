let currentScore = 0;
const options = ["rock", "paper", "scissors"];

function chooseRandomOption() {
  let chosenRandomNum = Math.random() * (3 - 0) + 0;
  let truncatedNum = Math.floor(chosenRandomNum);
  return options[truncatedNum];
}

// TODO: add local storage and work perfectly. --> DONE
function updateScore() {
  let getCurrentScore = document.querySelector(".current-score");
  getCurrentScore.textContent = `${currentScore}`;
}
function loadScore() {
  const storedScores = localStorage.getItem("currentScore");
  if (storedScores) {
    currentScore = JSON.parse(storedScores);
    updateScore();
  }
}

function saveScore() {
  localStorage.setItem("currentScore", JSON.stringify(currentScore));
}


// TODO: implement the win and lose logic in the rock, paper scissors logic function blocks

function scissorsLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);

  if (computerChoice === "scissors") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10">
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">It's a Tie</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
  } else if (computerChoice === "paper") {
    console.log("You win!");
    currentScore++;
  } else if (computerChoice === "rock") {
    console.log("You Lose");
  }
  updateScore();
  saveScore();
}

function paperLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);

  if (computerChoice === "paper") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10">
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">It's a Tie</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
  } else if (computerChoice === "scissors") {
    console.log("You lose!");
  } else if (computerChoice === "rock") {
    console.log("You Win");
    currentScore++;
  }
  updateScore();
  saveScore();
}

function rockLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);

  if (computerChoice === "rock") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10">
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">It's a Tie</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button" onclick="paperLogic();">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
  } else if (computerChoice === "paper") {
    console.log("You Lose!");
  } else if (computerChoice === "scissors") {
    console.log("You Win");
    currentScore++;
  }
  updateScore();
  saveScore();
}

function refreshGame() {
  document.querySelector(".playing-cards-container").innerHTML = `
  <div class="playing-cards-container w-200 flex flex-wrap justify-center items-center gap-28 my-20">
      <div class="card-item pr-10">
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button" onclick="rockLogic()">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item pl-10">
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button" onclick="paperLogic();">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
      <div class="card-item ">
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button" onclick="scissorsLogic()">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
    </div>
  `;
  loadScore();
}

document.addEventListener("DOMContentLoaded", function () {
  loadScore();
});