const Pokeball = require(`${__dirname}/../classes/pokeball.js`);

describe("Pokeball", () => {
  test("should return 0 has the quanity and {} as the storage", () => {
    const input = new Pokeball();
    expect(input.quantity).toBe(0);
    expect(input.storage).toEqual({});
  });
  test('should return "empty" when passed no value to throw and the storage is empty', () => {
    const input = new Pokeball();

    expect(input.throw()).toBe("Your pokeball is empty...");
  });
  test("should should return pokemon name when passed pokemon in throw, if storage is empty", () => {
    const input = new Pokeball();
    input.throw("Leafeon");
    expect(input.storage.name).toBe("Leafeon");
  });
  test("should should return that there is already a pokemone when passed 2 pokemons in throw", () => {
    const input = new Pokeball();
    input.throw("Eevee");
    input.throw("Leafeon");
    console.log(input);
    expect(input.storage.name).toBe("Eevee");
  });

  test("should return true if pokeball is empty or false or false if it is full", () => {
    const input = new Pokeball();
    expect(input.isEmpty()).toBe(true);
    input.throw("Charmander");
    expect(input.isEmpty()).toBe(false);
  });

  test('should return the pokemon name if there is a pokemon in storage or return "empty..." if there is no pokemon in storage', () => {
    const input = new Pokeball();
    expect(input.contains()).toBe("empty...");
    input.throw("Bulbasaur");
    expect(input.contains()).toBe("Bulbasaur");
  });
});
