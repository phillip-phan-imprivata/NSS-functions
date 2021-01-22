//Best in Show
const favoriteBreed = (breed) => {
  if (breed === "meow") {
    return "I like cats"
  } else {
  return `My favorite dog breed is ${breed}`
  }
}

let myFavorite = favoriteBreed("pitbull")
let catFavorite = favoriteBreed("meow")

console.log(`When it comes to pets ${myFavorite}`)
console.log(`When it comes to pets ${catFavorite}`)

//Addition
const add = (a, b, c) => {
  return a + b + c
}

console.log(add(17, 4, 11))

//Self-Driving Cars
const go = (direction, speed) => {
  console.log(`The car is moving ${direction} at ${speed} mph.`)
  if (speed > 75) {
    console.log("SLOW DOWN!")
  }
}

go("in circles", 82)

//Evens or Odds
const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

let numArr = [2, 3, 4, 5, 6, 7, 8]

console.log(evenOrOdd(68))
console.log(evenOrOdd(69))
console.log(evenOrOdd(0))

for (const num of numArr) {
  console.log(evenOrOdd(num))
}

//Double Functions
const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

const filterWords = (words) => {
  let newArr = []
  for (const word of words) {
    if (word.startsWith("k") === false) {
      newArr.push(word)
    }
  }
  return newArr
}

const buildString = (arr) => {
  return arr.join(" ")
}

let newWords = filterWords(words)
let newString = buildString(newWords)
console.log(newString)

//You Can Tune a Piano, But You Can't...
const catchTuna = (prob) => {
  const cast = Math.random() * prob
  if (cast >= 1) {
    return "Sven came up empty-handed. :("
  } else if (cast < 1) {
    return "Sven hooked a tuna! :)"
  }
}

let svenCast = catchTuna(3)
console.log(svenCast)

//Fast Food
const orderMeal = (sandwich, side, drink, dessert) => {
  return {
    "sandwich": sandwich,
    "dessert": side,
    "drink": drink,
    "side": dessert
  }
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
console.log(takeOutBag)

//Same Chores, Different Days
const goStore = (person) => {
  return `${person.firstName} ${person.lastName} went to the grocery store`
}
const takeTrash = (person) => {
  return `${person.firstName} ${person.lastName} took the trash out`
}
const sweepFloor = (person) => {
  return `${person.firstName} ${person.lastName} swept the floor`
}
const mopFloor = (person) => {
  return `${person.firstName} ${person.lastName} mopped the floor`
}
const cookFood = (person) => {
  return `${person.firstName} ${person.lastName} cooked food`
}
const doLaundry = (person) => {
  return `${person.firstName} ${person.lastName} did laundry`
}

const lazyDayPlanner = (chore, person, day) => {
  return `${chore(person)} on ${day}`
}

const busyDayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
  return `On ${day}, ${firstChore(person)} and ${secondChore(person)} and ${thirdChore(person)}.`
}

let yomama = {
  firstName: "Yo",
  lastName: "Mama"
}

console.log(lazyDayPlanner(sweepFloor, yomama, "Tuesday"))
console.log(busyDayPlanner(takeTrash, goStore, cookFood, yomama, "Friday"))