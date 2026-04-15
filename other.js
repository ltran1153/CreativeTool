const IntroDialog = document.getElementById("Warning")
const Acknowledged = document.getElementById("Acknowledged")

IntroDialog.showModal()
// This function will close the popup dialog box when clicking the button inside it.
Acknowledged.addEventListener("click", CloseDialog)

function CloseDialog() {
  IntroDialog.close()
  Tone.start()
}