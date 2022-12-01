const {
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require(`${__dirname}/pokemons.js`);

class Pokeball {
  constructor() {
    this.quantity = 0;
    this.storage = {};
  }
  throw(pokemon) {
    if (pokemon === undefined) {
      if (this.quantity <= 0) {
        console.log("empty...");
        return "empty...";
      } else {
        console.log(`GO ${this.storage.name}!!`);
        return this.storage; // { 1: 'Charmanda' }
      }
    }
    if (this.quantity === 0) {
      this.quantity += 1;
      if (pokemon === "Charmander") {
        this.storage = new Charmander();
      } else if (pokemon === "Squirtle") {
        this.storage = new Squirtle();
      } else if (pokemon === "Bulbasaur") {
        this.storage = new Bulbasaur();
      } else if (pokemon === "Rattata") {
        this.storage = new Rattata();
      } else if (pokemon === "Eevee") {
        this.storage = new Eevee();
      } else if (pokemon === "Flareon") {
        this.storage = new Flareon();
      } else if (pokemon === "Vaporeon") {
        this.storage = new Vaporeon();
      } else if (pokemon === "Leafeon") {
        this.storage = new Leafeon();
      } else this.storage = new pokemon();
      console.log(`You caught ${this.storage.name}`);
    } else {
      console.log("There is already a pokemon here!!!");
    }
  }
  isEmpty() {
    if (this.quantity === 0) {
      return true;
    }
    return false;
  }
  contains() {
    if (this.quantity === 0) {
      return "empty...";
    }
    return this.storage.name;
  }
}

module.exports = Pokeball;
