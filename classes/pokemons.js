const { Pokemon } = require(`${__dirname}/pokemon.js`);

class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, move, "Fire");
  }
}
class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, move, "Water");
  }
}
class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle") {
    super(name, hitPoints, attackDamage, move, "Grass");
  }
}
class Flareon extends Fire {
  constructor() {
    super("Flareon", 65, 20, "Fire blast");
  }
}
class Vaporeon extends Water {
  constructor() {
    super("Vaporeon", 70, 19, "Hydro pump");
  }
}
class Leafeon extends Grass {
  constructor() {
    super("Leafeon", 65, 17, "Giga drain");
  }
}
class Eevee extends Pokemon {
  constructor() {
    super("Eevee", 43, 18, "Headbutt");
  }
}
class Charmander extends Fire {
  constructor() {
    super("Charmander", 44, 17, "Flamethrower");
  }
}
class Squirtle extends Water {
  constructor() {
    super("Squirtle", 44, 16, "	Surf");
  }
}
class Bulbasaur extends Grass {
  constructor() {
    super("Bulbasaur", 45, 16, "Razor leaf");
  }
}
class Rattata extends Pokemon {
  constructor() {
    super("Rattata", 43, 18);
  }
}

module.exports = {
    Eevee,
    Flareon,
    Vaporeon,
    Leafeon,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
  };