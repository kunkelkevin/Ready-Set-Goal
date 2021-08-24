const mongoose = require("mongoose");
const Player = require("./Player");
const Field = require("./Field");

const { Schema } = mongoose;

const gameSchema = new Schema({
  time: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: Player,
    },
  ],
  field: {
    type: Schema.Types.ObjectId,
    ref: Field,
  },
});

gameSchema.virtual("playerCount").get(function () {
  return this.players.length;
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
