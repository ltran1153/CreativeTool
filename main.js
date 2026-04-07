// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 500,
  height: 500,
})

//drawing feature
//feature analysis
//User goal: trying to draw a picture?
//represented model? cursor on canvas, defined canvas, brush select, brush size
//color? or would that be its own system
//how does it behave?
//move our cursor onto canvas. press mouse button down, move mouse, release mouse button
// what is the implement model? create a new line when mouse down, add that to line when mouse moves
//how does it interact with other features?
//color, brush texture, eraser, upload image

const adjectiveLayer = new konva.layer()
stage.add(adjectiveLayer)

const adjectivesList = [
  "Sublime",
  "Quaint",
  "Altruistic",
  "Bamboozled",
  "Preposterous",
]
const Xtranslation = Math.random() * stage.width()
const Ytranslation = Math.random() * stage.height()
