const { AuthenticationError } = require("apollo-server-express");
const { Player, Field, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.player) {
        const playerData = await Player.findOne({
          _id: context.player._id,
        }).select("-__v -password");
        return playerData;
      }

      throw new AuthenticationError("Not logged in");
    },
    games: async () => {
      return await Game.find();
    },
    fields: async () => {
      return await Field.find();
    },
    field: async (parent, { _id }) => {
      return await Field.findById(_id);
    },
    player: async (parent, args, context) => {
      if (context.player) {
        const player = await Player.findById(context.player._id);

        //user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return player;
      }

      throw new AuthenticationError("Not logged in");
    },
    // singleGame: async (parent, { _id }, context) => {
    //   if (context.player) {
    //     const game = await Games.findById(game._id).populate({
    //       path: "games",
    //       populate: "players",
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
  },
  Mutation: {
    addPlayer: async (parent, args) => {
      const player = await Player.create(args);
      const token = signToken(player);

      return { token, player };
    },
    addField: async (parent, args) => {
      const field = await Field.create(args);
      return field;
    },
    // addGame: async (parent, args, context) => {
    //   console.log(context);
    //   if (context.player) {
    //     const game = await Game.create(args);

    //     await Player.findByIdAndUpdate(context.player._id, {
    //       $push: { games: game },
    //     });

    //     return game;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    removeGame: async (parent, { _id }, context) => {
      if (context.player) {
        const game = await Game.destroy(_id);
        return game;
      }
    },
    updatePlayer: async (parent, args, context) => {
      if (context.player) {
        return await Player.findByIdAndUpdate(context.player._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    updateGame: async (parent, { _id, time }) => {
      return await Game.findByIdAndUpdate(_id, { time: time }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const player = await Player.findOne({ email });

      if (!player) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await player.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(player);

      return { token, player };
    },
  },
};

module.exports = resolvers;
