const Trainer = require(`${__dirname}/../classes/trainer.js`);
const Pokeball = require(`${__dirname}/../classes/pokeball.js`);
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
  

describe("Trainer", () => {
  describe("Properties", () => {
    test("should have a name property", () => {
      const Bobby = new Trainer("Bobby");
      expect(Bobby.name).toBe("Bobby");
    });
    test("should have a belt property that initialises to 6 empty Pokeballs", () => {
      const Bobby = new Trainer("Bobby");
      expect(Bobby.belt).toStrictEqual([
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
      ]);
    });
  });
  describe("Methods", () => {
    describe("Catch", () => {
      test("should catch pokemon if empty pokeball is present", () => {
        const Bobby = new Trainer("Bobby");
        expect(Bobby.catch("Charmander")).toBe("Success!");
        expect(Bobby.belt[0].storage.name).toBe("Charmander");
        expect(Bobby.belt[1].quantity).toBe(0);
      });
      test("should return an error if belt is full", () => {
        const Bobby = new Trainer("Bobby");
        Bobby.catch("Charmander");
        Bobby.catch("Squirtle");
        Bobby.catch("Bulbasaur");
        Bobby.catch("Rattata");
        Bobby.catch("Eevee");
        Bobby.catch("Flareon");
        expect(Bobby.catch("Charmander")).toBe("You're out of Pokeballs!");
        expect(Bobby.belt[0].storage.name).toBe("Charmander");
        expect(Bobby.belt[1].storage.name).toBe("Squirtle");
        expect(Bobby.belt[2].storage.name).toBe("Bulbasaur");
        expect(Bobby.belt[3].storage.name).toBe("Rattata");
        expect(Bobby.belt[4].storage.name).toBe("Eevee");
        expect(Bobby.belt[5].storage.name).toBe("Flareon");
      });
    });
    describe("getPokemon", () => {
      test("should return the provided pokemon if that pokemon is present on the belt", () => {
        const Bobby = new Trainer("Bobby");
        Bobby.catch("Charmander");
        Bobby.catch("Squirtle");
        
        console.log("----- THIS IS THE TEST-----\n", Bobby.getPokemon("Squirtle"), "\n----- THIS IS THE TEST-----");

        const expected = new Squirtle();

        expect(Bobby.getPokemon("Squirtle")).toStrictEqual(expected);
      });
      test("should return an error if the pokemon cannot be found", () => {
        const Bobby = new Trainer("Bobby");
        Bobby.catch("Flareon");
        Bobby.catch("Squirtle");
        expect(Bobby.getPokemon("Bulbasaur")).toBe("Error: Pokemon not found");
      });
    });
  });
});
