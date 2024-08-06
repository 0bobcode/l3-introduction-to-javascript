console.log("hello javascript")
const myName="Bob Chopra"
let age=8
let learning="computer scince,tennis,computer scince,math,English,chess ,running,tennis,gaming"

//lets print virables combined with a string
let intro = "hello my name is " + myName + " and i am " + age +" years old and i enjoy learning " + learning +"."
console.log(intro)
// log using template literals
let intro2 = `hello  my name is ${myName} and i am ${age} years old and i enjoy learning ${learning}`
console.log(intro2)

//lets use template literals to combine string & variable
let instructor = " amith"
//back ticks represent template literals ``
//dollar sybmol followed by flower brackets which will hold the variable name 
let insIntro = `Hai i am ${instructor} and i teach ${myName} Javascript`
console.log(insIntro)

//Datatypes
let dtString = "hey i am a string"
let dtNumber = 437
let dtBooleanT = true
let dtBooleanF = false

//identifiying data types using typeof
console.log(typeof(dtString))
console.log(typeof(dtNumber))
console.log(typeof(dtBooleanT))
console.log(typeof(dtBooleanF))
console.log(`the data type of varible age is `,typeof(age))