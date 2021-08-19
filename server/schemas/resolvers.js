const { AuthenticationError } = require("apollo-server-express");
const { Player, Field, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {  
    Query: {
    games: async () => {
      return await Game.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    singleGame: async (parent, { _id }, context) => {
      if (context.player) {
        const game = await Games.findById(game._id).populate({
          path: 'games',
          populate: 'players'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    },
  Mutation: {
    addPlayer: async (parent, args) => {
      const player = await Player.create(args);
      const token = signToken(player);

      return { token, user };
    },
    addGame: async (parent, { products }, context) => {
      console.log(context);
      if (context.player) {
        const game = new Game({ products });

        // await Player.findByIdAndUpdate(context.player._id, { $push: { game: game } });

        return game;
      }

      throw new AuthenticationError('Not logged in');
    },
    updatePlayer: async (parent, args, context) => {
      if (context.player) {
        return await Player.findByIdAndUpdate(context.player._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateGame: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Game.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const player = await Player.findOne({ email });

      if (!player) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
}
    };

  module.exports = resolvers;
