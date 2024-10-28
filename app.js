

// console.log(colors.red("red text"))
// console.log(colors.green('green text'))
// console.log(colors.blue("blue text"))

// const redWGreen = colors.red.bgGreen

// console.log(colors.red.bgGreen("hi"))



;(async () => {
const {blue} /*colors*/= require("ansi-colors")

const {getPokemonByNumber, getRandomPokemon} = require("./pokemon")

const names = require("./names.json")
console.log(names)


const bulbasour = await getRandomPokemon()
console.log(/*colors.*/blue(bulbasour.name))


})()