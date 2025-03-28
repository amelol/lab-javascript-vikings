class Viking extends Soldier {
  constructor(name, health, strength) {
    super (health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage();
  
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}