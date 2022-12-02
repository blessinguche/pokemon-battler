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
    this.trainerPokemon = this.trainer.getPokemon(this.pokemon);

    this.newMatch = true;
    this.round = 1;
    this.matches = 0;
  }

  fight(fight = true) {
    let multiply = 1;
    let multiply2 = 1;
    if (!this.trainerPokemon.name) {
      console.log(this.round, this.matches);
      return "GAME OVER";
    }
    if (this.newMatch === true) {
      this.matches += 1;
      const random = Math.floor(Math.random() * pokemons.length);
      const npcPokemonX = new pokemons[random]();
      this.npcPokemon = npcPokemonX;
      this.newMatch = false;
    }

    console.log(this.npcPokemon.name);

    if (this.newMatch === true) {
      console.log(
        `You start your journey with just a ${this.trainerPokemon.name} in your belt\nYou wander into the Forbidden Forest...\nA Wild ${this.npcPokemon.name} has appeared!\nFight it to capture it!`
      );
    }

    if (this.trainerPokemon.hasFainted() || this.npcPokemon.hasFainted()) {
      console.log("The battle is over");
      return "matches OVER";
    }
    // this is pokemon 2 fight conditions

    const hitPoints1 = this.trainerPokemon.hitPoints;
    const hitPoints2 = this.npcPokemon.hitPoints;

    if (this.npcPokemon.isEffectiveAgainst(this.trainerPokemon)) {
      multiply = 0.75;
    }
    if (this.npcPokemon.isWeakTo(this.trainerPokemon)) {
      multiply = 1.25;
    }
    if (!this.trainerPokemon.hasFainted()) {
      const damage1 = this.npcPokemon.takeDamage(
        this.trainerPokemon.useMove() * multiply
      );

      console.log(
        `${this.trainerPokemon.sound}\n${this.trainerPokemon.name} used ${this.trainerPokemon.move} on ${this.npcPokemon.name}\n${this.npcPokemon.name} took ${damage1} damage\n${this.npcPokemon.name} hitpoints = ${this.npcPokemon.hitPoints}`
      );
    }
    if (this.trainerPokemon.isEffectiveAgainst(this.npcPokemon)) {
      multiply2 = 0.75;
    }
    if (this.trainerPokemon.isWeakTo(this.npcPokemon)) {
      multiply2 = 1.25;
    }

    if (!this.npcPokemon.hasFainted()) {
      const damage2 = this.trainerPokemon.takeDamage(
        this.npcPokemon.useMove() * multiply2
      );
      console.log(
        `${this.npcPokemon.sound}\n${this.npcPokemon.name} used ${this.npcPokemon.move} on ${this.trainerPokemon.name}\n${this.trainerPokemon.name} took ${damage2} damage\n${this.trainerPokemon.name} hitpoints = ${this.trainerPokemon.hitPoints}`
      );
    }

    this.round += 1;

    console.log(
      `Trainers' original health = ${hitPoints1}\nComputers' original health = ${hitPoints2}`
    );

    if (this.npcPokemon.hasFainted()) {
      this.newMatch = true;
      
      
      this.pokemon = this.npcPokemon.name;
      console.log(
        `${this.trainer.name}, you have won the battle!\nYou now capture the pokemon...`
      );

      this.trainer.catch(this.npcPokemon.name);
    } else if (this.trainerPokemon.hasFainted()) {
      this.newMatch = true;

      console.log(`${this.trainer.name} has lost ${this.trainerPokemon.name}!`);

      this.trainer.belt.shift();
      this.trainer.belt.push(new Pokeball());

      this.trainerPokemon = this.trainer.getPokemon(
        this.trainer.belt[0].storage.name
      );
    }
    if (this.trainerPokemon.name !== this.pokemon) {
      console.log(`Pokemon not found`);
    }
    console.log(this.trainer.belt);
  }
}

module.exports = Battle;
