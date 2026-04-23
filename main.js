// create the konva stage
const stage = new Konva.Stage({
  container: "konva-stage",
  width: 600,
  height: 400,
})

// a different layer for every different word class or content
const adjectiveLayer = new Konva.Layer()
const verbLayer = new Konva.Layer()
const nounLayer = new Konva.Layer()
const prepositionLayer = new Konva.Layer()
const adverbLayer = new Konva.Layer()
const storyLayer = new Konva.Layer()
const resetLayer = new Konva.Layer()

// add these layers to the konva stage
stage.add(storyLayer)
stage.add(adverbLayer)
stage.add(prepositionLayer)
stage.add(adjectiveLayer)
stage.add(verbLayer)
stage.add(nounLayer)
stage.add(resetLayer)

//The way that this project functions is that selecting a word from one layer
// will immediately take users to the next one, until they progress to the final story,
// where there will be a reset button, which will take users back to the
// beginning, and start over again with a different seed of words.

// hide all except adjective layer, as it will be the
// first layer users will see entering the project
resetLayer.hide()
storyLayer.hide()
adverbLayer.hide()
prepositionLayer.hide()
adjectiveLayer.show()
verbLayer.hide()
nounLayer.hide()

//50 words for adverbs
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

// 50 words for prepositions
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
//50 words for nouns
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
//50 words for verbs
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

// 50 words for adjectives
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
//Fisher Yates random array shuffling algorithm. This is a well known algorithm by web developers.
// It is considered one of the best ways to generate pseudo random seeds for arrays.
// I copied this algorithm from https://dev.to/tanvir_azad/fisher-yates-shuffle-the-right-way-to-randomize-an-array-4d2p
function shuffleWords(array) {
  const shuffledWords = [...array]

  for (let i = shuffledWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]]
  }

  return shuffledWords
}

//creating empty array boxes
const adjectiveBoxes = []
const verbBoxes = []
const nounBoxes = []
const prepositionBoxes = []
const adverbBoxes = []
//This const will be used to adjust placement of my elements,
//and will always be considered 1 pixel
const padding = 1

//This const will be used to ensure that no two words can be overlapped with one another
// by ensuring that each word must always be at least the gap distance away from each other
const gap = 4

//This const will be used as a margin for my stage, to ensure that words will only
// be generated inside an area closer to the center of the stage
const widthMargin = 62
const heightMargin = 52

//The functions and ideas behind the adjective layer will be repeated for the
// verb, noun, prepositions, and adverb layers

//Adjective Layer

//shuffling my adjectivesList array via the Fisher Yates algorithm,
// then selecting the first 20 word positions after shuffling
const twentyAdjectives = shuffleWords(adjectivesList).slice(0, 20)

//forEach applies effects in its bracket for every word individually in the selected array
twentyAdjectives.forEach((word) => {
  //each of the 20 words will be turned into text with this specific styling
  const text = new Konva.Text({
    text: word,
    fontSize: 20,
    fontFamily: "Julee",
    fill: "black",
    stroke: "green",
    strokeWidth: "0.45",
    x: padding,
    y: padding,
  })

  //these rectangles will be the same size as their text
  const rect = new Konva.Rect({
    width: text.width() + padding * 2, //padding = 1 therefore padding * 2 = 2 pixels
    height: text.height() + padding * 2,
  })
  //I group 2+ elements and adjust it as if it is 1 element
  const button = new Konva.Group()

  button.add(rect)
  button.add(text)

  //This is a collision algorrithm generated using chatGPT,
  //  The function is to make words appear at a random location inside the stage,
  // while making sure that the words wont appear in locations that overlap with one another.

  //when false, the position of the words are too close together
  let valid = false

  // x and y are the horizontal and vertical axis of the elements
  let x, y

  while (!valid) {
    // This algorithm will generate a  random location for placement of the words based on the x and y axis
    //ensuring the words are only generated inside the stage width and height to prevent clipping,
    // and within my height and width margins to make the words more concentrated at the center
    x =
      widthMargin +
      Math.random() * (stage.width() - rect.width() - widthMargin * 2)
    y =
      heightMargin +
      Math.random() * (stage.height() - rect.height() - heightMargin * 2)

    //generating a new area to place the words
    const newBox = {
      x: x - gap,
      y: y - gap,
      width: rect.width() + gap * 2,
      height: rect.height() + gap * 2,
    }

    //after generating the new area valid is assumed as true.
    valid = true

    // This algorithm generates a box inside the array each time a word "overlaps"
    // This is to ensure that the next area generated for the words will be different from
    // the areas inside the adjectiveBoxes array
    adjectiveBoxes.forEach((box) => {
      // This algorithm detects when two words are too close together as overlap
      const overlap =
        newBox.x < box.x + box.width &&
        newBox.x + newBox.width > box.x &&
        newBox.y < box.y + box.height &&
        newBox.y + newBox.height > box.y

      //when the words "overlap" valid = false therefore the algorithm starts again
      if (overlap) {
        valid = false
      }
    })

    if (valid) {
      // when valid, change the position of my word to the new x,y location
      button.position({ x, y })
      //add the overlapping position
      adjectiveBoxes.push(newBox)
    }
  }

  //when you click one of the words, these things will happen.
  button.on("click", () => {
    //update the word in the adjective class inside of selectedWords array
    selectedWords.adjective = word
    //play "click" sound
    playClick()
    // add that word from "selectedWords" into the final story
    updateStory()
    //hides itself and reveals the next layer in the sequence
    adjectiveLayer.hide()
    verbLayer.show()
    //update the bard's dialogue based on what layer is revealed next
    updateDialogue()
    verbLayer.draw()
    adjectiveLayer.draw()
    console.log("Clicked word:", word)
  })
  //adding effects when words are hovered over to show that they are clickable
  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
    button.scale({ x: 1.3, y: 1.3 })

    text.shadowColor("yellow")
    text.shadowBlur(12)
    text.shadowOpacity(1.0)
    adjectiveLayer.draw()
  })
  // returns words to default when no longer hovered over
  button.on("mouseout", () => {
    document.body.style.cursor = "default"
    text.fontSize(20)
    button.scale({ x: 1, y: 1 })

    text.shadowColor("none")
    text.shadowBlur(0)
    text.shadowOpacity(0)

    adjectiveLayer.draw()
  })

  adjectiveLayer.add(button)
})

