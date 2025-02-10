//* Adventurer is the OBJECT! from which we can access things (inventory especially)
const adventurer = {
     name: "Sol",
     health: 25,
     inventory: ["sword", "potion", "artifact"],
     companion: {  // object within object....
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

const sol = new Character("Sol");
sol.inventory = ["sword", "potion", "artifact"];
sol.companion = new Character("sunny");
sol.companion.type = "slime";
sol.companion.companion = new Character("bane");
sol.companion.companion.type = "dragon";
sol.companion.companion.inventory = ["bowler hat", "sunglasses"];

class Adventurer extends Character {
     constructor(name, role) {
          super(name);
          // adventurers have specialized roles.
          this.role = role;
          // every adventurer starts with a bed and 50 gold.
          this.inventory.push("bedroll", "50 gold coins");
     }
     // Adventurers have the ability to scout ahead of them.
     scout() {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
     }
}