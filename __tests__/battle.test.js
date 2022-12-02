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
  test("should return 'Charmander used ember!' only when is not the player's turn", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const match = new Battle("Blessing", "Vaporeon");
    match.fight();

    const hitPoints = match.trainer.getPokemon("Vaporeon").hitPoints;

    expect(hitPoints).toBeLessThan(70);
    expect(consoleSpy).toHaveBeenCalledWith("You caught Vaporeon");
  });
  test.only("should should return the number of rounds or keep fighting indefinately untill no more pokemons in belt", () => {
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
    const hitPoints = match.trainer.getPokemon("Leafeon").hitPoints;

    expect(name).toBe(undefined);
  });
  test("should should return log that the battle is over when a player wins", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const match = new Battle("bob", "Charmander", "betty", "Squirtle");
    match.fight("Charmander");
    match.fight("Squirtle");
    match.fight("Charmander");
    match.fight("Squirtle");
    match.fight("Charmander");
    match.fight("Squirtle");
    const result1 = match.fight("Charmander");
    const result2 = match.fight("Squirtle");
    expect(consoleSpy).toHaveBeenCalledWith("The battle is over");
    expect(result1).toBe("GAME OVER");
    expect(result2).toBe("GAME OVER");
  });
  test("should should return correct hitpoints for defending pokemon", () => {
    const match = new Battle("bob", "Charmander", "betty", "Charmander");
    match.fight("Charmander");
    match.fight("Charmander");
    match.fight("Charmander");

    expect(match.trainer2.getPokemon("Charmander").hitPoints).toBe(44 - 17 * 2);
  });
});
