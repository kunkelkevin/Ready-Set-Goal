const db = require('./connection');
const { User, Field, Game, Player } = require('../models');

db.once('open', async () => {
  await Player.deleteMany();

  const players = await Player.insertMany([
    { 
        playerName: 'John',
        email: 'john@fake.com',
        password: '12345678',
        createdAt: '2:30',
        experience: 'Beginner',
    },
    {
        playerName: 'David',
        email: 'david@fake.com',
        password: '12345678',
        createdAt: '2:00',
        experience: 'Competitive',
    },
    {
        playerName: 'Wendy',
        email: 'wendy@fake.com',
        password: '12345678',
        createdAt: '1:30',
        experience: 'Have played some',
    },
    {
        playerName: 'Charles',
        email: 'charles@fake.com',
        password: '12345678',
        createdAt: '12:45',
        experience: 'Competitive',
    },
    {
        playerName: 'Ron',
        email: 'ron@fake.com',
        password: '12345678',
        createdAt: '4:12',
        experience: 'Competitive',
    },
    {
        playerName: 'Sarah',
        email: 'sarah@fake.com',
        password: '12345678',
        createdAt: '9:20',
        experience: 'Competitive',
    },
    {
        playerName: 'Jamal',
        email: 'jamal@fake.com',
        password: '12345678',
        createdAt: '4:30',
        experience: 'Beginner',
    },
    {
        playerName: 'Alex',
        email: 'alex@fake.com',
        password: '12345678',
        createdAt: '2:15',
        experience: 'Have played some',
    },
    {
        playerName: 'Destin',
        email: 'destin@fake.com',
        password: '12345678',
        createdAt: '1:55',
        experience: 'Have played some',
    },
    {
        playerName: 'Les',
        email: 'les@fake.com',
        password: '12345678',
        createdAt: '9:12',
        experience: 'Have played some',
    },
  ]);

  console.log('Players seeded');

  await Field.deleteMany();

  const fields = await Field.insertMany([
    {
        name: 'Field1',
        player: players.playerName,
        lat: 30.355804307588002,
        lng: -97.72102393547344,
    },
    {
        name: 'Field2',
        player: players.playerName,
        lat: 30.219952299288302,
        lng: -97.747232106969,
    },
    {
        name: 'Field3',
        player: players.playerName,
        lat: 30.415550526506685,
        lng: -97.7296747178703,
    },
    {
        name: 'Field4',
        player: players.playerName,
        lat: 30.457226592965885,
        lng: -97.68394505311201,
    },
    {
        name: 'Field5',
        player: players.playerName,
        lat: 30.428094416290318,
        lng: -97.59722819540666,
    },
    {
        name: 'Field6',
        player: players.playerName,
        lat: 30.437328183477327,
        lng: -97.59310832270593,
    },
    {
        name: 'Field7',
        player: players.playerName,
        lat: 30.43140785752024,
        lng: -97.59585490457705,
    },
    {
        name: 'Field8',
        player: players.playerName,
        lat: 30.275296958247438,
        lng: -97.73750344081337,
    },
    {
        name: 'Field9',
        player: players.playerName,
        lat: 30.28670050789891,
        lng: -97.75851385727952,
    },
    {
        name: 'Field10',
        player: players.playerName,
        lat: 30.29777079246223,
        lng: -97.70317116430357,
    },
  ]);  

  console.log('Field seeded');  

  await Game.deleteMany();

  const games = await Game.insertMany([
    {
        time: 2,
        player: players.playerName,
        field: fields.name,
        description: 'Low level players only!',
    },
    {
        time: 5,
        player: players.playerName,
        field: fields.name,
        description: 'Mid level players only!', 
    },
    {
        time: 7,
        player: players.playerName,
        field: fields.name,
        description: 'High level players only!',
    },
  ]);

  console.log('Games seeded');

  process.exit();
});