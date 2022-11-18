const { GraphQLString } = require("graphql");
const { User, Post } = require("../models");
const { createJWTToken } = require("../util/auth");

const register = {
  type: GraphQLString,
  description: "Resgister a new user and returns a token",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    displayName: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { username, email, password, displayName } = args;

    const user = new User({ username, email, password, displayName });
    await user.save();

    const token = createJWTToken({
      _id: user._id,
      username: user.username,
      email: user.email,
    });

    return token;
  },
};

const login = {
  type: GraphQLString,
  description: "login a new user and returns a token",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_, args) {
    console.log(args);

    const user = await User.findOne({ email: args.email }).select('+password');
    if (!user || args.password !== user.password) throw new Error("Invalid Credentials");

    console.log(user);
    const token = createJWTToken({
        _id: user._id,
        username: user.username,
        email: user.email,
      });

    return token;
  },
};

const createPost = {
  type: GraphQLString,
  description: "Create a new post",
  args: {
    title: {type: GraphQLString},
    body: {type: GraphQLString}
  },
  async resolve(_,args){
    console.log(args)

    return "New post created"
  }

}

module.exports = {
  register,
  login,
  createPost
};
