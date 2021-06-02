// FORK this starter file and save it to your own Repl.it account.




// Declare and initialize the 12 variables here:
let date = "Monday 2019-3-18"
let time = "10:05:34 AM"
console.log('-------------------------')
console.log(">     LAUNCH CHECKLIST")
console.log('-------------------------')
console.log ('* Date: '+ date)
console.log ('* Time: ' + time)
console.log ( )
console.log()
console.log('-------------------------')
console.log('>     ASTRONAUT INFO')
console.log('-------------------------')

const input = require('readline-sync');


let astroCount = input.question("* Number in crew... ")
//console.log (astroCount)
//console.log (Number(astroCount))
//let num1 = input.question("Enter a number: ");
//console.log (Number(num1))
//console.log(typeof Number(num1))

console.log ('* count:     ' +(Number(astroCount)))

//let astroCount = 2
let astroStatus = 'READY'
//console.log ('* count:     ' + astroCount)
console.log('* status:  ' + astroStatus)
console.log( )
console.log()
console.log('-------------------------')
console.log('>     FUEL DATA')
console.log('-------------------------')
let fuelTempCelcius =(-225)
console.log('* Fuel temp celcius:  ' + fuelTempCelcius +' C')
let fuelLevel =('100%')
console.log('* Fuel level:  '+ fuelLevel)
console.log()
console.log()
console.log('-------------------------')
console.log('>  MASS DATA')
console.log('-------------------------')
let averageAstroMass = 80.7
let crewMass = (astroCount * averageAstroMass )
console.log('*  Crew mass:  '+ crewMass + '  kg')
let fuelMassKg = 760000
console.log ('*  Fuel mass:  '+ fuelMassKg +'  kg')
let shuttleMassKg = 74842.31
console.log('*  Shuttle mass:  ' + shuttleMassKg + ' kg')
let totalMassKg = (crewMass+fuelMassKg+shuttleMassKg)
console.log('*  Total Mass:  '+ totalMassKg +'  kg')
console.log ()
console.log()
console.log('-------------------------')
console.log('>     FLIGHT PLAN')
console.log('-------------------------')
let weatherStatus = 'clear'
console.log('* weather:  '+ weatherStatus)
console.log()
console.log()
console.log('-------------------------')
console.log('>     OVERALL STATUS')
console.log('-------------------------')
let takeOff = ('YES')
console.log ('*  Clear for takeoff:  '+ takeOff)










// Write code to generate the LC04 report here:




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.