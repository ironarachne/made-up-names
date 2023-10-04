import GenericNameGenerator from "../generic_name_generator.js";
export default {
    name: "gem tinkerer",
    country: country(),
    culture: culture(),
    family: family(),
    female: female(),
    male: male(),
    town: town(),
};
function culture() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["pmlMy", "pmlMyN", "w(m,y)e(IE,Y)", "vpvlY"];
    return gen;
}
function country() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["evlvlIA", "lvevk+IA", "vnmlvbA", "vlxRIA"];
    return gen;
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["vPSpvMS", "cvnKLER", "cvdLER", "cvdER", "pvpLOp"];
    const prefixes = [
        "AGATE",
        "ALLOY",
        "COPPER",
        "CRYSTAL",
        "DIAMOND",
        "DUST",
        "GEM",
        "GOLD",
        "IRON",
        "JADE",
        "JET",
        "JEWEL",
        "ONYX",
        "OPAL",
        "PELLET",
        "RUBY",
        "SAPPHIRE",
        "SILVER",
        "WIRE",
    ];
    const suffixes = [
        "BITER",
        "BOPPER",
        "BRANDER",
        "CHARMER",
        "CHEST",
        "DROPPER",
        "HAMMER",
        "MALLET",
        "POPPER",
        "SEEDER",
        "SENDER",
        "SHAPER",
        "SWEEPER",
        "TINKER",
        "TRADER",
        "WATCHER",
        "WEAVER",
        "WINKER",
        "WOOSHER",
        "WORKER",
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
        "avNNA",
        "SHvNvDDI",
        "MvoLI",
        "voAnA",
        "voAnI",
        "vvTHNE",
        "ovpv",
        "SNvflvnv",
        "pvdvnv",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["Blvocvf", "oOdvp", "pvnlv", "pvnp", "cvlVER", "wvlVER", "pvlwvl", "pvlwv"];
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
