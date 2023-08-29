"use strict";
import GeneratorSet from "../generator_set.js";
import GenericNameGenerator from "../generic_name_generator.js";
export default class JapanishSet extends GeneratorSet {
    constructor() {
        super();
        this.name = "japanish";
        this.country = country();
        this.culture = culture();
        this.family = family();
        this.female = female();
        this.male = male();
        this.town = town();
    }
}
function culture() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "(N,M)v(H,G,K)(E,U)(M,N)",
        "(N,M)v(H,G,K)(E,U)(M,N)I",
        "(AI,U)(N,M)(U,I)",
        "(AO,AE,AI,v)(R,L)(A,I)",
    ];
    return gen;
}
function country() {
    let gen = new GenericNameGenerator();
    gen.patterns = ["(N,M)(A,E)(G,K)(A,E)R(I,A,IA)", "(S,K)(A,E)(G,K)(A,E)(R,T)(I,A,IA)"];
    return gen;
}
function family() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "(A,U)(G,K)(A,U)H(I,A)(T,D)(A,O)",
        "(G,K)(A,I)(NN,N,M)O(SU,T)(KE,KA,E,A)",
        "(T,D)A(G,K)E(T,CH)(A,E)",
        "(M,N)(A,O)R(I,A)",
        "I(Z,S)(A,U)(M,N)I",
    ];
    return gen;
}
function female() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "(AI,A)KO",
        "SA(R,Y)v",
        "Y(A,U,O)R(A,I)",
        "(SA,YU,YO)R(U,A,I)(M,N)(A,I)",
        "K(A,E,U)(TSU,TE,DE,TO,DO)K(A,I)",
    ];
    return gen;
}
function male() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "YO(SHI,TE,DE,HA)H(A,I)(D,T)(O,E)",
        "(M,N)(A,O)R(A,I,U)(D,T)(A,O)",
        "SvSvKE",
        "(G,K)(A,E)N(J,G,K)(I,E)",
    ];
    return gen;
}
function town() {
    let gen = new GenericNameGenerator();
    gen.patterns = [
        "(K,G)(A,E)N(T,D)(A,O)",
        "(T,D)v(KY,G,K)(A,O)",
        "(M,N)(A,E)N(G,K,P)OR(A,O,I)",
        "(M,N)(A,O,U)N(A,E)(T,D,R)A",
    ];
    return gen;
}
