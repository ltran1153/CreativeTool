// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 600,
  height: 400,
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
const resetLayer = new Konva.Layer()

stage.add(storyLayer)
stage.add(adverbLayer)
stage.add(prepositionLayer)
stage.add(adjectiveLayer)
stage.add(verbLayer)
stage.add(nounLayer)
stage.add(resetLayer)

resetLayer.hide()
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
  "Quickly",
  "Slowly",
  "Awkwardly",
  "Gracefully",
  "Loudly",
  "Silently",
  "Boldly",
  "Carefully",
  "Hastily",
  "Eagerly",
  "Suspiciously",
  "Mysteriously",
  "Wildly",
  "Clumsily",
  "Bravely",
  "Foolishly",
  "Cheerfully",
  "Gleefully",
  "Sadly",
  "Angrily",
  "Sneakily",
  "Suddenly",
  "Abruptly",
  "Calmly",
  "Curiously",
  "Oddly",
  "Strangely",
  "Madly",
  "Playfully",
  "Proudly",
  "Reluctantly",
  "Shakily",
  "Sleepily",
  "Smoothly",
  "Softly",
  "Speedily",
  "Stealthily",
  "Swiftly",
  "Tightly",
  "Triumphantly",
  "Unusually",
  "Warmly",
  "Wickedly",
  "Wildly",
  "Briskly",
  "Gently",
  "Patiently",
  "Carelessly",
  "Fearfully",
  "Joyfully",
]
const prepositionsList = [
  "Above",
  "Across",
  "Against",
  "Along",
  "Among",
  "Around",
  "At",
  "Before",
  "Behind",
  "Below",
  "Beneath",
  "Beside",
  "Between",
  "Beyond",
  "By",
  "Inside",
  "Into",
  "Near",
  "Next to",
  "On",
  "Onto",
  "Opposite",
  "Outside",
  "Over",
  "Past",
  "Through",
  "Toward",
  "Under",
  "Underneath",
  "Upon",
  "Within",
  "Without",
  "Around",
  "Across from",
  "Alongside",
  "Amid",
  "Amongst",
  "Against",
  "Beforehand",
  "Behind",
  "Beneath",
  "Beside",
  "Beyond",
  "Close to",
  "Far from",
  "In front of",
  "In",
  "Off",
  "Toward",
  "Up",
]
const nounsList = [
  "Tomfoolery",
  "Chicken",
  "Soup",
  "Confusion",
  "Cash",
  "Goblin",
  "Banana",
  "Wizard",
  "Toaster",
  "Dragon",
  "Pickle",
  "Knight",
  "Hamster",
  "Cactus",
  "Pirate",
  "Mushroom",
  "Robot",
  "Penguin",
  "Sock",
  "Unicorn",
  "Taco",
  "Ghost",
  "Cheesecake",
  "Noodle",
  "Alien",
  "Sloth",
  "Duck",
  "Llama",
  "Sandwich",
  "Jellyfish",
  "Breadstick",
  "Vampire",
  "Squirrel",
  "Meatball",
  "Spaceship",
  "Octopus",
  "Pancake",
  "Dinosaur",
  "Cupcake",
  "Ninja",
  "Parrot",
  "Frog",
  "Burrito",
  "Mermaid",
  "Potato",
  "Crab",
  "Icecream",
  "Turtle",
  "Monster",
  "Balloon",
  "Chicken",
  "Marshmallow",
  "Fox",
  "Donut",
  "Skeleton",
]
const verbsList = [
  "Wheedle",
  "Flap",
  "Bamboozle",
  "Blindside",
  "Castigate",
  "Bounce",
  "Wobble",
  "Sprint",
  "Sneak",
  "Gobble",
  "Whisper",
  "Charge",
  "Tiptoe",
  "Climb",
  "Slither",
  "Zoom",
  "Crash",
  "Shuffle",
  "Glide",
  "Stumble",
  "Spin",
  "Juggle",
  "Chase",
  "Tumble",
  "Leap",
  "Drift",
  "Scream",
  "Laugh",
  "Slink",
  "Twist",
  "Slide",
  "Dodge",
  "Bump",
  "Poke",
  "Kick",
  "Toss",
  "Shake",
  "Snatch",
  "Chomp",
  "Blink",
  "Wander",
  "March",
  "Charge",
  "Flutter",
  "Roar",
  "Hover",
  "Splash",
  "Dig",
  "Hop",
  "Peek",
  "Dash",
  "Lurk",
  "Fumble",
  "Creep",
  "Snicker",
]
const adjectivesList = [
  "Bamboozled",
  "Preposterous",
  "Absurd",
  "Wobbly",
  "Goofy",
  "Quirky",
  "Zany",
  "Ridiculous",
  "Peculiar",
  "Silly",
  "Lopsided",
  "Flabbergasted",
  "Whimsical",
  "Wonky",
  "Cheeky",
  "Bizarre",
  "Dorky",
  "Snazzy",
  "Cranky",
  "Sassy",
  "Clumsy",
  "Shiny",
  "Squishy",
  "Slippery",
  "Jittery",
  "Giddy",
  "Grumpy",
  "Sneaky",
  "Wacky",
  "Nutty",
  "Dazzling",
  "Funky",
  "Mysterious",
  "Dreadful",
  "Gigantic",
  "Tiny",
  "Glorious",
  "Hilarious",
  "Sparkly",
  "Dramatic",
  "Chaotic",
  "Curious",
  "Sleepy",
  "Crooked",
  "Greedy",
  "Noisy",
  "Sticky",
  "Spooky",
  "Bouncy",
  "Fluffy",
]
//Fisher Yates random array shuffling equation.
function shuffleWords(array) {
  const shuffledWords = [...array] // copy array

  for (let i = shuffledWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    // swap elements
    ;[shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]]
  }

  return shuffledWords
}

