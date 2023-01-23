// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;

    }
    attack () {
        return this.strength
    }

    receiveDamage(thedamage) {
       this.thedamage = thedamage
       this.health = this.health - this.thedamage;   
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(name,  health, strength)
    this.name = name;
    this.health = health;
    this.strength = strength;
    
    } 

    attack () {
        return this.strength
    }
    receiveDamage(thedamage) {
       this.thedamage = thedamage
       this.health = this.health - this.thedamage; 
       if (this.health > 0) 
        return `${this.name} has received ${this.thedamage} points of damage`;
        else return `${this.name} has died in act of combat`  
    }
    
    battleCry() {
    return "Odin Owns You All!";}
    
}


// Saxon
class Saxon extends Soldier {

    attack () {
        return this.strength
    }

    receiveDamage(thedamage) {
        this.thedamage = thedamage
        this.health = this.health - this.thedamage; 
        if (this.health > 0) 
         return `A Saxon has received ${this.thedamage} points of damage`;
         else return "A Saxon has died in combat"
         
     }
        
}
 


// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
        

    }
   

    addViking(vikingObject) {
        this.vikingArmy.push(vikingObject)
    }
    
    addSaxon(saxonObject) {
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack() {
    this.vikingArmy(Math.ceiling(Math.random() * this.strength))
     
    }
    saxonAttack() {}
    showStatus() {}


}

/*function selectRandom(arr) {
    if (arr.length === 0) { return undefined; }
    let randHolder = Math.floor(Math.random() * arr.length);
    return arr[randHolder];
}

*/