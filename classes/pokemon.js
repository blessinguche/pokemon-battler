class Pokemon {
  constructor(name, hitPoints, attackDamage, move = "Tackle", type = "Normal") {
    this.name = name;
    this.type = type;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
    this.sound = `${name.slice(0, 3)}... ${name}!`;
  }
  isEffectiveAgainst(pokemonObject) {
    if (this.type === "Fire" && pokemonObject.type === "Grass") {
      return true;
    }
    if (this.type === "Water" && pokemonObject.type === "Fire") {
      return true;
    }
    if (this.type === "Grass" && pokemonObject.type === "Water") {
      return true;
    }
    return false;
  }
  isWeakTo(pokemonObject) {
    if (this.type === "Grass" && pokemonObject.type === "Fire") {
      return true;
    }
    if (this.type === "Fire" && pokemonObject.type === "Water") {
      return true;
    }
    if (this.type === "Water" && pokemonObject.type === "Grass") {
      return true;
    }
    return false;
  }
  takeDamage(damageNumber) {
    this.hitPoints = this.hitPoints - damageNumber;
    return damageNumber
  }
  useMove() {
    // console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitPoints <= 0) {
      return true;
    }
    return false;
  }
}
module.exports = { Pokemon };
