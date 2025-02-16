let currentScore = 0;
const options = ["rock", "paper", "scissors"];
let totalAttempts = 0;

function chooseRandomOption() {
  let chosenRandomNum = Math.random() * (3 - 0) + 0;
  let truncatedNum = Math.floor(chosenRandomNum);
  return options[truncatedNum];
}

// TODO: add local storage and work perfectly. --> DONE 🍾
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function delayResult(time){
  sleep(time).then(() => {
    refreshGame();
  });
  checkTotalAttempts();
}

function checkTotalAttempts(){
  console.log(totalAttempts);
  if (totalAttempts > 10){
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item flex flex-col justify-center items-center">
       <p class="title-item text-2xl subpixel-antialiased font-bold">Your Total Score is ${currentScore}</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
    `
    delayResult(3000);
    currentScore = 0;
    saveScore();
    updateScore();
    loadScore();
  }
}

// TODO: implement the win and lose logic in the rock, paper scissors logic function blocks --Done 🍾 
// TODO: implement the restart logic in the game -Done 🍾


function restartGame(){
  currentScore = 0;
  totalAttempts = 0;
  saveScore();
  refreshGame();
  console.log("Game restarted!");
}

// TODO: change color based on choice --> DONE 🍾
function scissorsLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);
  totalAttempts++;

  if (computerChoice === "scissors") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">          <button class="icon-button">
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
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);

  } else if (computerChoice === "paper") {
    console.log("You win!");
    currentScore++;
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Win!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  } else if (computerChoice === "rock") {
    console.log("You Lose");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Lose!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  }
  updateScore();
  saveScore();
}

function paperLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);
  totalAttempts++;

  if (computerChoice === "paper") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
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
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  } else if (computerChoice === "scissors") {
    console.log("You lose!");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Lose!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  } else if (computerChoice === "rock") {
    console.log("You Win");
    currentScore++;
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Lose!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  }
  updateScore();
  saveScore();
}

function rockLogic() {
  let computerChoice = chooseRandomOption();
  console.log(computerChoice);
  totalAttempts++;

  if (computerChoice === "rock") {
    console.log("Its a Tie");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
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
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button" onclick="paperLogic();">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  } else if (computerChoice === "paper") {
    console.log("You Lose!");
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Lose!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#5555ff] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/hand-paper.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  } else if (computerChoice === "scissors") {
    console.log("You Win");
    currentScore++;
    document.querySelector(".playing-cards-container").innerHTML = `
    <div class="card-item pr-10 h-11/12">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Computer</p>
        <div class="icon-color-container bg-[#ffaa00] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/fist.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-fill">
          </button>
        </div>
      </div>
      <div class="card-item ">
       <p class="title-item text-2xl subpixel-antialiased font-bold">You Win!</p>
       <button onclick="refreshGame()" class="my-2">
            <img src="./assets/icons/refresh.png" alt="A icon of the game icons" class="icons w-20 h-20 bg-[#fff] rounded-full p-7 object-contain">
       </button>
      </div>
      <div class="card-item pl-10">
        <p class="player text-lg text-[#fff] subpixel-antialiased tracking-wide">Player</p>
        <div class="icon-color-container bg-[#ff2a2e] rounded-full w-50 h-50 flex justify-center items-center shadow-2xl">
          <button class="icon-button">
            <img src="./assets/icons/scissors.png" alt="A icon of the game icons" class="icons w-45 h-45 bg-[#fff] rounded-full p-7 object-contain">
          </button>
        </div>
      </div>
    `;
    delayResult(2000);
    
  }
  updateScore();
  saveScore();
}

function refreshGame() {
  document.querySelector(".playing-cards-container").innerHTML = `
  <div class="playing-cards-container w-200 flex flex-wrap justify-center items-center gap-28 my-20">
      <div class="card-item pr-10 h-11/12">
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
  window.addEventListener("load", () => {
    const loadingOverlay = document.getElementById("loadingOverlay");
    const content = document.querySelector(".content");

    // Fade out the loading overlay
    loadingOverlay.style.opacity = "0";
    loadingOverlay.style.transition = "opacity 0.5s ease";

    // Show the content after the overlay fades out
    setTimeout(() => {
      loadingOverlay.style.display = "none";
      content.style.display = "block";
    }, 500);
  });
});