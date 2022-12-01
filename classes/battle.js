const Pokemon = require("./pokemon");

const Trainer = require(`${__dirname}/trainer.js`);
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
const pokemons = [
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
];

const random = Math.floor(Math.random() * pokemons.length);

class Battle {
  constructor(trainer, pokemon) {
    const npcPokemonX = new pokemons[random]();
    this.npcPokemon = npcPokemonX;
    this.trainer = new Trainer(trainer);
    this.trainer.catch(pokemon);
    this.pokemon = pokemon;
  }

  fight(pokemon) {
    if (
      this.trainer.getPokemon(this.pokemon).hitPoints <= 0 ||
      this.trainer2.getPokemon(this.pokemon2).hitPoints <= 0
    ) {
      console.log("The battle is over");
      return "GAME OVER";
    }
    // this is pokemon 2 fight conditions

    let multiply = 1;
    if (
      this.trainer.getPokemon(this.pokemon).isEffectiveAgainst(this.npcPokemon)
    ) {
      multiply = 0.75;
    }
    if (this.trainer.getPokemon(this.pokemon).isWeakTo(this.npcPokemon)) {
      multiply = 1.25;
    }
    const hitPoints1 = this.trainer.getPokemon(this.pokemon).hitPoints;
    const hitPoints2 = this.npcPokemon.hitPoints;

    this.npcPokemon.takeDamage(
      this.trainer.getPokemon(this.pokemon).useMove() * multiply
    );
    const damage1 = hitPoints1 - this.npcPokemon.hitPoints;

    console.log(`${this.trainer.getPokemon(this.pokemon).sound}`);
    console.log(
      `${this.trainer.getPokemon(this.pokemon).name} used ${
        this.trainer.getPokemon(this.pokemon).move
      } on ${this.npcPokemon.name} and ${
        this.npcPokemon.name
      } took ${damage1} damage and now has ${
        this.npcPokemon.hitPoints
      } hitpoints`
    );

    this.trainer
      .getPokemon(this.pokemon)
      .takeDamage(this.npcPokemon.useMove() * multiply);

    const damage2 =
      hitPoints2 - this.trainer.getPokemon(this.pokemon).hitPoints;
    console.log(`${this.npcPokemon.sound}`);
    console.log(
      `${this.npcPokemon.name} used ${this.npcPokemon.move} on ${
        this.trainer.getPokemon(this.pokemon).name
      } and ${
        this.trainer.getPokemon(this.pokemon).name
      } took ${damage2} damage and now has ${
        this.trainer.getPokemon(this.pokemon).hitPoints
      } hitpoints`
    );

    if (this.npcPokemon.hasFainted()) {
      console.log(`${this.trainer.name} has won!`);
    } else if (this.trainer.getPokemon(this.pokemon).hasFainted()) {
      console.log(`${this.trainer.name} has lost!`);
    }

    if (this.trainer.getPokemon(this.pokemon).name !== pokemon) {
      console.log("Pokemon not found");
    }
  }
}

module.exports = Battle;
