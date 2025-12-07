import * as RNG from "@ironarachne/rng";
/**
 * Generates a tavern name.
 *
 * @returns {string} The name.
 * @since 0.0.0
 */
export function generate(seed = Date.now()) {
    const random = new RNG.RNG(seed);
    let name = "The ";
    const adjectiveChance = random.int(0, 100);
    if (adjectiveChance > 60) {
        name += `${random.item(adjectives())} `;
    }
    name += random.item(nouns());
    return name;
}
function adjectives() {
    return [
        "Black",
        "Blue",
        "Chortling",
        "Dancing",
        "Drunken",
        "Fat",
        "Flying",
        "Gold",
        "Golden",
        "Green",
        "Growling",
        "Iron",
        "Ivory",
        "Laughing",
        "Little",
        "Old",
        "Red",
        "Steel",
        "White",
    ];
}
function nouns() {
    return [
        "Ball",
        "Basket",
        "Boar",
        "Cat",
        "Cony",
        "Crane",
        "Cross",
        "Crown",
        "Cup",
        "Dolphyn",
        "Dragon",
        "Garland",
        "Gate",
        "Griffin",
        "Hammer",
        "Horse's Head",
        "King's Head",
        "Knave",
        "Lattice",
        "Lion",
        "Lout",
        "Maiden",
        "Mare",
        "Moon",
        "Oak",
        "Ox",
        "Pannier",
        "Pig",
        "Pony",
        "Pot",
        "Ram's Head",
        "Rose",
        "Sheep",
        "Ship",
        "Steed",
        "Wolf",
        "Wyvern",
    ];
}
