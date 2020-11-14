// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж үзлээ
var activePlayer = 1;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгааа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө
var dice = Math.floor(Math.random() * 6) + 1;

console.log("шоо " + dice + " гэж буулаа");

//<div class="player-score" id="score-0">43</div>
//DOM оос хайж олоод шооны утга өгч байгаа
//Пргограмм эхлэх үед
window.document.querySelector("#score-0").textContent = "0";
window.document.querySelector("#current-0").textContent = "0";
window.document.querySelector("#current-1").textContent = "0";
window.document.querySelector("#score-1").textContent = "0";
window.document.querySelector(".dice").style.display = none;
