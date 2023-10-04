import GenericNameGenerator from "../generic_name_generator.js";
export default {
    name: "metal miner",
    country: country(),
    culture: culture(),
    family: family(),
    female: female(),
    male: male(),
    town: town(),
};
function culture() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["pmlMyNmN", "kmlMyNm", "kyTHmkI", "pOhRAkI"];
    return gen;
}
function country() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["evlvlIA", "lvevk+IA", "vnmlvbA", "vlxRIA"];
    return gen;
}
function family() {
    let gen = new GenericNameGenerator();
    const prefixes = [
        "BATTLE",
        "BROAD",
        "COPPER",
        "FIRE",
        "GEM",
        "GOLD",
        "INGOT",
        "JADE",
        "OAK",
        "ONYX",
        "ROCK",
        "RUBY",
        "SILVER",
        "STEEL",
        "STONE",
    ];
    const suffixes = [
        "BANE",
        "BEARD",
        "BREWER",
        "CHIN",
        "FALL",
        "FOOT",
        "GRIP",
        "HAMMER",
        "HILL",
        "MOUNTAIN",
        "RIVER",
        "TUNNEL",
    ];
    for (let i = 0; i < prefixes.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(prefixes[i] + suffixes[j]);
        }
    }
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "pvRINv",
        "pWvlINA",
        "pvlInv",
        "THvlIn",
        "pvMLInA",
        "pvNLInA",
        "pvFURA",
        "pvFvlA",
        "slvlINA",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "pvRIN",
        "pWvlIN",
        "pvlIN",
        "THvlIN",
        "THvlIM",
        "pvMLI",
        "pvNLI",
        "plxIN",
        "pvFUR",
        "pvFvl",
        "slvlIN",
    ];
    return gen;
}
function town() {
    let gen = new GenericNameGenerator();
    const first = [
        "Black",
        "White",
        "Blue",
        "Grey",
        "Green",
        "Purple",
        "Red",
        "Yellow",
        "Bleak",
        "Dark",
        "Deep",
        "Iron",
        "Copper",
        "Bronze",
        "Brass",
        "Steel",
    ];
    const second = [
        "Barrow",
        "Cliff",
        "Fall",
        "Hill",
        "Hollow",
        "Mountain",
        "Peak",
        "Ridge",
        "Hold",
        "Delve",
        "Rock",
        "Tower",
        "Valley",
    ];
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            gen.patterns.push(first[i].toUpperCase() + " " + second[j].toUpperCase());
            gen.patterns.push(first[i].toUpperCase() + second[i].toUpperCase());
        }
    }
    return gen;
}