const adjectiveBoxes = []
const verbBoxes = []
const nounBoxes = []
const prepositionBoxes = []
const adverbBoxes = []
const padding = 1
const gap = 4
const widthMargin = 40
const heightMargin = 30

//Adjective Layer
const twentyAdjectives = shuffleWords(adjectivesList).slice(0, 20)

twentyAdjectives.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 17,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    valid = true

    adjectiveBoxes.forEach((box) => {
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
      adjectiveBoxes.push(newBox)
    }
  }

  button.on("click", () => {
    selectedWords.adjective = word
    updateStory()
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
const twentyVerbs = shuffleWords(verbsList).slice(0, 20)
twentyVerbs.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 17,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    valid = true

    verbBoxes.forEach((box) => {
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
      verbBoxes.push(newBox)
    }
  }

  button.on("click", () => {
    selectedWords.verb = word
    updateStory()
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
const twentyNouns = shuffleWords(nounsList).slice(0, 20)
twentyNouns.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 17,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    valid = true

    nounBoxes.forEach((box) => {
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
      nounBoxes.push(newBox)
    }
  }

  button.on("click", () => {
    selectedWords.noun = word
    updateStory()
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
const twentyPrepositions = shuffleWords(prepositionsList).slice(0, 20)
twentyPrepositions.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 17,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    valid = true

    prepositionBoxes.forEach((box) => {
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
      prepositionBoxes.push(newBox)
    }
  }

  button.on("click", () => {
    selectedWords.preposition = word
    updateStory()
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

const twentyAdverbs = shuffleWords(adverbsList).slice(0, 20)
twentyAdverbs.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 17,
    fontFamily: "Arial",
    fill: "white",
    x: padding,
    y: padding,
  })

  const rect = new Konva.Rect({
    width: text.width() + padding * 2,
    height: text.height() + padding * 2,
  })

  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  let valid = false
  let x, y

  while (!valid) {
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    valid = true

    adverbBoxes.forEach((box) => {
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
      adverbBoxes.push(newBox)
    }
  }

  button.on("click", () => {
    selectedWords.adverb = word
    updateStory()
    adverbLayer.hide()
    storyLayer.show()
    resetLayer.show()
    resetLayer.draw()
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
const selectedWords = {
  adjective: "",
  verb: "",
  noun: "",
  preposition: "",
  adverb: "",
}
const storyTemplateList = [
  "The (noun) (adverb) (verb) over the (adjective) cave (preposition) the dark mountain.",
  "A (adjective) (noun) decided to (verb) (adverb) (preposition) the ancient ruins.",
  "The (noun) (verb) (adverb) through the (adjective) forest (preposition) the hidden lake.",
  "One (adjective) (noun) tried to (verb) (adverb) (preposition) the mysterious castle.",
  "A (noun) began to (verb) (adverb) (preposition) the (adjective) valley.",
]
function updateStory() {
  const storyTemplate =
    storyTemplateList[Math.floor(Math.random() * storyTemplateList.length)]
  const filledStory = storyTemplate
    .replace("(noun)", selectedWords.noun)
    .replace("(adverb)", selectedWords.adverb)
    .replace("(verb)", selectedWords.verb)
    .replace("(adjective)", selectedWords.adjective)
    .replace("(preposition)", selectedWords.preposition)

  story.text(filledStory)
  storyLayer.draw()
}
const story = new Konva.Text({
  x: 10,
  y: 10,
  width: stage.width() - 40, // keep it inside the stage
  fontSize: 30,
  fontFamily: "Arial",
  fill: "white",
})

storyLayer.add(story)
storyLayer.draw()

//Reset the tool to generate a new story.
const resetText = new Konva.Text({
  text: "New Story?",
  fontSize: 24,
  fontFamily: "Arial",
  fill: "white",
  x: padding,
  y: padding,
})

const resetContainer = new Konva.Rect({
  width: resetText.width() + padding * 2,
  height: resetText.height() + padding * 2,
  fill: "blue",
  cornerRadius: 5,
})

const resetButton = new Konva.Group({
  x: 20,
  y: 100,
})

resetButton.add(resetContainer)
resetButton.add(resetText)

resetButton.on("click", () => {
  resetContainer.fill("green")
  adjectiveBoxes.length = 0
  verbBoxes.length = 0
  nounBoxes.length = 0
  prepositionBoxes.length = 0
  adverbBoxes.length = 0

  adjectiveLayer.destroyChildren()
  verbLayer.destroyChildren()
  nounLayer.destroyChildren()
  prepositionLayer.destroyChildren()
  adverbLayer.destroyChildren()
  storyLayer.destroyChildren()

  //Adjective Layer
  const twentyAdjectives = shuffleWords(adjectivesList).slice(0, 20)

  twentyAdjectives.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 17,
      fontFamily: "Arial",
      fill: "white",
      x: padding,
      y: padding,
    })

    const rect = new Konva.Rect({
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    })

    const button = new Konva.Group()

    button.add(rect)
    button.add(text)

    let valid = false
    let x, y

    while (!valid) {
      x =
        widthMargin +
        Math.random() * (stage.width() - rect.width() - widthMargin * 2)
      y =
        heightMargin +
        Math.random() * (stage.height() - rect.height() - heightMargin * 2)

      const newBox = {
        x: x - gap,
        y: y - gap,
        width: rect.width() + gap * 2,
        height: rect.height() + gap * 2,
      }

      valid = true

      adjectiveBoxes.forEach((box) => {
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
        adjectiveBoxes.push(newBox)
      }
    }

    button.on("click", () => {
      selectedWords.adjective = word
      updateStory()
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
  const twentyVerbs = shuffleWords(verbsList).slice(0, 20)
  twentyVerbs.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 17,
      fontFamily: "Arial",
      fill: "white",
      x: padding,
      y: padding,
    })

    const rect = new Konva.Rect({
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    })

    const button = new Konva.Group()

    button.add(rect)
    button.add(text)

    let valid = false
    let x, y

    while (!valid) {
      x =
        widthMargin +
        Math.random() * (stage.width() - rect.width() - widthMargin * 2)
      y =
        heightMargin +
        Math.random() * (stage.height() - rect.height() - heightMargin * 2)

      const newBox = {
        x: x - gap,
        y: y - gap,
        width: rect.width() + gap * 2,
        height: rect.height() + gap * 2,
      }

      valid = true

      verbBoxes.forEach((box) => {
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
        verbBoxes.push(newBox)
      }
    }

    button.on("click", () => {
      selectedWords.verb = word
      updateStory()
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
  const twentyNouns = shuffleWords(nounsList).slice(0, 20)
  twentyNouns.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 17,
      fontFamily: "Arial",
      fill: "white",
      x: padding,
      y: padding,
    })

    const rect = new Konva.Rect({
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    })

    const button = new Konva.Group()

    button.add(rect)
    button.add(text)

    let valid = false
    let x, y

    while (!valid) {
      x =
        widthMargin +
        Math.random() * (stage.width() - rect.width() - widthMargin * 2)
      y =
        heightMargin +
        Math.random() * (stage.height() - rect.height() - heightMargin * 2)

      const newBox = {
        x: x - gap,
        y: y - gap,
        width: rect.width() + gap * 2,
        height: rect.height() + gap * 2,
      }

      valid = true

      nounBoxes.forEach((box) => {
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
        nounBoxes.push(newBox)
      }
    }

    button.on("click", () => {
      selectedWords.noun = word
      updateStory()
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
  const twentyPrepositions = shuffleWords(prepositionsList).slice(0, 20)
  twentyPrepositions.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 17,
      fontFamily: "Arial",
      fill: "white",
      x: padding,
      y: padding,
    })

    const rect = new Konva.Rect({
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    })

    const button = new Konva.Group()

    button.add(rect)
    button.add(text)

    let valid = false
    let x, y

    while (!valid) {
      x =
        widthMargin +
        Math.random() * (stage.width() - rect.width() - widthMargin * 2)
      y =
        heightMargin +
        Math.random() * (stage.height() - rect.height() - heightMargin * 2)

      const newBox = {
        x: x - gap,
        y: y - gap,
        width: rect.width() + gap * 2,
        height: rect.height() + gap * 2,
      }

      valid = true

      prepositionBoxes.forEach((box) => {
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
        prepositionBoxes.push(newBox)
      }
    }

    button.on("click", () => {
      selectedWords.preposition = word
      updateStory()
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

  const twentyAdverbs = shuffleWords(adverbsList).slice(0, 20)
  twentyAdverbs.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 17,
      fontFamily: "Arial",
      fill: "white",
      x: padding,
      y: padding,
    })

    const rect = new Konva.Rect({
      width: text.width() + padding * 2,
      height: text.height() + padding * 2,
    })

    const button = new Konva.Group()

    button.add(rect)
    button.add(text)

    let valid = false
    let x, y

    while (!valid) {
      x =
        widthMargin +
        Math.random() * (stage.width() - rect.width() - widthMargin * 2)
      y =
        heightMargin +
        Math.random() * (stage.height() - rect.height() - heightMargin * 2)

      const newBox = {
        x: x - gap,
        y: y - gap,
        width: rect.width() + gap * 2,
        height: rect.height() + gap * 2,
      }

      valid = true

      adverbBoxes.forEach((box) => {
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
        adverbBoxes.push(newBox)
      }
    }

    button.on("click", () => {
      selectedWords.adverb = word
      updateStory()
      adverbLayer.hide()
      storyLayer.show()
      resetLayer.show()
      resetLayer.draw()
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
  const selectedWords = {
    adjective: "",
    verb: "",
    noun: "",
    preposition: "",
    adverb: "",
  }
  const storyTemplateList = [
    "The (noun) (adverb) (verb) over the (adjective) cave (preposition) the dark mountain.",
    "A (adjective) (noun) decided to (verb) (adverb) (preposition) the ancient ruins.",
    "The (noun) (verb) (adverb) through the (adjective) forest (preposition) the hidden lake.",
    "One (adjective) (noun) tried to (verb) (adverb) (preposition) the mysterious castle.",
    "A (noun) began to (verb) (adverb) (preposition) the (adjective) valley.",
  ]
  function updateStory() {
    const storyTemplate =
      storyTemplateList[Math.floor(Math.random() * storyTemplateList.length)]
    const filledStory = storyTemplate
      .replace("(noun)", selectedWords.noun)
      .replace("(adverb)", selectedWords.adverb)
      .replace("(verb)", selectedWords.verb)
      .replace("(adjective)", selectedWords.adjective)
      .replace("(preposition)", selectedWords.preposition)

    story.text(filledStory)
    storyLayer.draw()
  }
  const story = new Konva.Text({
    x: 10,
    y: 10,
    width: stage.width() - 40, // keep it inside the stage
    fontSize: 30,
    fontFamily: "Arial",
    fill: "white",
  })

  storyLayer.add(story)
  storyLayer.draw()

  resetLayer.hide()
  storyLayer.hide()
  adverbLayer.hide()
  prepositionLayer.hide()
  adjectiveLayer.show()
  verbLayer.hide()
  nounLayer.hide()

  resetLayer.draw()
  adjectiveLayer.draw()
  verbLayer.draw()
  nounLayer.draw()
  prepositionLayer.draw()
  adverbLayer.draw()
  storyLayer.draw()
})

resetButton.on("mouseover", () => {
  document.body.style.cursor = "pointer"
})

resetButton.on("mouseout", () => {
  document.body.style.cursor = "default"
})
resetLayer.add(resetButton)
resetLayer.draw()
