const db = require("./connection");
const { User, Field, Game, Player } = require("../models");

db.once("open", async () => {
  await Game.deleteMany();
  await Field.deleteMany();

  await Field.insertMany([
    {
      name: "Zilker",
      lat: 30.267895,
      lng: -97.767819,
    },
    {
      name: "West Lake HS",
      lat: 30.27388938442503,
      lng: -97.81529330038735,
    },
    {
      name: "Hill Country Middle School",
      lat: 30.27208165567179,
      lng: -97.80379503514358,
    },
    {
      name: "Cedar Creek Elementary School",
      lat: 30.269287,
      lng: -97.807183,
    },
    {
      name: "Onion Creek Soccer Complex",
      lat: 30.177739440620964,
      lng: -97.74031370445222,
    },
    {
      name: "Field6",
      lat: 30.437328183477327,
      lng: -97.59310832270593,
    },
    {
      name: "Field7",
      lat: 30.43140785752024,
      lng: -97.59585490457705,
    },
    {
      name: "Field8",
      lat: 30.275296958247438,
      lng: -97.73750344081337,
    },
    {
      name: "Field9",
      lat: 30.28670050789891,
      lng: -97.75851385727952,
    },
    {
      name: "Field10",
      lat: 30.29777079246223,
      lng: -97.70317116430357,
    },
  ]);

  console.log("Field seeded");

  process.exit();
});
