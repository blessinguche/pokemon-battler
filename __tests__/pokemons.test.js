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

describe("Pokemons", () => {
  test("should return an object", () => {
    const bulbasaur = new Bulbasaur();
    const expected = {
      name: "Bulbasaur",
      type: "Grass",
      hitPoints: 45,
      attackDamage: 16,
      move: "Razor Leaf",
      sound: "Bul... Bulbasaur!",
    };
    expect(typeof bulbasaur).toBe("object");
    expect(bulbasaur).toEqual(expected);
  });
  test("should return an object with a name property", () => {
    const charmander = new Charmander();
    const bulbasaur = new Bulbasaur();
    expect(charmander.name).toBe("Charmander");
    expect(bulbasaur.name).toBe("Bulbasaur");
  });
  test("should return an object with a hitPoints property", () => {
    const eevee = new Eevee();
    expect(eevee.hitPoints).toBe(43);
  });
  test("should return an object with an attackDamage property", () => {
    const flareon = new Flareon();
    expect(flareon.attackDamage).toBe(20);
  });
  test("should return an object with a move property", () => {
    const vaporeon = new Vaporeon();
    expect(vaporeon.move).toBe("Hydro Pump");
  });
  test("should return an object with a type property", () => {
    const leafeon = new Leafeon();
    expect(leafeon.type).toBe("Grass");
  });
  test("should return an object with a sound property", () => {
    const squirtle = new Squirtle();
    const rattata = new Rattata;
    expect(squirtle.sound).toBe("Squ... Squirtle!");
    expect(rattata.sound).toBe("Rat... Rattata!");
  });
});
