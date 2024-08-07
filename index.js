const restartbutton = document.getElementById("Restart")
const statustext = document.getElementById("statustext")
const cells = document.querySelectorAll(".cells")
let gamestate = ["","","","","","","","",""]
let currentplayer = "X"
let running = false
const wincondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
function clickcell() {
   
}
function init(){
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index]
      cell.addEventListener("click", clickcell)
    }
}

init()