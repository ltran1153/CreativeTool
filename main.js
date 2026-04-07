// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 1000,
  height: 1000,
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
const gap = 10

adjectivesList.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 24,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
    fill: "blue",
    cornerRadius: 5,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x = Math.random() * (stage.width() - rect.width())
    y = Math.random() * (stage.height() - rect.height())

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
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
      boxes.push(newBox)
    }
  }

  button.on("click", () => {
    rect.fill("green")
    adjectiveLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
  })

  adjectiveLayer.add(button)
})

adjectiveLayer.draw()
