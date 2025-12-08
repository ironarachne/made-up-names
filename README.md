# Made Up Names

This is a library for generating random fictional names. It provides generators for various categories like magic items, planets, stars, and cultural names (fantasy races, etc.).

## Installation

```bash
npm install @ironarachne/made-up-names
```

## Usage

### Basic Generators

The library provides several standalone generators. Each generator returns a `NameGenerator` object which has a `generate(count)` method.

```typescript
import { 
  getMagicItemNameGenerator, 
  getModelNumberNameGenerator, 
  getPlanetNameGenerator, 
  getStarNameGenerator, 
  getStarNationNameGenerator 
} from "@ironarachne/made-up-names";

// Generate 5 magic item names
const magicItems = getMagicItemNameGenerator().generate(5);
console.log(magicItems);

// Generate 1 planet name
const planet = getPlanetNameGenerator().generate(1);
console.log(planet);

// Other available generators:
// getModelNumberNameGenerator()
// getStarNameGenerator()
// getStarNationNameGenerator()
```

### Cultural Name Generators

You can generate names based on specific cultures or classic fantasy races. These functions return a `NameGeneratorPatternSet` which contains `NameGenerator`s for different categories (male, female, family, town, etc.).

#### By Culture

```typescript
import { getCultureNamePatternSet } from "@ironarachne/made-up-names";

const fantasyCulture = getCultureNamePatternSet("fantasy");

// Generate 10 male names from the fantasy culture
const maleNames = fantasyCulture.male.generate(10);

// Generate 5 town names
const townNames = fantasyCulture.town.generate(5);
```

**Available Cultures:**
- `easterling`
- `fantasy`
- `forest dweller`
- `gem tinkerer`
- `hill feaster`
- `metal miner`
- `mud grubber`
- `old worlder`
- `scale bearer`
- `war bringer`

#### By Classic Race

For convenience, you can also access these patterns using classic fantasy race names.

```typescript
import { getClassicRaceNamePatternSet } from "@ironarachne/made-up-names";

const elfNames = getClassicRaceNamePatternSet("elf");

// Generate 3 female elf names
const femaleElfNames = elfNames.female.generate(3);
```

**Available Races:**
- `dragonborn` (maps to `scale bearer`)
- `dwarf` (maps to `metal miner`)
- `elf` (maps to `forest dweller`)
- `gnome` (maps to `gem tinkerer`)
- `goblin` (maps to `mud grubber`)
- `half-elf` (maps to `fantasy`)
- `half-orc` (maps to `fantasy`)
- `halfling` (maps to `hill feaster`)
- `human` (maps to `old worlder`)
- `orc` (maps to `war bringer`)
- `tiefling` (maps to `fantasy`)
- `troll` (maps to `war bringer`)

### Custom Generators

You can create your own name generator using `getNameGeneratorForPatternSet`.

```typescript
import { getNameGeneratorForPatternSet } from "@ironarachne/made-up-names";

const myPatterns = {
  patterns: ["cvcv", "vcvc"], // See @ironarachne/word-generator for pattern syntax
};

const myGenerator = getNameGeneratorForPatternSet("my_custom_gen", myPatterns);
const names = myGenerator.generate(5);
```

## Types

### NameGenerator

```typescript
type NameGenerator = {
  name: string;
  generate: (numberOfNames: number) => string[];
};
```

### NameGeneratorPatternSet

```typescript
type NameGeneratorPatternSet = {
  name: string;
  culture: string[] | PatternSet;
  country: string[] | PatternSet;
  family: string[] | PatternSet;
  female: string[] | PatternSet;
  male: string[] | PatternSet;
  town: string[] | PatternSet;
};
```

## Documentation

For more detailed documentation, see the generated docs in the `docs/` directory or run `npm run docs`.
