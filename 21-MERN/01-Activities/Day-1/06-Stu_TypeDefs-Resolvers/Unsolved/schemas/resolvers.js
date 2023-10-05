const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      return await Class.find({}).populate("professor");
    },
    // TODO: Update resolver to include classes
    // professors: async () => {
    //   return await Professor.find({});
    // }

    professors: async () => {
      const professors = await Professor.find({});

      // Populate the classes field for each professor
      professors.forEach(async (professor) => {
        professor.classes = await Class.find({ professor: professor.id });
      });

      return professors;
    },
  },
};

module.exports = resolvers;
