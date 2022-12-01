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

const Pokeball = require(`${__dirname}/pokeball.js`);

class Trainer {
  constructor(name) {
    this.name = name;
    this.belt = [
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
    ];
  }
  catch(pokemon) {
    for (let i = 0; i < this.belt.length; i++) {
      if (this.belt[i].quantity === 0) {
        this.belt[i].throw(pokemon);
        return "Success!";
      }
    }
    console.log("You're out of Pokeballs!");
    return "You're out of Pokeballs!";
  }
  getPokemon(pokemonName) {
    for (let i = 0; i < this.belt.length; i++) {
      if (this.belt[i].storage.name === pokemonName) {
        if (this.belt[i].storage.hitPoints <= 0) {
          this.belt.pop();
          this.belt.push(new Pokeball());
        }
        return this.belt[i].throw();
      }
    }

    return "Error: Pokemon not found";
  }
}

module.exports = Trainer;