adjectiveLayer.draw()

//Verb Layer
//repetition of adjective layer functions but adjusted for verbs
const twentyVerbs = shuffleWords(verbsList).slice(0, 20)
twentyVerbs.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 20,
    fontFamily: "Julee",
    fill: "black",
    stroke: "green",
    strokeWidth: "0.45",
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
    playClick()
    updateStory()
    verbLayer.hide()
    nounLayer.show()
    updateDialogue()
    verbLayer.draw()
    nounLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
    button.scale({ x: 1.3, y: 1.3 })

    text.shadowColor("yellow")
    text.shadowBlur(12)
    text.shadowOpacity(0.9)
    verbLayer.draw()
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
    text.fontSize(20)
    button.scale({ x: 1, y: 1 })

    text.shadowColor("none")
    text.shadowBlur(0)
    text.shadowOpacity(0)

    verbLayer.draw()
  })

  verbLayer.add(button)
})

verbLayer.draw()

//Noun Layer
// repetition of adjective layer functions but adjusted for nouns
const twentyNouns = shuffleWords(nounsList).slice(0, 20)
twentyNouns.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 20,
    fontFamily: "Julee",
    fill: "black",
    stroke: "green",
    strokeWidth: "0.45",
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
    playClick()
    updateStory()
    nounLayer.hide()
    prepositionLayer.show()
    updateDialogue()
    nounLayer.draw()
    prepositionLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
    button.scale({ x: 1.3, y: 1.3 })

    text.shadowColor("yellow")
    text.shadowBlur(12)
    text.shadowOpacity(0.9)
    nounLayer.draw()
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
    text.fontSize(20)
    button.scale({ x: 1, y: 1 })

    text.shadowColor("none")
    text.shadowBlur(0)
    text.shadowOpacity(0)

    nounLayer.draw()
  })

  nounLayer.add(button)
})

nounLayer.draw()

//Preposition Layer
// repetition of adjective layer functions but adjusted for prepositions
const twentyPrepositions = shuffleWords(prepositionsList).slice(0, 20)
twentyPrepositions.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 20,
    fontFamily: "Julee",
    fill: "black",
    stroke: "green",
    strokeWidth: "0.45",
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
    playClick()
    updateStory()
    prepositionLayer.hide()
    adverbLayer.show()
    updateDialogue()
    prepositionLayer.draw()
    adverbLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
    button.scale({ x: 1.3, y: 1.3 })

    text.shadowColor("yellow")
    text.shadowBlur(12)
    text.shadowOpacity(0.9)
    prepositionLayer.draw()
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
    text.fontSize(20)
    button.scale({ x: 1, y: 1 })

    text.shadowColor("none")
    text.shadowBlur(0)
    text.shadowOpacity(0)

    prepositionLayer.draw()
  })
  prepositionLayer.add(button)
})

