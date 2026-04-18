const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const ambient2 = document.getElementById("ambient")
const guitar2 = document.getElementById("guitar")
const ambientOn = document.getElementById("ambientOn")

IntroDialog.showModal()

Acknowledged.addEventListener("click", CloseDialog)
function CloseDialog() {
  IntroDialog.close()
  ambient2.play()
  console.log("playing")
}

function muteAmbient() {
  ambient2.muted = !ambient2.muted

  if (ambient2.muted) {
    ambientOn.textContent = "Ambient: Off"
  } else {
    ambientOn.textContent = "Ambient: On"
  }
}

ambientOn.addEventListener("click", muteAmbient)
