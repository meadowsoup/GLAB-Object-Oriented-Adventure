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
          }
     },
     roll (mod = 0) {
          const result = Math.floor(Math.random() * 20) + 1 + mod;
          console.log(`${this.name} rolled a ${result}.`)
     }

};
// checking if inventory works
console.log("Sol's Inventory:");
adventurer.inventory.forEach(item => console.log(item));

// access nested "companions inventory"
console.log("Sunny's companion Bane has:");
adventurer.companion.companion.inventory.forEach(item => console.log(item));

// dice roll testing
console.log("Dice Roll:");
adventurer.roll();
adventurer.roll(2);
adventurer.roll(5);
adventurer.roll(10);

class Character {
     constructor(name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
     }
     roll (mod = 0) {
          const result = Math.floor(Math.random() * 20) + 1 + mod;
          console.log(`${this.name} rolled a ${result}.`)
     }

}

const sol = new Character("Sol");
sol.inventory = ["sword", "potion", "artifact"];
sol.companion = new Character("sunny");
sol.companion.type = "slime";
sol.companion.companion = new Character("bane");
sol.companion.companion.type = "dragon";
sol.companion.companion.inventory = ["bowler hat", "sunglasses"];

// log inventories & dice rolling
console.log("Sol's bag:");
sol.inventory.forEach(item => console.log(item));

console.log("Dice Roll:");
sol.roll();
sol.companion.roll();
sol.companion.companion.roll();

console.log("bane has the following:");
sol.companion.companion.inventory.forEach(item => console.log(item));

class Character {
     constructor(name) {
          this.name = name;
          this.health = Character.MAX_HEALTH;
          this.inventory = [];
     }
     
     static MAX_HEALTH = 100;
}

class Adventurer extends Character {
     static ROLES = ["Rune Master", "Spirit Master", "Black Smith"];
     
     constructor(name, role) {
          super(name);
          if (!Adventurer.ROLES.includes(role)) {
               throw new Error(`${role} is not valid! Choose from: ${Adventurer.ROLES.join(", ")}`)
          }

          this.role = role;
          this.inventory.push("bedroll", "50 gold coins")
     }

     scout() {
          console.log(`${this.name} is scouting the area...`);
          this.roll();
     }
}

class Companion extends Character {
     constructor(name, type) {
          super(name);
          this.type = type;
     }
     assist() {
          console.log(`${this.name} the ${this.type} is assisting!`);
          this.roll()
     }
}

const solAdv = new Adventurer("Sol", "Rune Master");
solAdv.inventory.push("sword", "potion", "artifact");

solAdv.companion = new Companion("sunny", "slime");

solAdv.companion.companion = new Companion("bane", "dragon");
solAdv.companion.companion.inventory.push("bowler hat", "sunglasses");

console.log("Actions:");
solAdv.roll();
solAdv.scout();
solAdv.companion.assist();

// factories help created many adventurers of the same role using names instead of individual objects
class AdventurerFactory {
     constructor(role) {
          if(!Adventurer.ROLES.includes(role)) {
               throw new Error(`Incorrect role: ${role}`);
          }

          this.role = role;
          this.adventurers = [];
     }

     generate(name) {
          const newAdventurer = new Adventurer(name, this.role);
          this.adventurers.push(newAdventurer);
          return newAdventurer;
     }

     findByName(name) {
          return this.adventurers.find(a => a.name === name);
     }
}

const spiritFactory = new AdventurerFactory("Spirit Master");
const solSpiritMaster = spiritFactory.generate("Sol");

console.log("Adventurers Generated:");
console.log(spiritFactory.adventurers);

class Adventurer extends Character {
     constructor(name, role) {
          super(name);
          this.role = role;
          this.inventory.push("bedroll", "50 gold coins");
     }
     
     duel(opponent) {
     console.log(`Duel begins: ${this.name} vs ${opponent.name}!`);
     while (this.health > 50 && opponent.health > 50) {
          let roll1 = Math.floor(Math.random() * 20) + 1;
          let roll2 = Math.floor(Math.random() * 20) + 1;

          if (roll1 > roll2) {
               opponent.health--;
          } else if (roll2 > roll1) {
               this.health--;
          }

          console.log(`${this.name} (Health ${this.health}) vs ${opponent.name} (Health: ${opponent.health})`);
     }
     
     console.log(`${this.health > 50 ? this.name : opponent.name} wins`);
     }
}

const solDuel = new Adventurer("Sol", "Rune Master");
const rival = new Adventurer("Rival", "Monarch");

solDuel.duel(rival);

