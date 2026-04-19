const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")
const ambient2 = document.getElementById("ambient")
const guitar2 = document.getElementById("guitar")
const ambientOn = document.getElementById("ambientOn")

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