prepositionLayer.draw()

//Adverb Layer
// repetition of adjective layer functions but adjusted for adverbs
const twentyAdverbs = shuffleWords(adverbsList).slice(0, 20)
twentyAdverbs.forEach((word) => {
  const text = new Konva.Text({
    text: word,
    fontSize: 20,
    fontFamily: "Julee",
    fill: "black",
    stroke: "green",
    strokeWidth: "0.45",
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
    playClick()
    updateStory()
    adverbLayer.hide()
    storyLayer.show()
    resetLayer.show()
    updateDialogue()
    playGuitar()
    resetLayer.draw()
    adverbLayer.draw()
    storyLayer.draw()
    console.log("Clicked word:", word)
  })

  button.on("mouseover", () => {
    document.body.style.cursor = "pointer"
    button.scale({ x: 1.3, y: 1.3 })

    text.shadowColor("yellow")
    text.shadowBlur(12)
    text.shadowOpacity(0.9)
    adverbLayer.draw()
  })

  button.on("mouseout", () => {
    document.body.style.cursor = "default"
    text.fontSize(20)
    button.scale({ x: 1, y: 1 })

    text.shadowColor("none")
    text.shadowBlur(0)
    text.shadowOpacity(0)

    adverbLayer.draw()
  })

  adverbLayer.add(button)
})

adverbLayer.draw()

//Story Layer
// array that will store the selcted adjectives, verbs, nouns, prepositions, and adverbs
const selectedWords = {
  adjective: "",
  verb: "",
  noun: "",
  preposition: "",
  adverb: "",
}
//array of stories to later be updated by selected words
const storyTemplateList = [
  "The (noun) (adverb) (verb) over the (adjective) cave (preposition) the dark mountain.",
  "A (adjective) (noun) decided to (verb) (adverb) (preposition) the ancient ruins.",
  "The (noun) (verb) (adverb) through the (adjective) forest (preposition) the hidden lake.",
  "One (adjective) (noun) tried to (verb) (adverb) (preposition) the mysterious castle.",
  "A (noun) began to (verb) (adverb) (preposition) the (adjective) valley.",
]

//This function will use the words inside the selectedWords array to update the story
function updateStory() {
  const storyTemplate =
    //randomly select 1 story template from the array
    storyTemplateList[Math.floor(Math.random() * storyTemplateList.length)]

  // replace every word class' word based on the words stored inside the selectedWords array
  const filledStory = storyTemplate
    .replace("(noun)", selectedWords.noun)
    .replace("(adverb)", selectedWords.adverb)
    .replace("(verb)", selectedWords.verb)
    .replace("(adjective)", selectedWords.adjective)
    .replace("(preposition)", selectedWords.preposition)

  //the story text be the story after it is filled
  story.text(filledStory)
  storyLayer.draw()
}

//adjusting the story text to fit inside the konva stage and match the project's aesthetic
const story = new Konva.Text({
  x: 60,
  y: 50,
  width: stage.width() - 60 * 2,
  height: stage.height() - 40 * 2,
  fontSize: 24,
  fontFamily: "Eagle Lake",
  fill: "black",
  lineHeight: 1.3,
})

storyLayer.add(story)
storyLayer.draw()

//Reset the tool to generate a new story.
// the text for my reset button
const resetText = new Konva.Text({
  text: "New Story?",
  fontSize: 30,
  fontFamily: "Eagle Lake",
  fill: "black",
})
//adjusting the position of the text
resetText.position({ x: 190, y: 145 })

// button area based on the size of the text
const resetContainer = new Konva.Rect({
  //added additional space for the box to avoid the issue where sometimes
  // the box would shrink and not fit the text. As the box is invisible,
  // I don't have to worry about layout.
  width: resetText.width() + 24,
  height: resetText.height() + 16,
})

//grouping together the text and container into 1 element
//and further adjusting the location of the button.
const resetButton = new Konva.Group({
  x: 20,
  y: 100,
})

resetButton.add(resetContainer)
resetButton.add(resetText)

