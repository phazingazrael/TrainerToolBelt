import React from "react";
import "./nav.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Card } from "semantic-ui-react";
import NewTeam from "./NewTeam";

const uuidv4 = require("uuid/v4");

var p2 = [
  {
      "id": 1,
      "name": "bulbasaur",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 2,
      "name": "ivysaur",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 3,
      "name": "venusaur",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 4,
      "name": "charmander",
      "type_1": "Fire"
  },
  {
      "id": 5,
      "name": "charmeleon",
      "type_1": "Fire"
  },
  {
      "id": 6,
      "name": "charizard",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 7,
      "name": "squirtle",
      "type_1": "Water"
  },
  {
      "id": 8,
      "name": "wartortle",
      "type_1": "Water"
  },
  {
      "id": 9,
      "name": "blastoise",
      "type_1": "Water"
  },
  {
      "id": 10,
      "name": "caterpie",
      "type_1": "Bug"
  },
  {
      "id": 11,
      "name": "metapod",
      "type_1": "Bug"
  },
  {
      "id": 12,
      "name": "butterfree",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 13,
      "name": "weedle",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 14,
      "name": "kakuna",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 15,
      "name": "beedrill",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 16,
      "name": "pidgey",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 17,
      "name": "pidgeotto",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 18,
      "name": "pidgeot",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 19,
      "name": "rattata",
      "type_1": "Normal"
  },
  {
      "id": 20,
      "name": "raticate",
      "type_1": "Normal"
  },
  {
      "id": 21,
      "name": "spearow",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 22,
      "name": "fearow",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 23,
      "name": "ekans",
      "type_1": "Poison"
  },
  {
      "id": 24,
      "name": "arbok",
      "type_1": "Poison"
  },
  {
      "id": 25,
      "name": "pikachu",
      "type_1": "Electric"
  },
  {
      "id": 26,
      "name": "raichu",
      "type_1": "Electric"
  },
  {
      "id": 27,
      "name": "sandshrew",
      "type_1": "Ground"
  },
  {
      "id": 28,
      "name": "sandslash",
      "type_1": "Ground"
  },
  {
      "id": 29,
      "name": "nidoran-f",
      "type_1": "Poison"
  },
  {
      "id": 30,
      "name": "nidorina",
      "type_1": "Poison"
  },
  {
      "id": 31,
      "name": "nidoqueen",
      "type_1": "Poison",
      "type_2": "Ground"
  },
  {
      "id": 32,
      "name": "nidoran-m",
      "type_1": "Poison"
  },
  {
      "id": 33,
      "name": "nidorino",
      "type_1": "Poison"
  },
  {
      "id": 34,
      "name": "nidoking",
      "type_1": "Poison",
      "type_2": "Ground"
  },
  {
      "id": 35,
      "name": "clefairy",
      "type_1": "Fairy"
  },
  {
      "id": 36,
      "name": "clefable",
      "type_1": "Fairy"
  },
  {
      "id": 37,
      "name": "vulpix",
      "type_1": "Fire"
  },
  {
      "id": 38,
      "name": "ninetales",
      "type_1": "Fire"
  },
  {
      "id": 39,
      "name": "jigglypuff",
      "type_1": "Normal",
      "type_2": "Fairy"
  },
  {
      "id": 40,
      "name": "wigglytuff",
      "type_1": "Normal",
      "type_2": "Fairy"
  },
  {
      "id": 41,
      "name": "zubat",
      "type_1": "Poison",
      "type_2": "Flying"
  },
  {
      "id": 42,
      "name": "golbat",
      "type_1": "Poison",
      "type_2": "Flying"
  },
  {
      "id": 43,
      "name": "oddish",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 44,
      "name": "gloom",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 45,
      "name": "vileplume",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 46,
      "name": "paras",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 47,
      "name": "parasect",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 48,
      "name": "venonat",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 49,
      "name": "venomoth",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 50,
      "name": "diglett",
      "type_1": "Ground"
  },
  {
      "id": 51,
      "name": "dugtrio",
      "type_1": "Ground"
  },
  {
      "id": 52,
      "name": "meowth",
      "type_1": "Normal"
  },
  {
      "id": 53,
      "name": "persian",
      "type_1": "Normal"
  },
  {
      "id": 54,
      "name": "psyduck",
      "type_1": "Water"
  },
  {
      "id": 55,
      "name": "golduck",
      "type_1": "Water"
  },
  {
      "id": 56,
      "name": "mankey",
      "type_1": "Fighting"
  },
  {
      "id": 57,
      "name": "primeape",
      "type_1": "Fighting"
  },
  {
      "id": 58,
      "name": "growlithe",
      "type_1": "Fire"
  },
  {
      "id": 59,
      "name": "arcanine",
      "type_1": "Fire"
  },
  {
      "id": 60,
      "name": "poliwag",
      "type_1": "Water"
  },
  {
      "id": 61,
      "name": "poliwhirl",
      "type_1": "Water"
  },
  {
      "id": 62,
      "name": "poliwrath",
      "type_1": "Water",
      "type_2": "Fighting"
  },
  {
      "id": 63,
      "name": "abra",
      "type_1": "Psychic"
  },
  {
      "id": 64,
      "name": "kadabra",
      "type_1": "Psychic"
  },
  {
      "id": 65,
      "name": "alakazam",
      "type_1": "Psychic"
  },
  {
      "id": 66,
      "name": "machop",
      "type_1": "Fighting"
  },
  {
      "id": 67,
      "name": "machoke",
      "type_1": "Fighting"
  },
  {
      "id": 68,
      "name": "machamp",
      "type_1": "Fighting"
  },
  {
      "id": 69,
      "name": "bellsprout",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 70,
      "name": "weepinbell",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 71,
      "name": "victreebel",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 72,
      "name": "tentacool",
      "type_1": "Water",
      "type_2": "Poison"
  },
  {
      "id": 73,
      "name": "tentacruel",
      "type_1": "Water",
      "type_2": "Poison"
  },
  {
      "id": 74,
      "name": "geodude",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 75,
      "name": "graveler",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 76,
      "name": "golem",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 77,
      "name": "ponyta",
      "type_1": "Fire"
  },
  {
      "id": 78,
      "name": "rapidash",
      "type_1": "Fire"
  },
  {
      "id": 79,
      "name": "slowpoke",
      "type_1": "Water",
      "type_2": "Psychic"
  },
  {
      "id": 80,
      "name": "slowbro",
      "type_1": "Water",
      "type_2": "Psychic"
  },
  {
      "id": 81,
      "name": "magnemite",
      "type_1": "Electric",
      "type_2": "Steel"
  },
  {
      "id": 82,
      "name": "magneton",
      "type_1": "Electric",
      "type_2": "Steel"
  },
  {
      "id": 83,
      "name": "farfetchd",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 84,
      "name": "doduo",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 85,
      "name": "dodrio",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 86,
      "name": "seel",
      "type_1": "Water",
      "type_2": ""
  },
  {
      "id": 87,
      "name": "dewgong",
      "type_1": "Water",
      "type_2": "Ice"
  },
  {
      "id": 88,
      "name": "grimer",
      "type_1": "Poison"
  },
  {
      "id": 89,
      "name": "muk",
      "type_1": "Poison"
  },
  {
      "id": 90,
      "name": "shellder",
      "type_1": "Water"
  },
  {
      "id": 91,
      "name": "cloyster",
      "type_1": "Water",
      "type_2": "Ice"
  },
  {
      "id": 92,
      "name": "gastly",
      "type_1": "Ghost",
      "type_2": "Poison"
  },
  {
      "id": 93,
      "name": "haunter",
      "type_1": "Ghost",
      "type_2": "Poison"
  },
  {
      "id": 94,
      "name": "gengar",
      "type_1": "Ghost",
      "type_2": "Poison"
  },
  {
      "id": 95,
      "name": "onix",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 96,
      "name": "drowzee",
      "type_1": "Psychic"
  },
  {
      "id": 97,
      "name": "hypno",
      "type_1": "Psychic"
  },
  {
      "id": 98,
      "name": "krabby",
      "type_1": "Water"
  },
  {
      "id": 99,
      "name": "kingler",
      "type_1": "Water"
  },
  {
      "id": 100,
      "name": "voltorb",
      "type_1": "Electric"
  },
  {
      "id": 101,
      "name": "electrode",
      "type_1": "Electric"
  },
  {
      "id": 102,
      "name": "exeggcute",
      "type_1": "Grass",
      "type_2": "Psychic"
  },
  {
      "id": 103,
      "name": "exeggutor",
      "type_1": "Grass",
      "type_2": "Psychic"
  },
  {
      "id": 104,
      "name": "cubone",
      "type_1": "Ground"
  },
  {
      "id": 105,
      "name": "marowak",
      "type_1": "Ground"
  },
  {
      "id": 106,
      "name": "hitmonlee",
      "type_1": "Fighting"
  },
  {
      "id": 107,
      "name": "hitmonchan",
      "type_1": "Fighting"
  },
  {
      "id": 108,
      "name": "lickitung",
      "type_1": "Normal"
  },
  {
      "id": 109,
      "name": "koffing",
      "type_1": "Poison"
  },
  {
      "id": 110,
      "name": "weezing",
      "type_1": "Poison"
  },
  {
      "id": 111,
      "name": "rhyhorn",
      "type_1": "Ground",
      "type_2": "Rock"
  },
  {
      "id": 112,
      "name": "rhydon",
      "type_1": "Ground",
      "type_2": "Rock"
  },
  {
      "id": 113,
      "name": "chansey",
      "type_1": "Normal"
  },
  {
      "id": 114,
      "name": "tangela",
      "type_1": "Grass"
  },
  {
      "id": 115,
      "name": "kangaskhan",
      "type_1": "Normal"
  },
  {
      "id": 116,
      "name": "horsea",
      "type_1": "Water"
  },
  {
      "id": 117,
      "name": "seadra",
      "type_1": "Water"
  },
  {
      "id": 118,
      "name": "goldeen",
      "type_1": "Water"
  },
  {
      "id": 119,
      "name": "seaking",
      "type_1": "Water"
  },
  {
      "id": 120,
      "name": "staryu",
      "type_1": "Water"
  },
  {
      "id": 121,
      "name": "starmie",
      "type_1": "Water",
      "type_2": "Psychic"
  },
  {
      "id": 122,
      "name": "mr-mime",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 123,
      "name": "scyther",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 124,
      "name": "jynx",
      "type_1": "Ice",
      "type_2": "Psychic"
  },
  {
      "id": 125,
      "name": "electabuzz",
      "type_1": "Electric"
  },
  {
      "id": 126,
      "name": "magmar",
      "type_1": "Fire"
  },
  {
      "id": 127,
      "name": "pinsir",
      "type_1": "Bug"
  },
  {
      "id": 128,
      "name": "tauros",
      "type_1": "Normal"
  },
  {
      "id": 129,
      "name": "magikarp",
      "type_1": "Water"
  },
  {
      "id": 130,
      "name": "gyarados",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 131,
      "name": "lapras",
      "type_1": "Water",
      "type_2": "Ice"
  },
  {
      "id": 132,
      "name": "ditto",
      "type_1": "Normal"
  },
  {
      "id": 133,
      "name": "eevee",
      "type_1": "Normal"
  },
  {
      "id": 134,
      "name": "vaporeon",
      "type_1": "Water"
  },
  {
      "id": 135,
      "name": "jolteon",
      "type_1": "Electric"
  },
  {
      "id": 136,
      "name": "flareon",
      "type_1": "Fire"
  },
  {
      "id": 137,
      "name": "porygon",
      "type_1": "Normal"
  },
  {
      "id": 138,
      "name": "omanyte",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 139,
      "name": "omastar",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 140,
      "name": "kabuto",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 141,
      "name": "kabutops",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 142,
      "name": "aerodactyl",
      "type_1": "Rock",
      "type_2": "Flying"
  },
  {
      "id": 143,
      "name": "snorlax",
      "type_1": "Normal"
  },
  {
      "id": 144,
      "name": "articuno",
      "type_1": "Ice",
      "type_2": "Flying"
  },
  {
      "id": 145,
      "name": "zapdos",
      "type_1": "Electric",
      "type_2": "Flying"
  },
  {
      "id": 146,
      "name": "moltres",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 147,
      "name": "dratini",
      "type_1": "Dragon"
  },
  {
      "id": 148,
      "name": "dragonair",
      "type_1": "Dragon"
  },
  {
      "id": 149,
      "name": "dragonite",
      "type_1": "Dragon",
      "type_2": "Flying"
  },
  {
      "id": 150,
      "name": "mewtwo",
      "type_1": "Psychic"
  },
  {
      "id": 151,
      "name": "mew",
      "type_1": "Psychic"
  },
  {
      "id": 152,
      "name": "chikorita",
      "type_1": "Grass"
  },
  {
      "id": 153,
      "name": "bayleef",
      "type_1": "Grass"
  },
  {
      "id": 154,
      "name": "meganium",
      "type_1": "Grass"
  },
  {
      "id": 155,
      "name": "cyndaquil",
      "type_1": "Fire"
  },
  {
      "id": 156,
      "name": "quilava",
      "type_1": "Fire"
  },
  {
      "id": 157,
      "name": "typhlosion",
      "type_1": "Fire"
  },
  {
      "id": 158,
      "name": "totodile",
      "type_1": "Water"
  },
  {
      "id": 159,
      "name": "croconaw",
      "type_1": "Water"
  },
  {
      "id": 160,
      "name": "feraligatr",
      "type_1": "Water"
  },
  {
      "id": 161,
      "name": "sentret",
      "type_1": "Normal"
  },
  {
      "id": 162,
      "name": "furret",
      "type_1": "Normal"
  },
  {
      "id": 163,
      "name": "hoothoot",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 164,
      "name": "noctowl",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 165,
      "name": "ledyba",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 166,
      "name": "ledian",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 167,
      "name": "spinarak",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 168,
      "name": "ariados",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 169,
      "name": "crobat",
      "type_1": "Poison",
      "type_2": "Flying"
  },
  {
      "id": 170,
      "name": "chinchou",
      "type_1": "Water",
      "type_2": "Electric"
  },
  {
      "id": 171,
      "name": "lanturn",
      "type_1": "Water",
      "type_2": "Electric"
  },
  {
      "id": 172,
      "name": "pichu",
      "type_1": "Electric"
  },
  {
      "id": 173,
      "name": "cleffa",
      "type_1": "Fairy"
  },
  {
      "id": 174,
      "name": "igglybuff",
      "type_1": "Normal",
      "type_2": "Fairy"
  },
  {
      "id": 175,
      "name": "togepi",
      "type_1": "Fairy"
  },
  {
      "id": 176,
      "name": "togetic",
      "type_1": "Fairy",
      "type_2": "Flying"
  },
  {
      "id": 177,
      "name": "natu",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 178,
      "name": "xatu",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 179,
      "name": "mareep",
      "type_1": "Electric"
  },
  {
      "id": 180,
      "name": "flaaffy",
      "type_1": "Electric"
  },
  {
      "id": 181,
      "name": "ampharos",
      "type_1": "Electric"
  },
  {
      "id": 182,
      "name": "bellossom",
      "type_1": "Grass"
  },
  {
      "id": 183,
      "name": "marill",
      "type_1": "Water",
      "type_2": "Fairy"
  },
  {
      "id": 184,
      "name": "azumarill",
      "type_1": "Water",
      "type_2": "Fairy"
  },
  {
      "id": 185,
      "name": "sudowoodo",
      "type_1": "Rock"
  },
  {
      "id": 186,
      "name": "politoed",
      "type_1": "Water"
  },
  {
      "id": 187,
      "name": "hoppip",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 188,
      "name": "skiploom",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 189,
      "name": "jumpluff",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 190,
      "name": "aipom",
      "type_1": "Normal"
  },
  {
      "id": 191,
      "name": "sunkern",
      "type_1": "Grass"
  },
  {
      "id": 192,
      "name": "sunflora",
      "type_1": "Grass"
  },
  {
      "id": 193,
      "name": "yanma",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 194,
      "name": "wooper",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 195,
      "name": "quagsire",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 196,
      "name": "espeon",
      "type_1": "Psychic"
  },
  {
      "id": 197,
      "name": "umbreon",
      "type_1": "Dark"
  },
  {
      "id": 198,
      "name": "murkrow",
      "type_1": "Dark",
      "type_2": "Flying"
  },
  {
      "id": 199,
      "name": "slowking",
      "type_1": "Water",
      "type_2": "Psychic"
  },
  {
      "id": 200,
      "name": "misdreavus",
      "type_1": "Ghost"
  },
  {
      "id": 201,
      "name": "unown",
      "type_1": "Psychic"
  },
  {
      "id": 202,
      "name": "wobbuffet",
      "type_1": "Psychic"
  },
  {
      "id": 203,
      "name": "girafarig",
      "type_1": "Normal",
      "type_2": "Psychic"
  },
  {
      "id": 204,
      "name": "pineco",
      "type_1": "Bug"
  },
  {
      "id": 205,
      "name": "forretress",
      "type_1": "Bug",
      "type_2": "Steel"
  },
  {
      "id": 206,
      "name": "dunsparce",
      "type_1": "Normal"
  },
  {
      "id": 207,
      "name": "gligar",
      "type_1": "Ground",
      "type_2": "Flying"
  },
  {
      "id": 208,
      "name": "steelix",
      "type_1": "Steel",
      "type_2": "Ground"
  },
  {
      "id": 209,
      "name": "snubbull",
      "type_1": "Fairy"
  },
  {
      "id": 210,
      "name": "granbull",
      "type_1": "Fairy"
  },
  {
      "id": 211,
      "name": "qwilfish",
      "type_1": "Water",
      "type_2": "Poison"
  },
  {
      "id": 212,
      "name": "scizor",
      "type_1": "Bug",
      "type_2": "Steel"
  },
  {
      "id": 213,
      "name": "shuckle",
      "type_1": "Bug",
      "type_2": "Rock"
  },
  {
      "id": 214,
      "name": "heracross",
      "type_1": "Bug",
      "type_2": "Fighting"
  },
  {
      "id": 215,
      "name": "sneasel",
      "type_1": "Dark",
      "type_2": "Ice"
  },
  {
      "id": 216,
      "name": "teddiursa",
      "type_1": "Normal"
  },
  {
      "id": 217,
      "name": "ursaring",
      "type_1": "Normal"
  },
  {
      "id": 218,
      "name": "slugma",
      "type_1": "Fire"
  },
  {
      "id": 219,
      "name": "magcargo",
      "type_1": "Fire",
      "type_2": "Rock"
  },
  {
      "id": 220,
      "name": "swinub",
      "type_1": "Ice",
      "type_2": "Ground"
  },
  {
      "id": 221,
      "name": "piloswine",
      "type_1": "Ice",
      "type_2": "Ground"
  },
  {
      "id": 222,
      "name": "corsola",
      "type_1": "Water",
      "type_2": "Rock"
  },
  {
      "id": 223,
      "name": "remoraid",
      "type_1": "Water"
  },
  {
      "id": 224,
      "name": "octillery",
      "type_1": "Water"
  },
  {
      "id": 225,
      "name": "delibird",
      "type_1": "Ice",
      "type_2": "Flying"
  },
  {
      "id": 226,
      "name": "mantine",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 227,
      "name": "skarmory",
      "type_1": "Steel",
      "type_2": "Flying"
  },
  {
      "id": 228,
      "name": "houndour",
      "type_1": "Dark",
      "type_2": "Fire"
  },
  {
      "id": 229,
      "name": "houndoom",
      "type_1": "Dark",
      "type_2": "Fire"
  },
  {
      "id": 230,
      "name": "kingdra",
      "type_1": "Water",
      "type_2": "Dragon"
  },
  {
      "id": 231,
      "name": "phanpy",
      "type_1": "Ground"
  },
  {
      "id": 232,
      "name": "donphan",
      "type_1": "Ground"
  },
  {
      "id": 233,
      "name": "porygon2",
      "type_1": "Normal"
  },
  {
      "id": 234,
      "name": "stantler",
      "type_1": "Normal"
  },
  {
      "id": 235,
      "name": "smeargle",
      "type_1": "Normal"
  },
  {
      "id": 236,
      "name": "tyrogue",
      "type_1": "Fighting"
  },
  {
      "id": 237,
      "name": "hitmontop",
      "type_1": "Fighting"
  },
  {
      "id": 238,
      "name": "smoochum",
      "type_1": "Ice",
      "type_2": "Psychic"
  },
  {
      "id": 239,
      "name": "elekid",
      "type_1": "Electric"
  },
  {
      "id": 240,
      "name": "magby",
      "type_1": "Fire"
  },
  {
      "id": 241,
      "name": "miltank",
      "type_1": "Normal"
  },
  {
      "id": 242,
      "name": "blissey",
      "type_1": "Normal"
  },
  {
      "id": 243,
      "name": "raikou",
      "type_1": "Electric"
  },
  {
      "id": 244,
      "name": "entei",
      "type_1": "Fire"
  },
  {
      "id": 245,
      "name": "suicune",
      "type_1": "Water"
  },
  {
      "id": 246,
      "name": "larvitar",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 247,
      "name": "pupitar",
      "type_1": "Rock",
      "type_2": "Ground"
  },
  {
      "id": 248,
      "name": "tyranitar",
      "type_1": "Rock",
      "type_2": "Dark"
  },
  {
      "id": 249,
      "name": "lugia",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 250,
      "name": "ho-oh",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 251,
      "name": "celebi",
      "type_1": "Psychic",
      "type_2": "Grass"
  },
  {
      "id": 252,
      "name": "treecko",
      "type_1": "Grass"
  },
  {
      "id": 253,
      "name": "grovyle",
      "type_1": "Grass"
  },
  {
      "id": 254,
      "name": "sceptile",
      "type_1": "Grass"
  },
  {
      "id": 255,
      "name": "torchic",
      "type_1": "Fire"
  },
  {
      "id": 256,
      "name": "combusken",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 257,
      "name": "blaziken",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 258,
      "name": "mudkip",
      "type_1": "Water"
  },
  {
      "id": 259,
      "name": "marshtomp",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 260,
      "name": "swampert",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 261,
      "name": "poochyena",
      "type_1": "Dark"
  },
  {
      "id": 262,
      "name": "mightyena",
      "type_1": "Dark"
  },
  {
      "id": 263,
      "name": "zigzagoon",
      "type_1": "Normal"
  },
  {
      "id": 264,
      "name": "linoone",
      "type_1": "Normal"
  },
  {
      "id": 265,
      "name": "wurmple",
      "type_1": "Bug"
  },
  {
      "id": 266,
      "name": "silcoon",
      "type_1": "Bug"
  },
  {
      "id": 267,
      "name": "beautifly",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 268,
      "name": "cascoon",
      "type_1": "Bug"
  },
  {
      "id": 269,
      "name": "dustox",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 270,
      "name": "lotad",
      "type_1": "Water",
      "type_2": "Grass"
  },
  {
      "id": 271,
      "name": "lombre",
      "type_1": "Water",
      "type_2": "Grass"
  },
  {
      "id": 272,
      "name": "ludicolo",
      "type_1": "Water",
      "type_2": "Grass"
  },
  {
      "id": 273,
      "name": "seedot",
      "type_1": "Grass"
  },
  {
      "id": 274,
      "name": "nuzleaf",
      "type_1": "Grass",
      "type_2": "Dark"
  },
  {
      "id": 275,
      "name": "shiftry",
      "type_1": "Grass",
      "type_2": "Dark"
  },
  {
      "id": 276,
      "name": "taillow",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 277,
      "name": "swellow",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 278,
      "name": "wingull",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 279,
      "name": "pelipper",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 280,
      "name": "ralts",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 281,
      "name": "kirlia",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 282,
      "name": "gardevoir",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 283,
      "name": "surskit",
      "type_1": "Bug",
      "type_2": "Water"
  },
  {
      "id": 284,
      "name": "masquerain",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 285,
      "name": "shroomish",
      "type_1": "Grass"
  },
  {
      "id": 286,
      "name": "breloom",
      "type_1": "Grass",
      "type_2": "Fighting"
  },
  {
      "id": 287,
      "name": "slakoth",
      "type_1": "Normal"
  },
  {
      "id": 288,
      "name": "vigoroth",
      "type_1": "Normal"
  },
  {
      "id": 289,
      "name": "slaking",
      "type_1": "Normal"
  },
  {
      "id": 290,
      "name": "nincada",
      "type_1": "Bug",
      "type_2": "Ground"
  },
  {
      "id": 291,
      "name": "ninjask",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 292,
      "name": "shedinja",
      "type_1": "Bug",
      "type_2": "Ghost"
  },
  {
      "id": 293,
      "name": "whismur",
      "type_1": "Normal"
  },
  {
      "id": 294,
      "name": "loudred",
      "type_1": "Normal"
  },
  {
      "id": 295,
      "name": "exploud",
      "type_1": "Normal"
  },
  {
      "id": 296,
      "name": "makuhita",
      "type_1": "Fighting"
  },
  {
      "id": 297,
      "name": "hariyama",
      "type_1": "Fighting"
  },
  {
      "id": 298,
      "name": "azurill",
      "type_1": "Normal",
      "type_2": "Fairy"
  },
  {
      "id": 299,
      "name": "nosepass",
      "type_1": "Rock"
  },
  {
      "id": 300,
      "name": "skitty",
      "type_1": "Normal"
  },
  {
      "id": 301,
      "name": "delcatty",
      "type_1": "Normal"
  },
  {
      "id": 302,
      "name": "sableye",
      "type_1": "Dark",
      "type_2": "Ghost"
  },
  {
      "id": 303,
      "name": "mawile",
      "type_1": "Steel",
      "type_2": "Fairy"
  },
  {
      "id": 304,
      "name": "aron",
      "type_1": "Steel",
      "type_2": "Rock"
  },
  {
      "id": 305,
      "name": "lairon",
      "type_1": "Steel",
      "type_2": "Rock"
  },
  {
      "id": 306,
      "name": "aggron",
      "type_1": "Steel",
      "type_2": "Rock"
  },
  {
      "id": 307,
      "name": "meditite",
      "type_1": "Fighting",
      "type_2": "Psychic"
  },
  {
      "id": 308,
      "name": "medicham",
      "type_1": "Fighting",
      "type_2": "Psychic"
  },
  {
      "id": 309,
      "name": "electrike",
      "type_1": "Electric"
  },
  {
      "id": 310,
      "name": "manectric",
      "type_1": "Electric"
  },
  {
      "id": 311,
      "name": "plusle",
      "type_1": "Electric"
  },
  {
      "id": 312,
      "name": "minun",
      "type_1": "Electric"
  },
  {
      "id": 313,
      "name": "volbeat",
      "type_1": "Bug"
  },
  {
      "id": 314,
      "name": "illumise",
      "type_1": "Bug"
  },
  {
      "id": 315,
      "name": "roselia",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 316,
      "name": "gulpin",
      "type_1": "Poison"
  },
  {
      "id": 317,
      "name": "swalot",
      "type_1": "Poison"
  },
  {
      "id": 318,
      "name": "carvanha",
      "type_1": "Water",
      "type_2": "Dark"
  },
  {
      "id": 319,
      "name": "sharpedo",
      "type_1": "Water",
      "type_2": "Dark"
  },
  {
      "id": 320,
      "name": "wailmer",
      "type_1": "Water"
  },
  {
      "id": 321,
      "name": "wailord",
      "type_1": "Water"
  },
  {
      "id": 322,
      "name": "numel",
      "type_1": "Fire",
      "type_2": "Ground"
  },
  {
      "id": 323,
      "name": "camerupt",
      "type_1": "Fire",
      "type_2": "Ground"
  },
  {
      "id": 324,
      "name": "torkoal",
      "type_1": "Fire"
  },
  {
      "id": 325,
      "name": "spoink",
      "type_1": "Psychic"
  },
  {
      "id": 326,
      "name": "grumpig",
      "type_1": "Psychic"
  },
  {
      "id": 327,
      "name": "spinda",
      "type_1": "Normal"
  },
  {
      "id": 328,
      "name": "trapinch",
      "type_1": "Ground"
  },
  {
      "id": 329,
      "name": "vibrava",
      "type_1": "Ground",
      "type_2": "Dragon"
  },
  {
      "id": 330,
      "name": "flygon",
      "type_1": "Ground",
      "type_2": "Dragon"
  },
  {
      "id": 331,
      "name": "cacnea",
      "type_1": "Grass"
  },
  {
      "id": 332,
      "name": "cacturne",
      "type_1": "Grass",
      "type_2": "Dark"
  },
  {
      "id": 333,
      "name": "swablu",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 334,
      "name": "altaria",
      "type_1": "Dragon",
      "type_2": "Flying"
  },
  {
      "id": 335,
      "name": "zangoose",
      "type_1": "Normal"
  },
  {
      "id": 336,
      "name": "seviper",
      "type_1": "Poison"
  },
  {
      "id": 337,
      "name": "lunatone",
      "type_1": "Rock",
      "type_2": "Psychic"
  },
  {
      "id": 338,
      "name": "solrock",
      "type_1": "Rock",
      "type_2": "Psychic"
  },
  {
      "id": 339,
      "name": "barboach",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 340,
      "name": "whiscash",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 341,
      "name": "corphish",
      "type_1": "Water"
  },
  {
      "id": 342,
      "name": "crawdaunt",
      "type_1": "Water",
      "type_2": "Dark"
  },
  {
      "id": 343,
      "name": "baltoy",
      "type_1": "Ground",
      "type_2": "Psychic"
  },
  {
      "id": 344,
      "name": "claydol",
      "type_1": "Ground",
      "type_2": "Psychic"
  },
  {
      "id": 345,
      "name": "lileep",
      "type_1": "Rock",
      "type_2": "Grass"
  },
  {
      "id": 346,
      "name": "cradily",
      "type_1": "Rock",
      "type_2": "Grass"
  },
  {
      "id": 347,
      "name": "anorith",
      "type_1": "Rock",
      "type_2": "Bug"
  },
  {
      "id": 348,
      "name": "armaldo",
      "type_1": "Rock",
      "type_2": "Bug"
  },
  {
      "id": 349,
      "name": "feebas",
      "type_1": "Water"
  },
  {
      "id": 350,
      "name": "milotic",
      "type_1": "Water"
  },
  {
      "id": 351,
      "name": "castform",
      "type_1": "Normal"
  },
  {
      "id": 352,
      "name": "kecleon",
      "type_1": "Normal"
  },
  {
      "id": 353,
      "name": "shuppet",
      "type_1": "Ghost"
  },
  {
      "id": 354,
      "name": "banette",
      "type_1": "Ghost"
  },
  {
      "id": 355,
      "name": "duskull",
      "type_1": "Ghost"
  },
  {
      "id": 356,
      "name": "dusclops",
      "type_1": "Ghost"
  },
  {
      "id": 357,
      "name": "tropius",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 358,
      "name": "chimecho",
      "type_1": "Psychic"
  },
  {
      "id": 359,
      "name": "absol",
      "type_1": "Dark"
  },
  {
      "id": 360,
      "name": "wynaut",
      "type_1": "Psychic"
  },
  {
      "id": 361,
      "name": "snorunt",
      "type_1": "Ice"
  },
  {
      "id": 362,
      "name": "glalie",
      "type_1": "Ice"
  },
  {
      "id": 363,
      "name": "spheal",
      "type_1": "Ice",
      "type_2": "Water"
  },
  {
      "id": 364,
      "name": "sealeo",
      "type_1": "Ice",
      "type_2": "Water"
  },
  {
      "id": 365,
      "name": "walrein",
      "type_1": "Ice",
      "type_2": "Water"
  },
  {
      "id": 366,
      "name": "clamperl",
      "type_1": "Water"
  },
  {
      "id": 367,
      "name": "huntail",
      "type_1": "Water"
  },
  {
      "id": 368,
      "name": "gorebyss",
      "type_1": "Water"
  },
  {
      "id": 369,
      "name": "relicanth",
      "type_1": "Water",
      "type_2": "Rock"
  },
  {
      "id": 370,
      "name": "luvdisc",
      "type_1": "Water"
  },
  {
      "id": 371,
      "name": "bagon",
      "type_1": "Dragon"
  },
  {
      "id": 372,
      "name": "shelgon",
      "type_1": "Dragon"
  },
  {
      "id": 373,
      "name": "salamence",
      "type_1": "Dragon",
      "type_2": "Flying"
  },
  {
      "id": 374,
      "name": "beldum",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 375,
      "name": "metang",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 376,
      "name": "metagross",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 377,
      "name": "regirock",
      "type_1": "Rock"
  },
  {
      "id": 378,
      "name": "regice",
      "type_1": "Ice"
  },
  {
      "id": 379,
      "name": "registeel",
      "type_1": "Steel"
  },
  {
      "id": 380,
      "name": "latias",
      "type_1": "Dragon",
      "type_2": "Psychic"
  },
  {
      "id": 381,
      "name": "latios",
      "type_1": "Dragon",
      "type_2": "Psychic"
  },
  {
      "id": 382,
      "name": "kyogre",
      "type_1": "Water"
  },
  {
      "id": 383,
      "name": "groudon",
      "type_1": "Ground"
  },
  {
      "id": 384,
      "name": "rayquaza",
      "type_1": "Dragon",
      "type_2": "Flying"
  },
  {
      "id": 385,
      "name": "jirachi",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 386,
      "name": "deoxys-normal",
      "type_1": "Psychic"
  },
  {
      "id": 387,
      "name": "turtwig",
      "type_1": "Grass"
  },
  {
      "id": 388,
      "name": "grotle",
      "type_1": "Grass"
  },
  {
      "id": 389,
      "name": "torterra",
      "type_1": "Grass",
      "type_2": "Ground"
  },
  {
      "id": 390,
      "name": "chimchar",
      "type_1": "Fire"
  },
  {
      "id": 391,
      "name": "monferno",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 392,
      "name": "infernape",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 393,
      "name": "piplup",
      "type_1": "Water"
  },
  {
      "id": 394,
      "name": "prinplup",
      "type_1": "Water"
  },
  {
      "id": 395,
      "name": "empoleon",
      "type_1": "Water",
      "type_2": "Steel"
  },
  {
      "id": 396,
      "name": "starly",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 397,
      "name": "staravia",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 398,
      "name": "staraptor",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 399,
      "name": "bidoof",
      "type_1": "Normal"
  },
  {
      "id": 400,
      "name": "bibarel",
      "type_1": "Normal",
      "type_2": "Water"
  },
  {
      "id": 401,
      "name": "kricketot",
      "type_1": "Bug"
  },
  {
      "id": 402,
      "name": "kricketune",
      "type_1": "Bug"
  },
  {
      "id": 403,
      "name": "shinx",
      "type_1": "Electric"
  },
  {
      "id": 404,
      "name": "luxio",
      "type_1": "Electric"
  },
  {
      "id": 405,
      "name": "luxray",
      "type_1": "Electric"
  },
  {
      "id": 406,
      "name": "budew",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 407,
      "name": "roserade",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 408,
      "name": "cranidos",
      "type_1": "Rock"
  },
  {
      "id": 409,
      "name": "rampardos",
      "type_1": "Rock"
  },
  {
      "id": 410,
      "name": "shieldon",
      "type_1": "Rock",
      "type_2": "Steel"
  },
  {
      "id": 411,
      "name": "bastiodon",
      "type_1": "Rock",
      "type_2": "Steel"
  },
  {
      "id": 412,
      "name": "burmy",
      "type_1": "Bug"
  },
  {
      "id": 413,
      "name": "wormadam-plant",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 414,
      "name": "mothim",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 415,
      "name": "combee",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 416,
      "name": "vespiquen",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 417,
      "name": "pachirisu",
      "type_1": "Electric"
  },
  {
      "id": 418,
      "name": "buizel",
      "type_1": "Water"
  },
  {
      "id": 419,
      "name": "floatzel",
      "type_1": "Water"
  },
  {
      "id": 420,
      "name": "cherubi",
      "type_1": "Grass"
  },
  {
      "id": 421,
      "name": "cherrim",
      "type_1": "Grass"
  },
  {
      "id": 422,
      "name": "shellos",
      "type_1": "Water"
  },
  {
      "id": 423,
      "name": "gastrodon",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 424,
      "name": "ambipom",
      "type_1": "Normal"
  },
  {
      "id": 425,
      "name": "drifloon",
      "type_1": "Ghost",
      "type_2": "Flying"
  },
  {
      "id": 426,
      "name": "drifblim",
      "type_1": "Ghost",
      "type_2": "Flying"
  },
  {
      "id": 427,
      "name": "buneary",
      "type_1": "Normal"
  },
  {
      "id": 428,
      "name": "lopunny",
      "type_1": "Normal"
  },
  {
      "id": 429,
      "name": "mismagius",
      "type_1": "Ghost"
  },
  {
      "id": 430,
      "name": "honchkrow",
      "type_1": "Dark",
      "type_2": "Flying"
  },
  {
      "id": 431,
      "name": "glameow",
      "type_1": "Normal"
  },
  {
      "id": 432,
      "name": "purugly",
      "type_1": "Normal"
  },
  {
      "id": 433,
      "name": "chingling",
      "type_1": "Psychic"
  },
  {
      "id": 434,
      "name": "stunky",
      "type_1": "Poison",
      "type_2": "Dark"
  },
  {
      "id": 435,
      "name": "skuntank",
      "type_1": "Poison",
      "type_2": "Dark"
  },
  {
      "id": 436,
      "name": "bronzor",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 437,
      "name": "bronzong",
      "type_1": "Steel",
      "type_2": "Psychic"
  },
  {
      "id": 438,
      "name": "bonsly",
      "type_1": "Rock"
  },
  {
      "id": 439,
      "name": "mime-jr",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 440,
      "name": "happiny",
      "type_1": "Normal"
  },
  {
      "id": 441,
      "name": "chatot",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 442,
      "name": "spiritomb",
      "type_1": "Ghost",
      "type_2": "Dark"
  },
  {
      "id": 443,
      "name": "gible",
      "type_1": "Dragon",
      "type_2": "Ground"
  },
  {
      "id": 444,
      "name": "gabite",
      "type_1": "Dragon",
      "type_2": "Ground"
  },
  {
      "id": 445,
      "name": "garchomp",
      "type_1": "Dragon",
      "type_2": "Ground"
  },
  {
      "id": 446,
      "name": "munchlax",
      "type_1": "Normal"
  },
  {
      "id": 447,
      "name": "riolu",
      "type_1": "Fighting"
  },
  {
      "id": 448,
      "name": "lucario",
      "type_1": "Fighting",
      "type_2": "Steel"
  },
  {
      "id": 449,
      "name": "hippopotas",
      "type_1": "Ground"
  },
  {
      "id": 450,
      "name": "hippowdon",
      "type_1": "Ground"
  },
  {
      "id": 451,
      "name": "skorupi",
      "type_1": "Poison",
      "type_2": "Bug"
  },
  {
      "id": 452,
      "name": "drapion",
      "type_1": "Poison",
      "type_2": "Dark"
  },
  {
      "id": 453,
      "name": "croagunk",
      "type_1": "Poison",
      "type_2": "Fighting"
  },
  {
      "id": 454,
      "name": "toxicroak",
      "type_1": "Poison",
      "type_2": "Fighting"
  },
  {
      "id": 455,
      "name": "carnivine",
      "type_1": "Grass"
  },
  {
      "id": 456,
      "name": "finneon",
      "type_1": "Water"
  },
  {
      "id": 457,
      "name": "lumineon",
      "type_1": "Water"
  },
  {
      "id": 458,
      "name": "mantyke",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 459,
      "name": "snover",
      "type_1": "Grass",
      "type_2": "Ice"
  },
  {
      "id": 460,
      "name": "abomasnow",
      "type_1": "Grass",
      "type_2": "Ice"
  },
  {
      "id": 461,
      "name": "weavile",
      "type_1": "Dark",
      "type_2": "Ice"
  },
  {
      "id": 462,
      "name": "magnezone",
      "type_1": "Electric",
      "type_2": "Steel"
  },
  {
      "id": 463,
      "name": "lickilicky",
      "type_1": "Normal"
  },
  {
      "id": 464,
      "name": "rhyperior",
      "type_1": "Ground",
      "type_2": "Rock"
  },
  {
      "id": 465,
      "name": "tangrowth",
      "type_1": "Grass"
  },
  {
      "id": 466,
      "name": "electivire",
      "type_1": "Electric"
  },
  {
      "id": 467,
      "name": "magmortar",
      "type_1": "Fire"
  },
  {
      "id": 468,
      "name": "togekiss",
      "type_1": "Fairy",
      "type_2": "Flying"
  },
  {
      "id": 469,
      "name": "yanmega",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 470,
      "name": "leafeon",
      "type_1": "Grass"
  },
  {
      "id": 471,
      "name": "glaceon",
      "type_1": "Ice"
  },
  {
      "id": 472,
      "name": "gliscor",
      "type_1": "Ground",
      "type_2": "Flying"
  },
  {
      "id": 473,
      "name": "mamoswine",
      "type_1": "Ice",
      "type_2": "Ground"
  },
  {
      "id": 474,
      "name": "porygon-z",
      "type_1": "Normal"
  },
  {
      "id": 475,
      "name": "gallade",
      "type_1": "Psychic",
      "type_2": "Fighting"
  },
  {
      "id": 476,
      "name": "probopass",
      "type_1": "Rock",
      "type_2": "Steel"
  },
  {
      "id": 477,
      "name": "dusknoir",
      "type_1": "Ghost"
  },
  {
      "id": 478,
      "name": "froslass",
      "type_1": "Ice",
      "type_2": "Ghost"
  },
  {
      "id": 479,
      "name": "rotom",
      "type_1": "Electric",
      "type_2": "Ghost"
  },
  {
      "id": 480,
      "name": "uxie",
      "type_1": "Psychic"
  },
  {
      "id": 481,
      "name": "mesprit",
      "type_1": "Psychic"
  },
  {
      "id": 482,
      "name": "azelf",
      "type_1": "Psychic"
  },
  {
      "id": 483,
      "name": "dialga",
      "type_1": "Steel",
      "type_2": "Dragon"
  },
  {
      "id": 484,
      "name": "palkia",
      "type_1": "Water",
      "type_2": "Dragon"
  },
  {
      "id": 485,
      "name": "heatran",
      "type_1": "Fire",
      "type_2": "Steel"
  },
  {
      "id": 486,
      "name": "regigigas",
      "type_1": "Normal"
  },
  {
      "id": 487,
      "name": "giratina-altered",
      "type_1": "Ghost",
      "type_2": "Dragon"
  },
  {
      "id": 488,
      "name": "cresselia",
      "type_1": "Psychic"
  },
  {
      "id": 489,
      "name": "phione",
      "type_1": "Water"
  },
  {
      "id": 490,
      "name": "manaphy",
      "type_1": "Water"
  },
  {
      "id": 491,
      "name": "darkrai",
      "type_1": "Dark"
  },
  {
      "id": 492,
      "name": "shaymin-land",
      "type_1": "Grass"
  },
  {
      "id": 493,
      "name": "arceus",
      "type_1": "Normal"
  },
  {
      "id": 494,
      "name": "victini",
      "type_1": "Psychic",
      "type_2": "Fire"
  },
  {
      "id": 495,
      "name": "snivy",
      "type_1": "Grass"
  },
  {
      "id": 496,
      "name": "servine",
      "type_1": "Grass"
  },
  {
      "id": 497,
      "name": "serperior",
      "type_1": "Grass"
  },
  {
      "id": 498,
      "name": "tepig",
      "type_1": "Fire"
  },
  {
      "id": 499,
      "name": "pignite",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 500,
      "name": "emboar",
      "type_1": "Fire",
      "type_2": "Fighting"
  },
  {
      "id": 501,
      "name": "oshawott",
      "type_1": "Water"
  },
  {
      "id": 502,
      "name": "dewott",
      "type_1": "Water"
  },
  {
      "id": 503,
      "name": "samurott",
      "type_1": "Water"
  },
  {
      "id": 504,
      "name": "patrat",
      "type_1": "Normal"
  },
  {
      "id": 505,
      "name": "watchog",
      "type_1": "Normal"
  },
  {
      "id": 506,
      "name": "lillipup",
      "type_1": "Normal"
  },
  {
      "id": 507,
      "name": "herdier",
      "type_1": "Normal"
  },
  {
      "id": 508,
      "name": "stoutland",
      "type_1": "Normal"
  },
  {
      "id": 509,
      "name": "purrloin",
      "type_1": "Dark"
  },
  {
      "id": 510,
      "name": "liepard",
      "type_1": "Dark"
  },
  {
      "id": 511,
      "name": "pansage",
      "type_1": "Grass"
  },
  {
      "id": 512,
      "name": "simisage",
      "type_1": "Grass"
  },
  {
      "id": 513,
      "name": "pansear",
      "type_1": "Fire"
  },
  {
      "id": 514,
      "name": "simisear",
      "type_1": "Fire"
  },
  {
      "id": 515,
      "name": "panpour",
      "type_1": "Water"
  },
  {
      "id": 516,
      "name": "simipour",
      "type_1": "Water"
  },
  {
      "id": 517,
      "name": "munna",
      "type_1": "Psychic"
  },
  {
      "id": 518,
      "name": "musharna",
      "type_1": "Psychic"
  },
  {
      "id": 519,
      "name": "pidove",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 520,
      "name": "tranquill",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 521,
      "name": "unfezant",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 522,
      "name": "blitzle",
      "type_1": "Electric"
  },
  {
      "id": 523,
      "name": "zebstrika",
      "type_1": "Electric"
  },
  {
      "id": 524,
      "name": "roggenrola",
      "type_1": "Rock"
  },
  {
      "id": 525,
      "name": "boldore",
      "type_1": "Rock"
  },
  {
      "id": 526,
      "name": "gigalith",
      "type_1": "Rock"
  },
  {
      "id": 527,
      "name": "woobat",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 528,
      "name": "swoobat",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 529,
      "name": "drilbur",
      "type_1": "Ground"
  },
  {
      "id": 530,
      "name": "excadrill",
      "type_1": "Ground",
      "type_2": "Steel"
  },
  {
      "id": 531,
      "name": "audino",
      "type_1": "Normal"
  },
  {
      "id": 532,
      "name": "timburr",
      "type_1": "Fighting"
  },
  {
      "id": 533,
      "name": "gurdurr",
      "type_1": "Fighting"
  },
  {
      "id": 534,
      "name": "conkeldurr",
      "type_1": "Fighting"
  },
  {
      "id": 535,
      "name": "tympole",
      "type_1": "Water"
  },
  {
      "id": 536,
      "name": "palpitoad",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 537,
      "name": "seismitoad",
      "type_1": "Water",
      "type_2": "Ground"
  },
  {
      "id": 538,
      "name": "throh",
      "type_1": "Fighting"
  },
  {
      "id": 539,
      "name": "sawk",
      "type_1": "Fighting"
  },
  {
      "id": 540,
      "name": "sewaddle",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 541,
      "name": "swadloon",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 542,
      "name": "leavanny",
      "type_1": "Bug",
      "type_2": "Grass"
  },
  {
      "id": 543,
      "name": "venipede",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 544,
      "name": "whirlipede",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 545,
      "name": "scolipede",
      "type_1": "Bug",
      "type_2": "Poison"
  },
  {
      "id": 546,
      "name": "cottonee",
      "type_1": "Grass",
      "type_2": "Fairy"
  },
  {
      "id": 547,
      "name": "whimsicott",
      "type_1": "Grass",
      "type_2": "Fairy"
  },
  {
      "id": 548,
      "name": "petilil",
      "type_1": "Grass"
  },
  {
      "id": 549,
      "name": "lilligant",
      "type_1": "Grass"
  },
  {
      "id": 550,
      "name": "basculin-red-striped",
      "type_1": "Water"
  },
  {
      "id": 551,
      "name": "sandile",
      "type_1": "Ground",
      "type_2": "Dark"
  },
  {
      "id": 552,
      "name": "krokorok",
      "type_1": "Ground",
      "type_2": "Dark"
  },
  {
      "id": 553,
      "name": "krookodile",
      "type_1": "Ground",
      "type_2": "Dark"
  },
  {
      "id": 554,
      "name": "darumaka",
      "type_1": "Fire"
  },
  {
      "id": 555,
      "name": "darmanitan-standard",
      "type_1": "Fire"
  },
  {
      "id": 556,
      "name": "maractus",
      "type_1": "Grass"
  },
  {
      "id": 557,
      "name": "dwebble",
      "type_1": "Bug",
      "type_2": "Rock"
  },
  {
      "id": 558,
      "name": "crustle",
      "type_1": "Bug",
      "type_2": "Rock"
  },
  {
      "id": 559,
      "name": "scraggy",
      "type_1": "Dark",
      "type_2": "Fighting"
  },
  {
      "id": 560,
      "name": "scrafty",
      "type_1": "Dark",
      "type_2": "Fighting"
  },
  {
      "id": 561,
      "name": "sigilyph",
      "type_1": "Psychic",
      "type_2": "Flying"
  },
  {
      "id": 562,
      "name": "yamask",
      "type_1": "Ghost"
  },
  {
      "id": 563,
      "name": "cofagrigus",
      "type_1": "Ghost"
  },
  {
      "id": 564,
      "name": "tirtouga",
      "type_1": "Water",
      "type_2": "Rock"
  },
  {
      "id": 565,
      "name": "carracosta",
      "type_1": "Water",
      "type_2": "Rock"
  },
  {
      "id": 566,
      "name": "archen",
      "type_1": "Rock",
      "type_2": "Flying"
  },
  {
      "id": 567,
      "name": "archeops",
      "type_1": "Rock",
      "type_2": "Flying"
  },
  {
      "id": 568,
      "name": "trubbish",
      "type_1": "Poison"
  },
  {
      "id": 569,
      "name": "garbodor",
      "type_1": "Poison"
  },
  {
      "id": 570,
      "name": "zorua",
      "type_1": "Dark"
  },
  {
      "id": 571,
      "name": "zoroark",
      "type_1": "Dark"
  },
  {
      "id": 572,
      "name": "minccino",
      "type_1": "Normal"
  },
  {
      "id": 573,
      "name": "cinccino",
      "type_1": "Normal"
  },
  {
      "id": 574,
      "name": "gothita",
      "type_1": "Psychic"
  },
  {
      "id": 575,
      "name": "gothorita",
      "type_1": "Psychic"
  },
  {
      "id": 576,
      "name": "gothitelle",
      "type_1": "Psychic"
  },
  {
      "id": 577,
      "name": "solosis",
      "type_1": "Psychic"
  },
  {
      "id": 578,
      "name": "duosion",
      "type_1": "Psychic"
  },
  {
      "id": 579,
      "name": "reuniclus",
      "type_1": "Psychic"
  },
  {
      "id": 580,
      "name": "ducklett",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 581,
      "name": "swanna",
      "type_1": "Water",
      "type_2": "Flying"
  },
  {
      "id": 582,
      "name": "vanillite",
      "type_1": "Ice"
  },
  {
      "id": 583,
      "name": "vanillish",
      "type_1": "Ice"
  },
  {
      "id": 584,
      "name": "vanilluxe",
      "type_1": "Ice"
  },
  {
      "id": 585,
      "name": "deerling",
      "type_1": "Normal",
      "type_2": "Grass"
  },
  {
      "id": 586,
      "name": "sawsbuck",
      "type_1": "Normal",
      "type_2": "Grass"
  },
  {
      "id": 587,
      "name": "emolga",
      "type_1": "Electric",
      "type_2": "Flying"
  },
  {
      "id": 588,
      "name": "karrablast",
      "type_1": "Bug"
  },
  {
      "id": 589,
      "name": "escavalier",
      "type_1": "Bug",
      "type_2": "Steel"
  },
  {
      "id": 590,
      "name": "foongus",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 591,
      "name": "amoonguss",
      "type_1": "Grass",
      "type_2": "Poison"
  },
  {
      "id": 592,
      "name": "frillish",
      "type_1": "Water",
      "type_2": "Ghost"
  },
  {
      "id": 593,
      "name": "jellicent",
      "type_1": "Water",
      "type_2": "Ghost"
  },
  {
      "id": 594,
      "name": "alomomola",
      "type_1": "Water"
  },
  {
      "id": 595,
      "name": "joltik",
      "type_1": "Bug",
      "type_2": "Electric"
  },
  {
      "id": 596,
      "name": "galvantula",
      "type_1": "Bug",
      "type_2": "Electric"
  },
  {
      "id": 597,
      "name": "ferroseed",
      "type_1": "Grass",
      "type_2": "Steel"
  },
  {
      "id": 598,
      "name": "ferrothorn",
      "type_1": "Grass",
      "type_2": "Steel"
  },
  {
      "id": 599,
      "name": "klink",
      "type_1": "Steel"
  },
  {
      "id": 600,
      "name": "klang",
      "type_1": "Steel"
  },
  {
      "id": 601,
      "name": "klinklang",
      "type_1": "Steel"
  },
  {
      "id": 602,
      "name": "tynamo",
      "type_1": "Electric"
  },
  {
      "id": 603,
      "name": "eelektrik",
      "type_1": "Electric"
  },
  {
      "id": 604,
      "name": "eelektross",
      "type_1": "Electric"
  },
  {
      "id": 605,
      "name": "elgyem",
      "type_1": "Psychic"
  },
  {
      "id": 606,
      "name": "beheeyem",
      "type_1": "Psychic"
  },
  {
      "id": 607,
      "name": "litwick",
      "type_1": "Ghost",
      "type_2": "Fire"
  },
  {
      "id": 608,
      "name": "lampent",
      "type_1": "Ghost",
      "type_2": "Fire"
  },
  {
      "id": 609,
      "name": "chandelure",
      "type_1": "Ghost",
      "type_2": "Fire"
  },
  {
      "id": 610,
      "name": "axew",
      "type_1": "Dragon"
  },
  {
      "id": 611,
      "name": "fraxure",
      "type_1": "Dragon"
  },
  {
      "id": 612,
      "name": "haxorus",
      "type_1": "Dragon"
  },
  {
      "id": 613,
      "name": "cubchoo",
      "type_1": "Ice"
  },
  {
      "id": 614,
      "name": "beartic",
      "type_1": "Ice"
  },
  {
      "id": 615,
      "name": "cryogonal",
      "type_1": "Ice"
  },
  {
      "id": 616,
      "name": "shelmet",
      "type_1": "Bug"
  },
  {
      "id": 617,
      "name": "accelgor",
      "type_1": "Bug"
  },
  {
      "id": 618,
      "name": "stunfisk",
      "type_1": "Ground",
      "type_2": "Electric"
  },
  {
      "id": 619,
      "name": "mienfoo",
      "type_1": "Fighting"
  },
  {
      "id": 620,
      "name": "mienshao",
      "type_1": "Fighting"
  },
  {
      "id": 621,
      "name": "druddigon",
      "type_1": "Dragon"
  },
  {
      "id": 622,
      "name": "golett",
      "type_1": "Ground",
      "type_2": "Ghost"
  },
  {
      "id": 623,
      "name": "golurk",
      "type_1": "Ground",
      "type_2": "Ghost"
  },
  {
      "id": 624,
      "name": "pawniard",
      "type_1": "Dark",
      "type_2": "Steel"
  },
  {
      "id": 625,
      "name": "bisharp",
      "type_1": "Dark",
      "type_2": "Steel"
  },
  {
      "id": 626,
      "name": "bouffalant",
      "type_1": "Normal"
  },
  {
      "id": 627,
      "name": "rufflet",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 628,
      "name": "braviary",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 629,
      "name": "vullaby",
      "type_1": "Dark",
      "type_2": "Flying"
  },
  {
      "id": 630,
      "name": "mandibuzz",
      "type_1": "Dark",
      "type_2": "Flying"
  },
  {
      "id": 631,
      "name": "heatmor",
      "type_1": "Fire"
  },
  {
      "id": 632,
      "name": "durant",
      "type_1": "Bug",
      "type_2": "Steel"
  },
  {
      "id": 633,
      "name": "deino",
      "type_1": "Dark",
      "type_2": "Dragon"
  },
  {
      "id": 634,
      "name": "zweilous",
      "type_1": "Dark",
      "type_2": "Dragon"
  },
  {
      "id": 635,
      "name": "hydreigon",
      "type_1": "Dark",
      "type_2": "Dragon"
  },
  {
      "id": 636,
      "name": "larvesta",
      "type_1": "Bug",
      "type_2": "Fire"
  },
  {
      "id": 637,
      "name": "volcarona",
      "type_1": "Bug",
      "type_2": "Fire"
  },
  {
      "id": 638,
      "name": "cobalion",
      "type_1": "Steel",
      "type_2": "Fighting"
  },
  {
      "id": 639,
      "name": "terrakion",
      "type_1": "Rock",
      "type_2": "Fighting"
  },
  {
      "id": 640,
      "name": "virizion",
      "type_1": "Grass",
      "type_2": "Fighting"
  },
  {
      "id": 641,
      "name": "tornadus-incarnate",
      "type_1": "Flying"
  },
  {
      "id": 642,
      "name": "thundurus-incarnate",
      "type_1": "Electric",
      "type_2": "Flying"
  },
  {
      "id": 643,
      "name": "reshiram",
      "type_1": "Dragon",
      "type_2": "Fire"
  },
  {
      "id": 644,
      "name": "zekrom",
      "type_1": "Dragon",
      "type_2": "Electric"
  },
  {
      "id": 645,
      "name": "landorus-incarnate",
      "type_1": "Ground",
      "type_2": "Flying"
  },
  {
      "id": 646,
      "name": "kyurem",
      "type_1": "Dragon",
      "type_2": "Ice"
  },
  {
      "id": 647,
      "name": "keldeo-ordinary",
      "type_1": "Water",
      "type_2": "Fighting"
  },
  {
      "id": 648,
      "name": "meloetta-aria",
      "type_1": "Normal",
      "type_2": "Psychic"
  },
  {
      "id": 649,
      "name": "genesect",
      "type_1": "Bug",
      "type_2": "Steel"
  },
  {
      "id": 650,
      "name": "chespin",
      "type_1": "Grass"
  },
  {
      "id": 651,
      "name": "quilladin",
      "type_1": "Grass"
  },
  {
      "id": 652,
      "name": "chesnaught",
      "type_1": "Grass",
      "type_2": "Fighting"
  },
  {
      "id": 653,
      "name": "fennekin",
      "type_1": "Fire"
  },
  {
      "id": 654,
      "name": "braixen",
      "type_1": "Fire"
  },
  {
      "id": 655,
      "name": "delphox",
      "type_1": "Fire",
      "type_2": "Psychic"
  },
  {
      "id": 656,
      "name": "froakie",
      "type_1": "Water"
  },
  {
      "id": 657,
      "name": "frogadier",
      "type_1": "Water"
  },
  {
      "id": 658,
      "name": "greninja",
      "type_1": "Water",
      "type_2": "Dark"
  },
  {
      "id": 659,
      "name": "bunnelby",
      "type_1": "Normal"
  },
  {
      "id": 660,
      "name": "diggersby",
      "type_1": "Normal",
      "type_2": "Ground"
  },
  {
      "id": 661,
      "name": "fletchling",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 662,
      "name": "fletchinder",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 663,
      "name": "talonflame",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 664,
      "name": "scatterbug",
      "type_1": "Bug"
  },
  {
      "id": 665,
      "name": "spewpa",
      "type_1": "Bug"
  },
  {
      "id": 666,
      "name": "vivillon",
      "type_1": "Bug",
      "type_2": "Flying"
  },
  {
      "id": 667,
      "name": "litleo",
      "type_1": "Fire",
      "type_2": "Normal"
  },
  {
      "id": 668,
      "name": "pyroar",
      "type_1": "Fire",
      "type_2": "Normal"
  },
  {
      "id": 669,
      "name": "flabebe",
      "type_1": "Fairy"
  },
  {
      "id": 670,
      "name": "floette",
      "type_1": "Fairy"
  },
  {
      "id": 671,
      "name": "florges",
      "type_1": "Fairy"
  },
  {
      "id": 672,
      "name": "skiddo",
      "type_1": "Grass"
  },
  {
      "id": 673,
      "name": "gogoat",
      "type_1": "Grass"
  },
  {
      "id": 674,
      "name": "pancham",
      "type_1": "Fighting"
  },
  {
      "id": 675,
      "name": "pangoro",
      "type_1": "Fighting",
      "type_2": "Dark"
  },
  {
      "id": 676,
      "name": "furfrou",
      "type_1": "Normal"
  },
  {
      "id": 677,
      "name": "espurr",
      "type_1": "Psychic"
  },
  {
      "id": 678,
      "name": "meowstic-male",
      "type_1": "Psychic"
  },
  {
      "id": 679,
      "name": "honedge",
      "type_1": "Steel",
      "type_2": "Ghost"
  },
  {
      "id": 680,
      "name": "doublade",
      "type_1": "Steel",
      "type_2": "Ghost"
  },
  {
      "id": 681,
      "name": "aegislash-shield",
      "type_1": "Steel",
      "type_2": "Ghost"
  },
  {
      "id": 682,
      "name": "spritzee",
      "type_1": "Fairy"
  },
  {
      "id": 683,
      "name": "aromatisse",
      "type_1": "Fairy"
  },
  {
      "id": 684,
      "name": "swirlix",
      "type_1": "Fairy"
  },
  {
      "id": 685,
      "name": "slurpuff",
      "type_1": "Fairy"
  },
  {
      "id": 686,
      "name": "inkay",
      "type_1": "Dark",
      "type_2": "Psychic"
  },
  {
      "id": 687,
      "name": "malamar",
      "type_1": "Dark",
      "type_2": "Psychic"
  },
  {
      "id": 688,
      "name": "binacle",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 689,
      "name": "barbaracle",
      "type_1": "Rock",
      "type_2": "Water"
  },
  {
      "id": 690,
      "name": "skrelp",
      "type_1": "Poison",
      "type_2": "Water"
  },
  {
      "id": 691,
      "name": "dragalge",
      "type_1": "Poison",
      "type_2": "Dragon"
  },
  {
      "id": 692,
      "name": "clauncher",
      "type_1": "Water"
  },
  {
      "id": 693,
      "name": "clawitzer",
      "type_1": "Water"
  },
  {
      "id": 694,
      "name": "helioptile",
      "type_1": "Electric",
      "type_2": "Normal"
  },
  {
      "id": 695,
      "name": "heliolisk",
      "type_1": "Electric",
      "type_2": "Normal"
  },
  {
      "id": 696,
      "name": "tyrunt",
      "type_1": "Rock",
      "type_2": "Dragon"
  },
  {
      "id": 697,
      "name": "tyrantrum",
      "type_1": "Rock",
      "type_2": "Dragon"
  },
  {
      "id": 698,
      "name": "amaura",
      "type_1": "Rock",
      "type_2": "Ice"
  },
  {
      "id": 699,
      "name": "aurorus",
      "type_1": "Rock",
      "type_2": "Ice"
  },
  {
      "id": 700,
      "name": "sylveon",
      "type_1": "Fairy"
  },
  {
      "id": 701,
      "name": "hawlucha",
      "type_1": "Fighting",
      "type_2": "Flying"
  },
  {
      "id": 702,
      "name": "dedenne",
      "type_1": "Electric",
      "type_2": "Fairy"
  },
  {
      "id": 703,
      "name": "carbink",
      "type_1": "Rock",
      "type_2": "Fairy"
  },
  {
      "id": 704,
      "name": "goomy",
      "type_1": "Dragon"
  },
  {
      "id": 705,
      "name": "sliggoo",
      "type_1": "Dragon"
  },
  {
      "id": 706,
      "name": "goodra",
      "type_1": "Dragon"
  },
  {
      "id": 707,
      "name": "klefki",
      "type_1": "Steel",
      "type_2": "Fairy"
  },
  {
      "id": 708,
      "name": "phantump",
      "type_1": "Ghost",
      "type_2": "Grass"
  },
  {
      "id": 709,
      "name": "trevenant",
      "type_1": "Ghost",
      "type_2": "Grass"
  },
  {
      "id": 710,
      "name": "pumpkaboo-average",
      "type_1": "Ghost",
      "type_2": "Grass"
  },
  {
      "id": 711,
      "name": "gourgeist-average",
      "type_1": "Ghost",
      "type_2": "Grass"
  },
  {
      "id": 712,
      "name": "bergmite",
      "type_1": "Ice"
  },
  {
      "id": 713,
      "name": "avalugg",
      "type_1": "Ice"
  },
  {
      "id": 714,
      "name": "noibat",
      "type_1": "Flying",
      "type_2": "Dragon"
  },
  {
      "id": 715,
      "name": "noivern",
      "type_1": "Flying",
      "type_2": "Dragon"
  },
  {
      "id": 716,
      "name": "xerneas",
      "type_1": "Fairy"
  },
  {
      "id": 717,
      "name": "yveltal",
      "type_1": "Dark",
      "type_2": "Flying"
  },
  {
      "id": 718,
      "name": "zygarde",
      "type_1": "Dragon",
      "type_2": "Ground"
  },
  {
      "id": 719,
      "name": "diancie",
      "type_1": "Rock",
      "type_2": "Fairy"
  },
  {
      "id": 720,
      "name": "hoopa",
      "type_1": "Psychic",
      "type_2": "Ghost"
  },
  {
      "id": 721,
      "name": "volcanion",
      "type_1": "Fire",
      "type_2": "Water"
  },
  {
      "id": 722,
      "name": "rowlet",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 723,
      "name": "dartrix",
      "type_1": "Grass",
      "type_2": "Flying"
  },
  {
      "id": 724,
      "name": "decidueye",
      "type_1": "Grass",
      "type_2": "Ghost"
  },
  {
      "id": 725,
      "name": "litten",
      "type_1": "Fire"
  },
  {
      "id": 726,
      "name": "torracat",
      "type_1": "Fire"
  },
  {
      "id": 727,
      "name": "incineroar",
      "type_1": "Fire",
      "type_2": "Dark"
  },
  {
      "id": 728,
      "name": "popplio",
      "type_1": "Water"
  },
  {
      "id": 729,
      "name": "brionne",
      "type_1": "Water"
  },
  {
      "id": 730,
      "name": "primarina",
      "type_1": "Water",
      "type_2": "Fairy"
  },
  {
      "id": 731,
      "name": "pikipek",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 732,
      "name": "trumbeak",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 733,
      "name": "toucannon",
      "type_1": "Normal",
      "type_2": "Flying"
  },
  {
      "id": 734,
      "name": "yungoos",
      "type_1": "Normal"
  },
  {
      "id": 735,
      "name": "gumshoos",
      "type_1": "Normal"
  },
  {
      "id": 736,
      "name": "grubbin",
      "type_1": "Bug"
  },
  {
      "id": 737,
      "name": "charjabug",
      "type_1": "Bug",
      "type_2": "Electric"
  },
  {
      "id": 738,
      "name": "vikavolt",
      "type_1": "Bug",
      "type_2": "Electric"
  },
  {
      "id": 739,
      "name": "crabrawler",
      "type_1": "Fighting"
  },
  {
      "id": 740,
      "name": "crabominable",
      "type_1": "Fighting",
      "type_2": "Ice"
  },
  {
      "id": 741,
      "name": "oricorio-baile",
      "type_1": "Fire",
      "type_2": "Flying"
  },
  {
      "id": 742,
      "name": "cutiefly",
      "type_1": "Bug",
      "type_2": "Fairy"
  },
  {
      "id": 743,
      "name": "ribombee",
      "type_1": "Bug",
      "type_2": "Fairy"
  },
  {
      "id": 744,
      "name": "rockruff",
      "type_1": "Rock"
  },
  {
      "id": 745,
      "name": "lycanroc-midday",
      "type_1": "Rock"
  },
  {
      "id": 746,
      "name": "wishiwashi-solo",
      "type_1": "Water"
  },
  {
      "id": 747,
      "name": "mareanie",
      "type_1": "Poison",
      "type_2": "Water"
  },
  {
      "id": 748,
      "name": "toxapex",
      "type_1": "Poison",
      "type_2": "Water"
  },
  {
      "id": 749,
      "name": "mudbray",
      "type_1": "Ground"
  },
  {
      "id": 750,
      "name": "mudsdale",
      "type_1": "Ground"
  },
  {
      "id": 751,
      "name": "dewpider",
      "type_1": "Water",
      "type_2": "Bug"
  },
  {
      "id": 752,
      "name": "araquanid",
      "type_1": "Water",
      "type_2": "Bug"
  },
  {
      "id": 753,
      "name": "fomantis",
      "type_1": "Grass"
  },
  {
      "id": 754,
      "name": "lurantis",
      "type_1": "Grass"
  },
  {
      "id": 755,
      "name": "morelull",
      "type_1": "Grass",
      "type_2": "Fairy"
  },
  {
      "id": 756,
      "name": "shiinotic",
      "type_1": "Grass",
      "type_2": "Fairy"
  },
  {
      "id": 757,
      "name": "salandit",
      "type_1": "Poison",
      "type_2": "Fire"
  },
  {
      "id": 758,
      "name": "salazzle",
      "type_1": "Poison",
      "type_2": "Fire"
  },
  {
      "id": 759,
      "name": "stufful",
      "type_1": "Normal",
      "type_2": "Fighting"
  },
  {
      "id": 760,
      "name": "bewear",
      "type_1": "Normal",
      "type_2": "Fighting"
  },
  {
      "id": 761,
      "name": "bounsweet",
      "type_1": "Grass"
  },
  {
      "id": 762,
      "name": "steenee",
      "type_1": "Grass"
  },
  {
      "id": 763,
      "name": "tsareena",
      "type_1": "Grass"
  },
  {
      "id": 764,
      "name": "comfey",
      "type_1": "Fairy"
  },
  {
      "id": 765,
      "name": "oranguru",
      "type_1": "Normal",
      "type_2": "Psychic"
  },
  {
      "id": 766,
      "name": "passimian",
      "type_1": "Fighting"
  },
  {
      "id": 767,
      "name": "wimpod",
      "type_1": "Bug",
      "type_2": "Water"
  },
  {
      "id": 768,
      "name": "golisopod",
      "type_1": "Bug",
      "type_2": "Water"
  },
  {
      "id": 769,
      "name": "sandygast",
      "type_1": "Ghost",
      "type_2": "Ground"
  },
  {
      "id": 770,
      "name": "palossand",
      "type_1": "Ghost",
      "type_2": "Ground"
  },
  {
      "id": 771,
      "name": "pyukumuku",
      "type_1": "Water"
  },
  {
      "id": 772,
      "name": "type-null",
      "type_1": "Normal"
  },
  {
      "id": 773,
      "name": "silvally",
      "type_1": "Normal"
  },
  {
      "id": 774,
      "name": "minior-red-meteor",
      "type_1": "Rock",
      "type_2": "Flying"
  },
  {
      "id": 775,
      "name": "komala",
      "type_1": "Normal"
  },
  {
      "id": 776,
      "name": "turtonator",
      "type_1": "Fire",
      "type_2": "Dragon"
  },
  {
      "id": 777,
      "name": "togedemaru",
      "type_1": "Electric",
      "type_2": "Steel"
  },
  {
      "id": 778,
      "name": "mimikyu-disguised",
      "type_1": "Ghost",
      "type_2": "Fairy"
  },
  {
      "id": 779,
      "name": "bruxish",
      "type_1": "Water",
      "type_2": "Psychic"
  },
  {
      "id": 780,
      "name": "drampa",
      "type_1": "Normal",
      "type_2": "Dragon"
  },
  {
      "id": 781,
      "name": "dhelmise",
      "type_1": "Ghost",
      "type_2": "Grass"
  },
  {
      "id": 782,
      "name": "jangmo-o",
      "type_1": "Dragon"
  },
  {
      "id": 783,
      "name": "hakamo-o",
      "type_1": "Dragon",
      "type_2": "Fighting"
  },
  {
      "id": 784,
      "name": "kommo-o",
      "type_1": "Dragon",
      "type_2": "Fighting"
  },
  {
      "id": 785,
      "name": "tapu-koko",
      "type_1": "Electric",
      "type_2": "Fairy"
  },
  {
      "id": 786,
      "name": "tapu-lele",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 787,
      "name": "tapu-bulu",
      "type_1": "Grass",
      "type_2": "Fairy"
  },
  {
      "id": 788,
      "name": "tapu-fini",
      "type_1": "Water",
      "type_2": "Fairy"
  },
  {
      "id": 789,
      "name": "cosmog",
      "type_1": "Psychic"
  },
  {
      "id": 790,
      "name": "cosmoem",
      "type_1": "Psychic"
  },
  {
      "id": 791,
      "name": "solgaleo",
      "type_1": "Psychic",
      "type_2": "Steel"
  },
  {
      "id": 792,
      "name": "lunala",
      "type_1": "Psychic",
      "type_2": "Ghost"
  },
  {
      "id": 793,
      "name": "nihilego",
      "type_1": "Rock",
      "type_2": "Poison"
  },
  {
      "id": 794,
      "name": "buzzwole",
      "type_1": "Bug",
      "type_2": "Fighting"
  },
  {
      "id": 795,
      "name": "pheromosa",
      "type_1": "Bug",
      "type_2": "Fighting"
  },
  {
      "id": 796,
      "name": "xurkitree",
      "type_1": "Electric"
  },
  {
      "id": 797,
      "name": "celesteela",
      "type_1": "Steel",
      "type_2": "Flying"
  },
  {
      "id": 798,
      "name": "kartana",
      "type_1": "Grass",
      "type_2": "Steel"
  },
  {
      "id": 799,
      "name": "guzzlord",
      "type_1": "Dark",
      "type_2": "Dragon"
  },
  {
      "id": 800,
      "name": "necrozma",
      "type_1": "Psychic"
  },
  {
      "id": 801,
      "name": "magearna",
      "type_1": "Steel",
      "type_2": "Fairy"
  },
  {
      "id": 802,
      "name": "marshadow",
      "type_1": "Fighting",
      "type_2": "Ghost"
  },
  {
      "id": 803,
      "name": "poipole",
      "type_1": "Poison"
  },
  {
      "id": 804,
      "name": "naganadel",
      "type_1": "Poison",
      "type_2": "Dragon"
  },
  {
      "id": 805,
      "name": "stakataka",
      "type_1": "Rock",
      "type_2": "Steel"
  },
  {
      "id": 806,
      "name": "blacephalon",
      "type_1": "Fire",
      "type_2": "Ghost"
  },
  {
      "id": 807,
      "name": "zeraora",
      "type_1": "Electric"
  },
  {
      "id": 808,
      "name": "Meltan",
      "type_1": "Steel"
  },
  {
      "id": 809,
      "name": "Melmetal",
      "type_1": "Steel"
  },
  {
      "id": 810,
      "name": "Grookey",
      "type_1": "Grass"
  },
  {
      "id": 811,
      "name": "Thwackey",
      "type_1": "Grass"
  },
  {
      "id": 812,
      "name": "Rillaboom",
      "type_1": "Grass"
  },
  {
      "id": 813,
      "name": "Scorbunny",
      "type_1": "Fire"
  },
  {
      "id": 814,
      "name": "Raboot",
      "type_1": "Fire"
  },
  {
      "id": 815,
      "name": "Cinderace",
      "type_1": "Fire"
  },
  {
      "id": 816,
      "name": "Sobble",
      "type_1": "Water"
  },
  {
      "id": 817,
      "name": "Drizzile",
      "type_1": "Water"
  },
  {
      "id": 818,
      "name": "Inteleon",
      "type_1": "Water"
  },
  {
      "id": 819,
      "name": "Skwovet",
      "type_1": "Normal"
  },
  {
      "id": 820,
      "name": "Greedent",
      "type_1": "Normal"
  },
  {
      "id": 821,
      "name": "Rookidee",
      "type_1": "Flying"
  },
  {
      "id": 822,
      "name": "Corvisquire",
      "type_1": "Flying"
  },
  {
      "id": 823,
      "name": "Corviknight",
      "type_1": "Flying",
      "type_2": "Steel"
  },
  {
      "id": 824,
      "name": "Blipbug",
      "type_1": "Bug"
  },
  {
      "id": 825,
      "name": "Dottler",
      "type_1": "Bug",
      "type_2": "Psychic"
  },
  {
      "id": 826,
      "name": "Orbeetle",
      "type_1": "Bug",
      "type_2": "Psychic"
  },
  {
      "id": 827,
      "name": "Nickit",
      "type_1": "Dark"
  },
  {
      "id": 828,
      "name": "Thievul",
      "type_1": "Dark"
  },
  {
      "id": 829,
      "name": "Gossifleur",
      "type_1": "Grass"
  },
  {
      "id": 830,
      "name": "Eldegoss",
      "type_1": "Grass"
  },
  {
      "id": 831,
      "name": "Wooloo",
      "type_1": "Normal"
  },
  {
      "id": 832,
      "name": "Dubwool",
      "type_1": "Normal"
  },
  {
      "id": 833,
      "name": "Chewtle",
      "type_1": "Water"
  },
  {
      "id": 834,
      "name": "Drednaw",
      "type_1": "Water",
      "type_2": "Rock"
  },
  {
      "id": 835,
      "name": "Yamper",
      "type_1": "Electric"
  },
  {
      "id": 836,
      "name": "Boltund",
      "type_1": "Electric"
  },
  {
      "id": 837,
      "name": "Rolycoly",
      "type_1": "Rock"
  },
  {
      "id": 838,
      "name": "Carkol",
      "type_1": "Rock",
      "type_2": "Fire"
  },
  {
      "id": 839,
      "name": "Coalossal",
      "type_1": "Rock",
      "type_2": "Fire"
  },
  {
      "id": 840,
      "name": "Applin",
      "type_1": "Grass",
      "type_2": "Dragon"
  },
  {
      "id": 841,
      "name": "Flapple",
      "type_1": "Grass",
      "type_2": "Dragon"
  },
  {
      "id": 842,
      "name": "Appletun",
      "type_1": "Grass",
      "type_2": "Dragon"
  },
  {
      "id": 843,
      "name": "Silicobra",
      "type_1": "Ground"
  },
  {
      "id": 844,
      "name": "Sandaconda",
      "type_1": "Ground"
  },
  {
      "id": 845,
      "name": "Cramorant",
      "type_1": "Flying",
      "type_2": "Water"
  },
  {
      "id": 846,
      "name": "Arrokuda",
      "type_1": "Water"
  },
  {
      "id": 847,
      "name": "Barraskewda",
      "type_1": "Water"
  },
  {
      "id": 848,
      "name": "Toxel",
      "type_1": "Electric",
      "type_2": "Poison"
  },
  {
      "id": 849,
      "name": "Toxtricity",
      "type_1": "Electric",
      "type_2": "Poison"
  },
  {
      "id": 850,
      "name": "Sizzlipede",
      "type_1": "Fire",
      "type_2": "Bug"
  },
  {
      "id": 851,
      "name": "Centiskorch",
      "type_1": "Fire",
      "type_2": "Bug"
  },
  {
      "id": 852,
      "name": "Clobbopus",
      "type_1": "Fighting"
  },
  {
      "id": 853,
      "name": "Grapploct",
      "type_1": "Fighting"
  },
  {
      "id": 854,
      "name": "Sinistea",
      "type_1": "Ghost"
  },
  {
      "id": 855,
      "name": "Polteageist",
      "type_1": "Ghost"
  },
  {
      "id": 856,
      "name": "Hatenna",
      "type_1": "Psychic"
  },
  {
      "id": 857,
      "name": "Hattrem",
      "type_1": "Psychic"
  },
  {
      "id": 858,
      "name": "Hatterene",
      "type_1": "Psychic",
      "type_2": "Fairy"
  },
  {
      "id": 859,
      "name": "Impidimp",
      "type_1": "Dark",
      "type_2": "Fairy"
  },
  {
      "id": 860,
      "name": "Morgrem",
      "type_1": "Dark",
      "type_2": "Fairy"
  },
  {
      "id": 861,
      "name": "Grimmsnarl",
      "type_1": "Dark",
      "type_2": "Fairy"
  },
  {
      "id": 862,
      "name": "Obstagoon",
      "type_1": "Dark",
      "type_2": "Normal"
  },
  {
      "id": 863,
      "name": "Perrserker",
      "type_1": "Steel"
  },
  {
      "id": 864,
      "name": "Cursola",
      "type_1": "Ghost"
  },
  {
      "id": 865,
      "name": "Sirfetch’d",
      "type_1": "Fighting"
  },
  {
      "id": 866,
      "name": "Mr. Rime",
      "type_1": "Ice",
      "type_2": "Psychic"
  },
  {
      "id": 867,
      "name": "Runerigus",
      "type_1": "Ground",
      "type_2": "Ghost"
  },
  {
      "id": 868,
      "name": "Milcery",
      "type_1": "Fairy"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "type_1": "Fairy"
  },
  {
      "id": 870,
      "name": "Falinks",
      "type_1": "Fighting"
  },
  {
      "id": 871,
      "name": "Pincurchin",
      "type_1": "Electric"
  },
  {
      "id": 872,
      "name": "Snom",
      "type_1": "Ice",
      "type_2": "Bug"
  },
  {
      "id": 873,
      "name": "Frosmoth",
      "type_1": "Ice",
      "type_2": "Bug"
  },
  {
      "id": 874,
      "name": "Stonjourner",
      "type_1": "Rock"
  },
  {
      "id": 875,
      "name": "Eiscue",
      "type_1": "Ice"
  },
  {
      "id": 876,
      "name": "Indeedee",
      "type_1": "Psychic",
      "type_2": "Normal"
  },
  {
      "id": 877,
      "name": "Morpeko",
      "type_1": "Electric",
      "type_2": "Dark"
  },
  {
      "id": 878,
      "name": "Cufant",
      "type_1": "Steel"
  },
  {
      "id": 879,
      "name": "Copperajah",
      "type_1": "Steel"
  },
  {
      "id": 880,
      "name": "Dracozolt",
      "type_1": "Electric",
      "type_2": "Dragon"
  },
  {
      "id": 881,
      "name": "Arctozolt",
      "type_1": "Electric",
      "type_2": "Ice"
  },
  {
      "id": 882,
      "name": "Dracovish",
      "type_1": "Water",
      "type_2": "Dragon"
  },
  {
      "id": 883,
      "name": "Arctovish",
      "type_1": "Water",
      "type_2": "Ice"
  },
  {
      "id": 884,
      "name": "Duraludon",
      "type_1": "Steel",
      "type_2": "Dragon"
  },
  {
      "id": 885,
      "name": "Dreepy",
      "type_1": "Dragon",
      "type_2": "Ghost"
  },
  {
      "id": 886,
      "name": "Drakloak",
      "type_1": "Dragon",
      "type_2": "Ghost"
  },
  {
      "id": 887,
      "name": "Dragapult",
      "type_1": "Dragon",
      "type_2": "Ghost"
  },
  {
      "id": 888,
      "name": "Zacian",
      "type_1": "Fairy"
  },
  {
      "id": 889,
      "name": "Zamazenta",
      "type_1": "Fighting"
  },
  {
      "id": 890,
      "name": "Eternatus",
      "type_1": "Poison",
      "type_2": "Dragon"
  }
];

