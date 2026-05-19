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
    fill: "#96f7a1",
    stroke: "#16ff31",
    strokeWidth: 0.25,
  },
  "assets/background1.png": {
    fontSize: "20",
    fontFamily: "Metal Mania",
    fill: "black",
    stroke: "#8a5c37",
    strokeWidth: 1,
  },
  "assets/background2.png": {
    fontSize: "20",
    fontFamily: "Julee",
    fill: "#dadada",
    stroke: "#a79e9e",
    strokeWidth: 1,
  },
}

const storyFont = {
  "assets/background.png": {
    fontSize: 29,
    fontFamily: "Fondamento",
    fill: "#26cc3a",
  },
  "assets/background1.png": {
    fontSize: 29,
    fontFamily: "Fondamento",
    fill: "black",
  },
  "assets/background2.png": {
    fontSize: 26,
    fontFamily: "Fondamento",
    fill: "white",
  },
}

const backgroundSound = {
  "assets/background.png": "assets/Ambient.mp3",
  "assets/background1.png": "assets/Ambient1.mp3",
  "assets/background2.png": "assets/Ambient2.mp3",
}
const guitarBackground = {
  "assets/background.png": "assets/Guitar1.mp3",
  "assets/background1.png": "assets/Guitar2.mp3",
  "assets/background2.png": "assets/Guitar.mp3",
}
const clickBackground = {
  "assets/background.png": "assets/Click.mp3",
  "assets/background1.png": "assets/click2.mp3",
  "assets/background2.png": "assets/click1.mp3",
}
function changeBackground() {
  let newBackground
  do {
    newBackground = Math.floor(Math.random() * backgroundThemes.length)
  } while (newBackground === previousBackground)
  previousBackground = newBackground
  currentBackground = backgroundThemes[newBackground]
  background.style.backgroundImage = `url("${backgroundThemes[newBackground]}")`
  ambient2.src = backgroundSound[currentBackground]
  ambient2.currentTime = 0
  ambient2.play()
  if (backgroundThemes[newBackground] === "assets/background.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer4.png")'
    ;((bard.src = "assets/bard1.png"),
      (bardDialogue.textContent = "Come onnn, everyone is watching"))
    rope.style.opacity = "0"
  } else if (backgroundThemes[newBackground] === "assets/background1.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer6.png")'
    bard.src = "assets/bard2.png"
    bardDialogue.textContent = "Oh Sh-"
    rope.style.opacity = "0"
  } else if (backgroundThemes[newBackground] === "assets/background2.png") {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer5.png")'
    bard.src = "assets/bard4.png"
    bardDialogue.textContent = "bruh..."
    rope.style.opacity = "1"
  }

  const newStoryFont = storyFont[currentBackground]

  resetText.fill(newStoryFont.fill)
}
