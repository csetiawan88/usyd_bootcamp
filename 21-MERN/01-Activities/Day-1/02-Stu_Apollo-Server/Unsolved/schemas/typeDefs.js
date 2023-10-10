const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  # Define which fields are accessible from the Class model
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
