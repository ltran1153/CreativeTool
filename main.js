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

const adjectiveLayer = new Konva.Layer()
stage.add(adjectiveLayer)

const adjectivesList = [
  "Sublime",
  "Quaint",
  "Altruistic",
  "Bamboozled",
  "Preposterous",
]

const boxes = []
const padding = 10

adjectivesList.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 24,
    fontFamily: "Arial",
    fill: "white",
  })

  const button = new Konva.Rect({
    width: text.width(),
    height: text.height(),
    fill: "blue",
    cornerRadius: 5,
  })

  let x, y
  let valid = false

  while (!valid) {
    x = Math.random() * (stage.width() - text.width())
    y = Math.random() * (stage.height() - text.height())

    const newBox = {
      x: x - padding,
      y: y - padding,
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    }

    valid = true

    boxes.forEach((box) => {
      const overlap =
        newBox.x < box.x + box.width &&
        newBox.x + newBox.width > box.x &&
        newBox.y < box.y + box.height &&
        newBox.y + newBox.height > box.y

      if (overlap) {
        valid = false
      }
    })

    if (valid) {
      button.position({ x, y })
      text.position({ x, y })

      adjectiveLayer.add(button)
      adjectiveLayer.add(text)

      boxes.push(newBox)
    }
  }
})

adjectiveLayer.draw()

adjectiveLayer.draw()
