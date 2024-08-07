const restartbutton = document.getElementById("Restart")
const statustext = document.getElementById("statustext")
const cells = document.getElementsByClassName("cell")
let gamestate = ["", "", "", "", "", "", "", "", ""]
let currentplayer = "X"
let running = false
const wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
function Checkwinner() {
  let iswinner = false
  for (let index = 0; index < wincondition.length; index++) {
    const condition = wincondition[index]
    const [cell1, cell2, cell3] = condition
    if (gamestate[cell1] == currentplayer && gamestate[cell2] == currentplayer && gamestate[cell3] == currentplayer) {
      iswinner = true
      break
    }
  }
  if(iswinner===true) {
    statustext.textContent=currentplayer+" wins"
    running = false
  } else if(!gamestate.includes("")) {
    statustext.textContent= "draw"
  }

}
function clickcell(event) {
  const cell = event.target
  const position = cell.dataset.index
  if (gamestate[position] !== "" || !running) {
    return
  }
  gamestate[position] = currentplayer
  cell.textContent = currentplayer
  Checkwinner()
  if (currentplayer == "X") {
    currentplayer = "O"
  } else {
    currentplayer = "X"

  }
}
function restart() {
  running=true
  gamestate = ["", "", "", "", "", "", "", "", ""]
  for (let index = 0; index < cells.length; index++) {
    const cell = cells[index]
    cell.textContent=""
  }
  currentplayer="X"
  statustext.textContent=""
}
function init() {
  for (let index = 0; index < cells.length; index++) {
    const cell = cells[index]
    cell.addEventListener("click", clickcell)
  }
  running = true
  restartbutton.addEventListener("click",restart)
}

init()