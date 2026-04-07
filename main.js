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
const verbLayer = new Konva.Layer()
const nounLayer = new Konva.Layer()
const prepositionLayer = new Konva.Layer()
const adverbLayer = new Konva.Layer()
const storyLayer = new Konva.Layer()

stage.add(storyLayer)
stage.add(adverbLayer)
stage.add(prepositionLayer)
stage.add(adjectiveLayer)
stage.add(verbLayer)
stage.add(nounLayer)

storyLayer.hide()
adverbLayer.hide()
prepositionLayer.hide()
adjectiveLayer.show()
verbLayer.hide()
nounLayer.hide()

const adverbsList = [
  "Hopelessly",
  "Obediently",
  "Jovially",
  "Reluctantly",
  "Rampantly",
]
const prepositionsList = [
  "Among",
  "Between",
  "Underneath",
  "Graced with",
  "Lack of",
]
const nounsList = ["Tomfoolery", "Chicken", "Soup", "Confusion", "Cash"]
const verbsList = ["Wheedle", "Flap", "Bamboozle", "Blindside", "Castigate"]
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

//Adjective Layer
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
    adjectiveLayer.hide()
    verbLayer.show()
    verbLayer.draw()
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

//Verb Layer
verbsList.forEach((word) => {
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
    verbLayer.hide()
    nounLayer.show()
    verbLayer.draw()
    nounLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
  })

  verbLayer.add(button)
})

verbLayer.draw()

//Noun Layer
nounsList.forEach((word) => {
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
    nounLayer.hide()
    prepositionLayer.show()
    nounLayer.draw()
    prepositionLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
  })

  nounLayer.add(button)
})

nounLayer.draw()

//Preposition Layer
prepositionsList.forEach((word) => {
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
    prepositionLayer.hide()
    adverbLayer.show()
    prepositionLayer.draw()
    adverbLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
  })

  prepositionLayer.add(button)
})

prepositionLayer.draw()

//Adverb Layer

adverbsList.forEach((word) => {
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
    adverbLayer.hide()
    storyLayer.show()
    adverbLayer.draw()
    storyLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
  })

  adverbLayer.add(button)
})

adverbLayer.draw()

//Story Layer
const story = new Konva.Text({
  x: 10,
  y: 10,
  width: stage.width() - 40, // keep it inside the stage
  text: "The (noun) (adverb) (verb) over the (adjective) cave (preposition) the dark mountain.",
  fontSize: 30,
  fontFamily: "Arial",
  fill: "white",
})

storyLayer.add(story)
storyLayer.draw()
