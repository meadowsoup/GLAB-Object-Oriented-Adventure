//* Adventurer is the OBJECT! from which we can access things (inventory especially)
const adventurer = {
     name: "Sol",
     health: 25,
     inventory: ["sword", "potion", "artifact"],
     companion: {        // object within object....
          name: "sunny",
          type: "slime",
          companion: {
               name: "bane",
               type: "dragon",
               inventory: ["bowler hat", "sunglasses"]
          },
          roll (mod = 0) {
               const result = Math.floor(Math.random() * 20) + 1 + mod;
               console.log(`${this.name} rolled a ${result}.`)
          }
     }
}

class Character {
     constructor(name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
     }
}