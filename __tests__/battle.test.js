const Battle = require(`${__dirname}/../classes/battle.js`);
const Trainer = require(`${__dirname}/../classes/trainer.js`);
const {
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require(`${__dirname}/../classes/pokemons.js`);
const Pokeball = require(`${__dirname}/../classes/pokeball.js`);

describe("match 1", () => {
  test("should return a lower hit point for the defending pokemon", () => {
    const match = new Battle("Blessing", "Leafeon");
    match.fight();

    const hitPoints = match.trainer.getPokemon("Leafeon").hitPoints;

    expect(hitPoints).toBeLessThan(65);
  });
  test("should return 'You caught Pokemon'only when it is a new match - at the start and when defeating computer's Pokemoon", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const match = new Battle("Blessing", "Vaporeon");
    match.fight();

    const hitPoints = match.trainer.getPokemon("Vaporeon").hitPoints;

    expect(hitPoints).toBeLessThan(70);
    expect(consoleSpy).toHaveBeenCalledWith("You caught Vaporeon");
  });
  test("should should return the number of rounds or keep fighting indefinately untill no more pokemons in belt", () => {
    const match = new Battle("Blessing", "Flareon");
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();

    const name = match.trainer.getPokemon("Leafeon").name;

    expect(name).toBe(undefined);
  });
  test("should return the rounds amount when no pokeballs in belt", () => {
    const match = new Battle("Blessing", "Rattata");
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();
    match.fight();

   console.log(match.fight())

    expect(match.fight()).toBe('GAME OVER');
  });
  
});
