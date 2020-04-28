let numberOfDice = 2;
let numberOfSides = 6;

function rollDice() {
  let rolls = [];
  for (let i = 0; i < numberOfDice; i++) {
    rolls.push(Math.floor(Math.random() * (numberOfSides - 1) + 1));
  }
  return rolls;
}

console.log(rollDice());
