const { Pokemon } = require(`${__dirname}/pokemon.js`);

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

class Battle {
  constructor(trainer, pokemon) {
    // const npcPokemonX = new pokemons[random]();
    this.npcPokemon;
    this.trainer = new Trainer(trainer);
    this.trainer.catch(pokemon);
    this.pokemon = pokemon;
    this.matchRound = 1;
  }

  fight(pokemon) {
    const random = Math.floor(Math.random() * pokemons.length);
    const npcPokemonX = new pokemons[random]();
    this.npcPokemon = npcPokemonX;

    if (this.matchRound === 1) {
      console.log(
        `You start your journey with just a ${
          this.trainer.getPokemon(this.pokemon).name
        } in your belt\nYou wander into the Forbidden Forest...\nA Wild ${
          this.npcPokemon.name
        } has appeared!\nFight it to capture it!`
      );
    } else if (this.matchRound === 2) {
    }
    if (
      this.trainer.getPokemon(this.pokemon).hitPoints <= 0 ||
      this.trainer2.getPokemon(this.pokemon2).hitPoints <= 0
    ) {
      console.log("The battle is over");
      return "matchRound OVER";
    }
    // this is pokemon 2 fight conditions
    while (
      !this.npcPokemon.hasFainted() ||
      !this.trainer.getPokemon(this.pokemon).hasFainted()
    ) {
      let multiply = 1;
      if (
        this.trainer
          .getPokemon(this.pokemon)
          .isEffectiveAgainst(this.npcPokemon)
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
    }

    if (this.npcPokemon.hasFainted()) {
      this.matchRound += 1;
      console.log(
        `${this.trainer.name} you has won!\nYou now capture the pokemon `
      );
      this.trainer.throw(this.npcPokemon.name);
    } else if (this.trainer.getPokemon(this.pokemon).hasFainted()) {
      this.matchRound += 1;
      console.log(`${this.trainer.name} has lost!`);
    }

    if (this.trainer.getPokemon(this.pokemon).name !== pokemon) {
      console.log("Pokemon not found");
    }
  }
}

module.exports = Battle;
