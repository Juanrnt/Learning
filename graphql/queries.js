const { GraphQLString, GraphQLList, GraphQLID } = require("graphql");
const { UserType } = require("./types");
const { User } = require("../models");

const users = {
  type: new GraphQLList(UserType),
  description: "List of users",
  async resolve() {
    return User.find();
  },
};

const user = {
  type: UserType,
  description: "get a user by id",
  args: {
    id: { type: GraphQLID },
  },
  resolve(_, args) {
    console.log(args)
    return User.findById(args.id);
  },
};

module.exports = { users, user };