//const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teams: [],
      team:{},
      style: {
        height: "200px"
      },
    };
  }

  getTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
      method: 'GET'});
    const body = await response.text();

  if (response.status !== 200) throw Error(body.message);
      //console.log("getTeams " + body);
    return body;
    };
 
  putTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
      ,
      body: JSON.stringify(this.state.teams)
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  putDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/pokedex`, {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
      ,
      body: JSON.stringify(p2)
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  delTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
      method: 'delete',
      body: JSON.stringify(this.state.teams)
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  delDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/pokedex`, {
      method: 'delete'
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  calcHeight =() =>{
    let winHeight = window.innerHeight;
    let headHeight = document.getElementById("header").clientHeight;
    let contentHeight = document.getElementById("content").clientHeight;
    let navHeight = document.getElementById("nav").clientHeight;
    let differenciate = (contentHeight - navHeight)/2;
    let newHeight = ((winHeight - headHeight) + differenciate) - 60 +"px";
    this.setState(prevState => {
      let style = Object.assign({}, prevState.style);   // creating copy of state variable style
      style.height = newHeight;                         // update the name property, assign a new value                 
      return { style };                                 // return new object style object
    })
  }

  componentDidMount() {
    this.getTeams()
      .then(res => {
        //this.setState.teams = JSON.parse(res);
        let tempTeam = this.props.team;
        tempTeam.id = uuidv4();
        this.setState({ team:this.props.team});
        this.setState({teamList:JSON.parse(res)});
        this.setState({teams: JSON.parse(res)});
        this.setState(prevState => ({
          teams: [...prevState.teams, this.state.team]
        }));
      })
      .catch(err => console.log(err));      
      this.calcHeight();
  }

  
    
  render() {
    const TeamList = this.state.teamList.map(function(item){
      return (
        <Grid.Row className="teamIcon" id={item.id} name={item.id} key={item.id}>
          <Grid.Row>
            <p>Testing Team<sup className='deleteTeam'>X</sup></p>
          </Grid.Row>
          <Grid.Row>
          <Card.Group itemsPerRow={6}> 
          <Card id="t1" image={"./img/miniDex/"+/*item.Team[0].id*/Math.floor(Math.random() * 803)+".png"} />
          <Card id="t2" image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card id="t3" image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card id="t4" image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card id="t5" image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card id="t6" image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          </Card.Group>
          </Grid.Row>
        </Grid.Row>
      );
    });    

    return (
      <div style={this.state.style}>
        <div className="teamActive">
          <p>
            Current Team:
            <br/>
            {this.state.team.id}
          </p>
          <NewTeam/>
        </div>
        <div className="teamList">
            
                {TeamList}
            
          </div>
        <br />
        <button
          onClick={() => this.putTeams().then(this.getTeams())} 
          type="button"
        >
          save team?
        </button>
        {/*<button
          onClick={() => this.putDex()} 
          type="button"
        >
          save dex?
        </button>
        <button
          onClick={() => this.delDex()} 
          type="button"
        >
          trash dex?
        </button>*/}
      </div>
    );
  }
}


export default Nav;
