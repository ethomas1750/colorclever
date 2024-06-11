const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const color1 = getInput(1)
const color2 = getInput(2)

function definitiveOrNot(color1,color2) {
    if (color1 === undefined && color2 === undefined) {
         return "You did not put any colors for an input!!!"
     } else if (isValidSecondary(color1) === true) {
         return "You mixed " + colorDeconstructor(color1) + " to get " + color1
     } else if (isValidPrimary(color1) === true && isValidPrimary(color2) === true && color1 !== color2) {
         return color1 + " " + color2 + " will get you " + colorCombinator(color1,color2)/     } else if ((isValidPrimary(color1) === true && isValidPrimary(color2)=== false) || (isValidPrimary(color2) === true && isValidPrimary(color1)=== false)){
         return "I can not mix these colors, these computing systems are unable to compute that."
     } else if (isValidSecondary(color2) === true) {
         return color2 + " can be split into " + colorDeconstructor(color2) + " but I cannot do anything else with " + color1
     } else {/         return "You're doing too much!"
     }
 }
 console.log(definitiveOrNot(color1,color2)) } 


