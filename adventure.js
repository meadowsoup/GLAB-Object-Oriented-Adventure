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

