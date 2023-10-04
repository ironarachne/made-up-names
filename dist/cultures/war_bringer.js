import GenericNameGenerator from "../generic_name_generator.js";
export default {
    name: "war bringer",
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
    gen.patterns = ["pvlvlIA", "lvpvpIA", "vnvlvpA", "vpvlY", "flvnv", "vfpvlION", "vlxRIA"];
    return gen;
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "Apvlnvn",
        "vpvcnvn",
        "vSHlvnp",
        "SnvTH",
        "pvvLOR",
        "pv+PER",
        "sLvTCHER",
        "svRRIER",
        "pvnDElSON",
        "pvnDElS",
        "vvpSBURG",
        "vvpSBERG",
        "vlnvTHION",
        "vpRvHAM",
        "vcpLAND",
        "vcpLvND",
        "vcfFORD",
        "vcnFvRD",
    ];
    const prefixes = [
        "SMASH",
        "BULL",
        "RAGE",
        "DEATH",
        "MURDER",
        "SKULL",
        "FIGHT",
        "BREAK",
        "WAR",
        "BATTLE",
        "GROG",
        "FEAR",
    ];
    const suffixes = ["FIST", "SMASH", "REND", "BLADE", "AXE", "CHOPPER", "CUTTER", "KILLER"];
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
        "vnvlA",
        "vnv",
        "vdvlvN",
        "vlvnA",
        "vcnvA",
        "cvlvNIA",
        "cvlvNA",
        "pvdvpa",
        "vpBvZA",
        "vp+vsA",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "vFFlvn",
        "cvclvn",
        "vpvlvn",
        "cvLLvvn",
        "cvlvpul",
        "vppvl",
        "pvspvn",
        "pv+lvn",
        "pvlsvp",
        "pvDRvC",
        "pvp",
        "pvpvp",
        "pvppvs",
        "pAlpvs",
        "pAlpvG",
        "svRM",
        "svRN",
        "svRNpvK",
        "pv+pvK",
    ];
    return gen;
}
function town() {
    let gen = new GenericNameGenerator();
    const first = [
        "Axe",
        "Black",
        "Bleak",
        "Bloody",
        "Blue",
        "Dead",
        "Green",
        "Grey",
        "Pike",
        "Purple",
        "Raw",
        "Red",
        "Shield",
        "Sword",
        "Three",
        "Twin",
        "Two",
        "White",
        "Yellow",
    ];
    const second = [
        "Barrows",
        "Cliffs",
        "Falls",
        "Hills",
        "Hollows",
        "Mountains",
        "Peaks",
        "Ridges",
        "Rivers",
        "Rocks",
        "Streams",
        "Towers",
        "Trees",
        "Valleys",
        "Waters",
    ];
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            gen.patterns.push(first[i].toUpperCase() + " " + second[j].toUpperCase());
        }
    }
    let firstNameGenerator = male();
    let firstNames = firstNameGenerator.patterns;
    firstNameGenerator = female();
    firstNames = firstNames.concat(firstNameGenerator.patterns);
    const suffixes = [
        "Folly",
        "Boon",
        "Rest",
        "Bequest",
        "Garden",
        "Repose",
        "Haven",
        "End",
        "Pass",
        "Forge",
        "Bulwark",
    ];
    for (let i = 0; i < firstNames.length; i++) {
        for (let j = 0; j < suffixes.length; j++) {
            gen.patterns.push(firstNames[i] + "'S " + suffixes[j].toUpperCase());
        }
    }
    let patterns = ["vlpvl", "tvnv", "lvpcv"];
    let additions = [
        "arm",
        "bend",
        "borough",
        "bury",
        "don",
        "end",
        "ford",
        "forge",
        "gale",
        "glade",
        "haven",
        "keep",
        "meet",
        "rock",
        "stead",
        "stone",
        "ton",
        "town",
        "vale",
        "ville",
    ];
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < additions.length; j++) {
            gen.patterns.push(patterns[i] + additions[j].toUpperCase());
        }
    }
    patterns = [
        "Lake",
        "River",
        "Fire",
        "Mountain",
        "Stream",
        "Hill",
        "White",
        "Winter",
        "Fall",
        "Gold",
        "Silver",
        "Copper",
        "Iron",
        "Field",
        "Sky",
        "Summer",
        "Autumn",
        "Spring",
        "Night",
    ];
    additions = [
        "stead",
        "town",
        "bend",
        "bury",
        "ton",
        "vale",
        "borough",
        "haven",
        "keep",
        "meet",
        "forge",
        "gale",
        "stone",
        "rock",
        "glade",
        "ford",
    ];
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < additions.length; j++) {
            gen.patterns.push(patterns[i].toUpperCase() + additions[j].toUpperCase());
        }
    }
    return gen;
}
