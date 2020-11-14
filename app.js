// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж үзлээ
var activePlayer = 1;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгааа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
//var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//DOM оос хайж олоод шооны утга өгч байгаа
//Пргограмм эхлэх үед
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
