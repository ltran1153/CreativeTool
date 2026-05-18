const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const ambient2 = document.getElementById("ambient")
const guitar2 = document.getElementById("guitar")
const ambientOn = document.getElementById("ambientOn")
const travel = document.getElementById("travel")
const background = document.getElementById("background")
const konvaStage = document.getElementById("konva-stage")
const rope = document.getElementById("rope")
//show dialog box on top of and before all other content
IntroDialog.showModal()
Acknowledged.addEventListener("click", CloseDialog)
//closes the dialog box and starts playing the background music
function CloseDialog() {
  IntroDialog.close()
  ambient2.play()
  console.log("playing")
}

//toggle between audio being muted or not muted
function muteAmbient() {
  ambient2.muted = !ambient2.muted
  //if audio is muted, change text of button to Ambient: off
  if (ambient2.muted) {
    ambientOn.textContent = "Ambient: Off"
    //if not muted, change text of button to Ambient: On
  } else {
    ambientOn.textContent = "Ambient: On"
  }
}

ambientOn.addEventListener("click", muteAmbient)

const backgroundThemes = [
  "assets/background.png",
  "assets/background1.png",
  "assets/background2.png",
]

let previousBackground = -1
let currentBackground = "assets/background.png"
const fontBackground = {
  "assets/background.png": {
    fontSize: "20",
    fontFamily: "MedievalSharp",
    fill: "#145c1c",
    stroke: "black",
    strokeWidth: 0.45,
  },
  "assets/background1.png": {
    fontSize: "20",
    fontFamily: "Metal Mania",
    fill: "darkred",
    stroke: "black",
    strokeWidth: 1,
  },
  "assets/background2.png": {
    fontSize: "20",
    fontFamily: "Julee",
    fill: "white",
    stroke: "black",
    strokeWidth: 1,
  },
}

const storyFont = {
  "assets/background.png": {
    fontSize: "20",
    fontFamily: "MedievalSharp",
    fill: "#145c1c",
    stroke: "black",
    strokeWidth: 0.45,
  },
  "assets/background1.png": {
    fontSize: "20",
    fontFamily: "Eagle Lake",
    fill: "darkred",
    stroke: "black",
    strokeWidth: 1,
  },
  "assets/background2.png": {
    fontSize: "20",
    fontFamily: "Julee",
    fill: "white",
    stroke: "black",
    strokeWidth: 1,
  },
}

function changeBackground() {
  let newBackground
  do {
    newBackground = Math.floor(Math.random() * backgroundThemes.length)
  } while (newBackground === previousBackground)
  previousBackground = newBackground
  currentBackground = backgroundThemes[newBackground]
  background.style.backgroundImage = `url("${backgroundThemes[newBackground]}")`

  if (backgroundThemes[newBackground] === "assets/background.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer1.png")'
    konvaStage.style.filter = "brightness(1)"
    ;((bard.src = "assets/bard1.png"),
      (bardDialogue.textContent = "Come onnn, everyone is watching"))
    rope.style.opacity = "0"
  } else if (backgroundThemes[newBackground] === "assets/background1.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer2.png")'
    konvaStage.style.filter = "brightness(1)"
    bard.src = "assets/bard2.png"
    bardDialogue.textContent = "Oh Sh-"
    rope.style.opacity = "0"
  } else if (backgroundThemes[newBackground] === "assets/background2.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer3.png")'
    konvaStage.style.filter = "brightness(1)"
    bard.src = "assets/bard4.png"
    bardDialogue.textContent = "bruh..."
    rope.style.opacity = "1"
  }
}