//on click these events will happen
resetButton.on("click", () => {
  //delete all of the stored data inside these arrays, This is because
  // after a few new stories, the overlapping areas becomes overfilled
  // and there is no area for new words
  adjectiveBoxes.length = 0
  verbBoxes.length = 0
  nounBoxes.length = 0
  prepositionBoxes.length = 0
  adverbBoxes.length = 0

  //delete all contents inside these layers
  adjectiveLayer.destroyChildren()
  verbLayer.destroyChildren()
  nounLayer.destroyChildren()
  prepositionLayer.destroyChildren()
  adverbLayer.destroyChildren()
  storyLayer.destroyChildren()

  //Repeat the entire code above once again to generate a new seed of words and stories.
  //Adjective Layer
  const twentyAdjectives = shuffleWords(adjectivesList).slice(0, 20)

  twentyAdjectives.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 20,
      fontFamily: "Julee",
      fill: "black",
      stroke: "green",
      strokeWidth: "0.45",
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
      playClick()
      updateStory()
      adjectiveLayer.hide()

      verbLayer.show()
      updateDialogue()
      verbLayer.draw()
      adjectiveLayer.draw()
      console.log("Clicked word:", word)
    })

    button.on("mouseover", () => {
      document.body.style.cursor = "pointer"
      button.scale({ x: 1.3, y: 1.3 })

      text.shadowColor("yellow")
      text.shadowBlur(12)
      text.shadowOpacity(0.9)
      adjectiveLayer.draw()
    })

    button.on("mouseout", () => {
      document.body.style.cursor = "default"
      text.fontSize(20)
      button.scale({ x: 1, y: 1 })

      text.shadowColor("none")
      text.shadowBlur(0)
      text.shadowOpacity(0)

      adjectiveLayer.draw()
    })

    adjectiveLayer.add(button)
  })

  adjectiveLayer.draw()

  //Verb Layer
  const twentyVerbs = shuffleWords(verbsList).slice(0, 20)
  twentyVerbs.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 20,
      fontFamily: "Julee",
      fill: "black",
      stroke: "green",
      strokeWidth: "0.45",
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
      playClick()
      updateStory()
      verbLayer.hide()
      nounLayer.show()
      updateDialogue()
      verbLayer.draw()
      nounLayer.draw()
      console.log("Clicked word:", word)
    })

    button.on("mouseover", () => {
      document.body.style.cursor = "pointer"
      button.scale({ x: 1.3, y: 1.3 })

      text.shadowColor("yellow")
      text.shadowBlur(12)
      text.shadowOpacity(0.9)
      verbLayer.draw()
    })

    button.on("mouseout", () => {
      document.body.style.cursor = "default"
      text.fontSize(20)
      button.scale({ x: 1, y: 1 })

      text.shadowColor("none")
      text.shadowBlur(0)
      text.shadowOpacity(0)

      verbLayer.draw()
    })

    verbLayer.add(button)
  })

  verbLayer.draw()

  //Noun Layer
  const twentyNouns = shuffleWords(nounsList).slice(0, 20)
  twentyNouns.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 20,
      fontFamily: "Julee",
      fill: "black",
      stroke: "green",
      strokeWidth: "0.45",
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
      playClick()
      updateStory()
      nounLayer.hide()
      prepositionLayer.show()
      updateDialogue()
      nounLayer.draw()
      prepositionLayer.draw()
      console.log("Clicked word:", word)
    })

    button.on("mouseover", () => {
      document.body.style.cursor = "pointer"
      button.scale({ x: 1.3, y: 1.3 })

      text.shadowColor("yellow")
      text.shadowBlur(12)
      text.shadowOpacity(0.9)
      nounLayer.draw()
    })

    button.on("mouseout", () => {
      document.body.style.cursor = "default"
      text.fontSize(20)
      button.scale({ x: 1, y: 1 })

      text.shadowColor("none")
      text.shadowBlur(0)
      text.shadowOpacity(0)

      nounLayer.draw()
    })

    nounLayer.add(button)
  })

  nounLayer.draw()

  //Preposition Layer
  const twentyPrepositions = shuffleWords(prepositionsList).slice(0, 20)
  twentyPrepositions.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 20,
      fontFamily: "Julee",
      fill: "black",
      stroke: "green",
      strokeWidth: "0.45",
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
      playClick()
      updateStory()
      prepositionLayer.hide()
      adverbLayer.show()
      updateDialogue()
      prepositionLayer.draw()
      adverbLayer.draw()
      console.log("Clicked word:", word)
    })

    button.on("mouseover", () => {
      document.body.style.cursor = "pointer"
      button.scale({ x: 1.3, y: 1.3 })

      text.shadowColor("yellow")
      text.shadowBlur(12)
      text.shadowOpacity(0.9)
      prepositionLayer.draw()
    })

    button.on("mouseout", () => {
      document.body.style.cursor = "default"
      text.fontSize(20)
      button.scale({ x: 1, y: 1 })

      text.shadowColor("none")
      text.shadowBlur(0)
      text.shadowOpacity(0)

      prepositionLayer.draw()
    })

    prepositionLayer.add(button)
  })

  prepositionLayer.draw()

  //Adverb Layer

  const twentyAdverbs = shuffleWords(adverbsList).slice(0, 20)
  twentyAdverbs.forEach((word) => {
    const text = new Konva.Text({
      text: word,
      fontSize: 20,
      fontFamily: "Julee",
      fill: "black",
      stroke: "green",
      strokeWidth: "0.45",
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
      playClick()
      updateStory()

      adverbLayer.hide()
      storyLayer.show()
      resetLayer.show()
      updateDialogue()
      playGuitar()
      resetLayer.draw()
      adverbLayer.draw()
      storyLayer.draw()
      console.log("Clicked word:", word)
    })

    button.on("mouseover", () => {
      document.body.style.cursor = "pointer"
      button.scale({ x: 1.3, y: 1.3 })

      text.shadowColor("yellow")
      text.shadowBlur(12)
      text.shadowOpacity(0.9)
      adverbLayer.draw()
    })

    button.on("mouseout", () => {
      document.body.style.cursor = "default"
      text.fontSize(20)
      button.scale({ x: 1, y: 1 })

      text.shadowColor("none")
      text.shadowBlur(0)
      text.shadowOpacity(0)

      adverbLayer.draw()
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
    x: 60,
    y: 50,
    width: stage.width() - 60 * 2,
    height: stage.height() - 40 * 2,
    fontSize: 24,
    fontFamily: "Eagle Lake",
    fill: "black",
    lineHeight: 1.3,
  })

  storyLayer.add(story)
  storyLayer.draw()

  //resets to the beginning where the adjective layer is revealed and everything
  //else is hidden
  resetLayer.hide()
  storyLayer.hide()
  adverbLayer.hide()
  prepositionLayer.hide()
  adjectiveLayer.show()
  verbLayer.hide()
  nounLayer.hide()
  //update bard dialogue based on layer shown
  updateDialogue()
  //play ambient sound once again.
  playAmbient()
  resetLayer.draw()
  adjectiveLayer.draw()
  verbLayer.draw()
  nounLayer.draw()
  prepositionLayer.draw()
  adverbLayer.draw()
  storyLayer.draw()
})

