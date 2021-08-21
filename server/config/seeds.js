const db = require('./connection');
const { User, Field, Game, Player } = require('../models');

db.once('open', async () => {
  await Player.deleteMany();

  const Player = await Player.insertMany([
    { 
      playerName: '',
      email: '',
      password: '',
      createdAt: '',
      experience: '',
      games: []
    },
  ]);

  console.log('Player seeded');

  await Game.deleteMany();

  const Game = await Game.insertMany([
    {
      time: '',
      player: [],
      field: [],
    },
  ]);

  await Field.deleteMany();

  const Field = await Field.insertMany([
    {
      playerName: '',
      lat: '',
      lng: '',
    },
    

  console.log('Field seeded');

  await User.deleteMany();

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  console.log('Users seeded');

  process.exit();
});