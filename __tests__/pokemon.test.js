const { Pokemon } = require(`${__dirname}/../classes/pokemon.js`);

describe("Pokemon", () => {
  test("should return an object with a name property", () => {
    const Eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
    expect(Eevee.name).toBe("Eevee");
  });
  test("should return an object with a hitPoints property", () => {
    const Eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
    expect(Eevee.hitPoints).toBe(55);
  });
  test("should return an object with an attackDamage property", () => {
    const Eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
    expect(Eevee.attackDamage).toBe(18);
  });
  test("should return an object with a move property", () => {
    const Eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
    expect(Eevee.move).toBe("Headbutt");
  });
  test("should return an object with a type property", () => {
    const Eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
    expect(Eevee.type).toBe("Normal");
  });
});
describe("Methods", () => {
  describe("isEffectiveAgainst", () => {
    test("should return a boolean", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      const Vaporeon = new Pokemon("Vaporeon", 70, 19, "Hydro pump", "Water");
      expect(typeof Flareon.isEffectiveAgainst(Vaporeon)).toBe("boolean");
    });
    test("should return the expected value when provided a valid input", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      const Vaporeon = new Pokemon("Vaporeon", 70, 19, "Hydro pump", "Water");
      expect(Flareon.isEffectiveAgainst(Vaporeon)).toBe(false);
      expect(Vaporeon.isEffectiveAgainst(Flareon)).toBe(true);
    });
  });
  describe("isWeakTo", () => {
    test("should return a boolean", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      const Vaporeon = new Pokemon("Vaporeon", 70, 19, "Hydro pump", "Water");
      expect(typeof Flareon.isWeakTo(Vaporeon)).toBe("boolean");
    });
    test("should return the expected value when provided a valid input", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      const Vaporeon = new Pokemon("Vaporeon", 70, 19, "Hydro pump", "Water");
      expect(Flareon.isWeakTo(Vaporeon)).toBe(true);
      expect(Vaporeon.isWeakTo(Flareon)).toBe(false);
    });
  });
  describe("takeDamage", () => {
    test("should reduce the health property of the parent instance by the given value", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      Flareon.takeDamage(15);
      expect(Flareon.hitPoints).toBe(50);
    });
  });
  describe("useMove", () => {
    test("should return a number", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      expect(Flareon.useMove()).toBe(20);
    });
    test("should console log a movetext", () => {
      // "Flareon used Fire blast!"
      const consoleSpy = jest.spyOn(console, "log");

      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      Flareon.useMove();

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith("Flareon used Fire blast!");
    });
  });
  describe("hasFainted", () => {
    test("should return a boolean", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      expect(typeof Flareon.hasFainted()).toBe("boolean");
    });
    test("should return the expected value of hasFainted", () => {
      const Flareon = new Pokemon("Flareon", 65, 20, "Fire blast", "Fire");
      expect(Flareon.hasFainted()).toBe(false);
      Flareon.takeDamage(70);
      expect(Flareon.hasFainted()).toBe(true);
    });
  });
});
