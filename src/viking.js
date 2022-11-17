// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(strength, health);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }

  //Viking Attack

  vikingAttack() {
    const randomViking = [Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];

    const saxonDamage = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return saxonDamage;
  }

 //Saxon Attack

  saxonAttack() {
    const randomViking = [Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[randomViking];
    const saxon = this.saxonArmy[randomSaxon];

    const vikingDamage = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    } else {
      return vikingDamage;
    }
  }
//show Status

  showStatus() {
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
