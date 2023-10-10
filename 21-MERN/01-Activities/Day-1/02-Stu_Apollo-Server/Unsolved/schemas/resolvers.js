const { Class } = require("../models");

// TODO: Add a comment describing the functionality of this expression

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // Get and return all documents from the classes collection
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
