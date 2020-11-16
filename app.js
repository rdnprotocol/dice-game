var activePlayer;
var scores;
var roundScore;
var isGameOver;
var diceDom = document.querySelector(".dice");
initGame();
//тоглоом шинээр эхлэх
function initGame() {
  isGameOver = false;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж үзлээ
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  // эхлэх үед
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");
  diceDom.style.display = "none";
}

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    // 1-6 доторх тооны санамсаргүй тоог гаргаж авах
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";
    // буусан тооны харгалзах шооны зураг гаргаж ирэх
    diceDom.src = "dice-" + diceNumber + ".png";
    // буусан тоо нь 1 ээс ялгаатай бол идвэхтэй тоглогчийн Шооны тоглогчийн ээлжийн оноог нэмэгдүүлэх
    if (diceNumber !== 1) {
      //1 ээс ялгаатай тоо буулаа буусан тоог тоглогчид нэмж өгнө
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME товч дарна уу");
  }
});

//HOLD btn эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  //уг Тоглогчийн цуглуулсан оноог нийт оноон дээр нь нэмж өгнө
  if (isGameOver !== true) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //ээлжийн оноо 100 хүрсэн эсэх
    if (scores[activePlayer] >= 100) {
      //тоглоомын дууссан горим
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. NEW GAME дарна уу!!!");
  }
  // тоглогчийн ээлжийн солино
});

//энэ функц нь тоглох ээлжийг дараачийг тоглогчруу шилжүүлнэ
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  //Улаанцэгийг хайж олно
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //Шоог түр алга болгох
  diceDom.style.display = "none";
}
//NEW GAME товч шинээр эхлэхэ
document.querySelector(".btn-new").addEventListener("click", initGame);
