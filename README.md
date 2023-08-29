# Made Up Names

This is a library for generating random fictional names.

## Generator Methods

The following methods are available. Each gives you a single random name of the specified type.

- magicItem
- modelNumber
- planet
- star
- tavern

In addition, there is a special method `invent` which takes an array of strings as its argument. These
strings must be patterns (as per the rules here: [Word Generator Cheat Sheet](https://www.ironarachne.com/#/word-generator-cheat-sheet)). The
`invent` method will give you a random name that adheres to a random one of those patterns.

## Generator Sets

A GeneratorSet is a class that can generate consistent names for a particular set of patterns.

It has the following signature:

```typescript
class GeneratorSet {
  name: string;
  culture: NameGenerator;
  country: NameGenerator;
  family: NameGenerator;
  female: NameGenerator;
  male: NameGenerator;
  town: NameGenerator;
}
```

In the above, "name" is the name of the generator set. The other properties are all `NameGenerator`s.
Each `NameGenerator` has a `name`, a set of `patterns`, and a `generate` method that takes a number
as its only argument. The `generate` method will give you an array of random names, sized to that number.

So, if you had a GeneratorSet `mySet`, you could run `mySet.family.generate(10)` to get 10 random family
names for that set.

The constructor for the above class creates an "empty" `GenericNameGenerator` for each of the `NameGenerator`
fields. You can set the `patterns` field on each `GenericNameGenerator` to an array of patterns to set it
up. For example:

```
let gen = new GeneratorSet();

gen.family.patterns = ['pvd', 'pv+d'];

let familyNames = gen.family.generate();
```

You can create your own GeneratorSets, or you can use the following premade ones:

- ElvishSet
- FantasySet (generic fantasy names)
- GermanicSet ("German-like" names)
- JapanishSet ("Japanese-like" names)

(`cultureSets()` will give you an array of all of the above)

- DragonbornSet
- DwarfSet
- ElfSet
- GnomeSet
- GoblinSet
- HalfElfSet
- HalflingSet
- HalfOrcSet
- HumanSet
- OrcSet
- TieflingSet
- TrollSet

(`fantasyRaceSets()` will give you an array of all of the above)

Lastly, `allSets()` will give you an array of all available generator sets.
