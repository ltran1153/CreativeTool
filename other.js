const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const ambient2 = document.getElementById("ambient")
const guitar2 = document.getElementById("guitar")
const ambientOn = document.getElementById("ambientOn")
const travel = document.getElementById("travel")
const background = document.getElementById("background")
const konvaStage = document.getElementById("konva-stage")
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

const backgroundThemes = ["assets/background.png", "assets/background1.png"]

function changeBackground() {
  const backgroundOption = Math.floor(Math.random() * backgroundThemes.length)

  background.style.backgroundImage = `url("${backgroundThemes[backgroundOption]}")`

  if (backgroundThemes[backgroundOption] === "assets/background.png") {
    ;((konvaStage.style.backgroundImage = 'url("assets/wordContainer1.png")'),
      (bard.src = "assets/bard1.png"))
  } else if (backgroundThemes[backgroundOption] === "assets/background1.png") {
    ;((konvaStage.style.backgroundImage = 'url("assets/wordContainer2.png")'),
      (bard.src = "assets/bard2.png"))
  }
}
travel.addEventListener("click", changeBackground)

function updateThemes() {
  if ((background.style.backgroundImage = 'url("assets/background.png")')) {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer1.png")'
  } else if (
    (background.style.backgroundImage = 'url("assets/background.png")')
  ) {
    konvaStage.style.backgroundImage = 'url("assets/wordContainer2.png")'
  }
}
