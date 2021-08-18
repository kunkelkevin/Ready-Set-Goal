const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Field = require("./Field");

const playerSchema = new Schema({});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
