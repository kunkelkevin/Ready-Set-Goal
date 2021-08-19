const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  game: {
    type: String,
    required: true,
    enum: ["Grass", "Turf"],
    default: "Grass",
  },
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Players",
    },
  ],
});

gameSchema.virtual("playerCount").get(function () {
  return this.players.reduce(
    (total, player) => total + player.length + 1,
    0
  );
});

gameSchema.virtual("playerName").get(function () {
  return this.players.reduce(
    (total, player) => total + player.playerName + 1,
    0
  );
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