//adding effects to the button when it is hovered over to show it can be clicked
resetButton.on("mouseover", () => {
  document.body.style.cursor = "pointer"

  resetText.shadowColor("yellow")
  resetText.shadowBlur(12)
  resetText.shadowOpacity(0.9)
})

//reset to default when no longer hovered over
resetButton.on("mouseout", () => {
  document.body.style.cursor = "default"

  resetText.shadowColor("none")
  resetText.shadowBlur(0)
  resetText.shadowOpacity(0)
})
resetLayer.add(resetButton)
resetLayer.draw()

//Character dialogue box
// This function will update the bard's dialogue box based on selection and visible layer
// I am planning to add more dialogue and interactions later on.
const bardDialogue = document.getElementById("dialogue")
function updateDialogue() {
  //This function will update the bard's dialogue based on what layer is currently showing.
  if (adjectiveLayer.visible()) {
    bardDialogue.textContent =
      "hmmm, lets try something else. \n Select an adjective"
  } else if (verbLayer.visible()) {
    bardDialogue.textContent = "Select a verb"
  } else if (nounLayer.visible()) {
    bardDialogue.textContent = "Select a noun"
  } else if (prepositionLayer.visible()) {
    bardDialogue.textContent = "Select a preposition"
  } else if (adverbLayer.visible()) {
    bardDialogue.textContent = "Select an adverb"
  } else if (storyLayer.visible()) {
    bardDialogue.textContent = "I just wrote absolute cinema!"
  }
}

//Sound functions
//adding sound feedback to my project's interactions,
//the sounds are designed to engage the users and make my project more immersive.
const click = document.getElementById("click")
const ambient = document.getElementById("ambient")
const guitar = document.getElementById("guitar")

//whenever the user selects a word, this sound will play
function playClick() {
  //resets sound clip to the beginning
  click.currentTime = 0
  click.play()
}
// This is the background music that will be playing outside of when the story layer is shown
function playAmbient() {
  //pause guitar before playing ambient so sounds don't overlap
  guitar.pause()
  ambient.play()
}

// This is a guitar tune that will be played when users reach the story layer.
// The idea behind this is that the bard plays their guitar while telling the tale
function playGuitar() {
  //pause ambient before playing guitar so sounds don't overlap
  ambient.pause()
  guitar.play()
}
