let time = 60;
let score = 0;
let num = 0;



function makeABubble() {
  let clutter = ""

  for (let i = 1; i <= 126; i++) {
    let num = Math.floor(Math.random() * 10)
    clutter += `<h4>${num}</h4>`
  }

  let bubble = document.querySelector(".gameBubble").innerHTML = clutter
}

function setTheTime() {
  let interval = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector(".time").textContent = time;
    } else {
      clearInterval(interval)
      document.querySelector(".gameBubble").innerHTML = `<h1>Game Over</h1>`
    }
  }, 1000)
}

function setTheHit() {
  num = Math.floor(Math.random() * 10)
  document.querySelector(".gameHit").textContent = num;
}

function setTheScore() {
  score += 10
  document.querySelector(".gameScore").textContent = score
}

document.querySelector(".gameBubble").addEventListener("click", (dets) => {
  let luckyNumber = Number(dets.target.textContent)
  if (luckyNumber === num) {
    setTheScore()
    setTheHit()
    makeABubble()
  } else {
    console.log("jdh");
  }

})

setTheHit()
setTheTime()
makeABubble()