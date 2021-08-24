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
        experience: 'low',
        games: []
    },
    {
        playerName: 'David',
        email: 'dave@fake.com',
        password: '12345678',
        createdAt: '2:00',
        experience: 'high',
        games: []
    },
    {
        playerName: 'Wendy',
        email: 'wendy@fake.com',
        password: '12345678',
        createdAt: '1:30',
        experience: 'mid',
        games: []
    },
    {
        playerName: 'Charles',
        email: 'charles@fake.com',
        password: '12345678',
        createdAt: '12:45',
        experience: 'high',
        games: []
    },
    {
        playerName: 'Ron',
        email: 'ron@fake.com',
        password: '12345678',
        createdAt: '4:12',
        experience: 'high',
        game: games,
    },
    {
        playerName: 'Sarah',
        email: 'sarah@fake.com',
        password: '12345678',
        createdAt: '9:20',
        experience: 'high',
        game: games
    },
    {
        playerName: 'Jamal',
        email: 'jamal@fake.com',
        password: '12345678',
        createdAt: '4:30',
        experience: 'low',
        game: games
    },
    {
        playerName: 'Alex',
        email: 'alex@fake.com',
        password: '12345678',
        createdAt: '2:15',
        experience: 'mid',
        game: games,
    },
    {
        playerName: 'Destin',
        email: 'destin@fake.com',
        password: '12345678',
        createdAt: '1:55',
        experience: 'mid',
        game: games,
    },
    {
        playerName: 'Les',
        email: 'les@fake.com',
        password: '12345678',
        createdAt: '9:12',
        experience: 'mid',
        game: games,
    },
  ]);
 
  console.log('Players seeded');
 
  await Game.deleteMany();
 
  const games = await Game.insertMany([
    {
        time: '2:30',
        player: players.playerName,
        field: fields.fieldName,
        description: 'Low level players only!',
    },
    {
        time: '5:00',
        player: players.playerName,
        field: fields.fieldName,
        description: 'Mid level players only!',
    },
    {
        time: '7:30',
        player: players.playerName,
        field: fields.fieldName,
        description: 'High level players only!',
    },
  ]);
 
  console.log('Games seeded');
 
  await Field.deleteMany();
 
  const fields = await Field.insertMany([
    {
        fieldName: 'Field1',
        player: players.playerName,
        lat: '30.355804307588002',
        lng: '-97.72102393547344',
    },
    {
        fieldName: 'Field2',
        player: players.playerName,
        lat: '30.219952299288302',
        lng: '-97.747232106969',
    },
    {
        fieldName: 'Field3',
        player: players.playerName,
        lat: '30.415550526506685,',
        lng: '-97.7296747178703',
    },
    {
        fieldName: 'Field4',
        player: players.playerName,
        lat: '30.457226592965885',
        lng: '-97.68394505311201',
    },
    {
        fieldName: 'Field5',
        player: players.playerName,
        lat: '30.428094416290318',
        lng: '-97.59722819540666',
    },
    {
        fieldName: 'Field6',
        player: players.playerName,
        lat: '30.437328183477327',
        lng: '-97.59310832270593',
    },
    {
        fieldName: 'Field7',
        player: players.playerName,
        lat: '30.43140785752024',
        lng: '-97.59585490457705',
    },
    {
        fieldName: 'Field8',
        player: players.playerName,
        lat: '30.275296958247438',
        lng: '-97.73750344081337',
    },
    {
        fieldName: 'Field9',
        player: players.playerName,
        lat: '30.28670050789891',
        lng: '-97.75851385727952',
    },
    {
        fieldName: 'Field10',
        player: players.playerName,
        lat: '30.29777079246223',
        lng: '-97.70317116430357',
    },
  ]); 
 
 
 
  console.log('Field seeded');
 
  process.exit();
});
