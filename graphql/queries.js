const { GraphQLString, GraphQLList, GraphQLID } = require("graphql");
const { UserType, PostType, CommentType } = require("./types");
const { User, Post, Comment } = require("../models");

const users = {
  type: new GraphQLList(UserType),
  description: "List of users",
  resolve() {
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
    console.log(args);
    return User.findById(args.id);
  },
};

const posts = {
  type: new GraphQLList(PostType),
  description: "retrieves a list of posts",
  resolve: () => Post.find(),
};

const post = {
  type: PostType,
  description: "retrieves a single post",
  args: { id: { type: GraphQLID } },
  resolve: (_, {id}) => Post.findById(id)
};

const comments = {
  type: new GraphQLList(CommentType),
  description: "Get all comments",
  resolve: () => Comment.find(),

}

const comment = {
  type: CommentType,
  description: "Get a comments",
  args: {
    id: {type: GraphQLID},
  },
  resolve: (_, {id}) => Comment.findById(id),

}

module.exports = { users, user, post, posts, comments, comment };
