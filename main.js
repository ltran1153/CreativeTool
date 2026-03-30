// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 500,
  height: 500,
})

const firstLayer = new Konva.Layer()

const circle = new Konva.Circle({
  x: 250,
  y: 250,
  radius: 50,
  fill: "red",
})

firstLayer.add(circle)
stage.add(firstLayer)

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

//keep track of when button is held
let isDrawing = false
let lastLine

//user presses mouse button
function drawMouseDown() {
  isDrawing = true
  const pos = stage.getPointerPosition()
  let newPoints = lastLine.points().concat(strings: [pos.x, pos.y]);
  lastLine.points(newPoints);
  lastLine = new Konva.line({
    stroke: "red",
    strokeWidth: 5,
    lineCap: "round",
    lineJoin: "round",
    points: [pos.x, pos.y, pos.x, pos.y],
  })
  firstLayer.add(lastLine)
}
stage.on("mousedown", drawMouseDown)
// user moves mouse
function drawMouseMove() {
  //don't run if not drawing
  if (isDrawing === false) {
    return
  }
  //if isDrawing is true
}
stage.on("mousemove", drawMouseMove)
// user releases mouse
function drawMouseUp() {
  isDrawing = false
}
stage.on("mouseup", drawMouseUp)
window.addEventListener( type: "mouseup", drawMouseUp)
