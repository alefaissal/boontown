const jwt = require('jsonwebtoken');
const { ApolloError } = require('apollo-server');

const queryResolvers = app => ({
	async viewer (parent, args, context) {
		console.log(context.user);

		return context.user;
	},
	async user (parent, { id }, { pgResource }, info) {
		try {
			const user = await pgResource.getUserById(id);
			return user;
		} catch (e) {
			throw new ApolloError(e);
		}
	},
	async users (parent, args, { pgResource }, info) {
		try {
			const users = await pgResource.getUsers();
			return users;
		} catch (e) {
			throw new ApolloError(e);
		}
	},
	async tags (parent, args, { pgResource }, info) {
		try {
			const tags = await pgResource.getTags();
			return tags;
		} catch (e) {
			throw new ApolloError(e);
		}
	},
	async items (parent, { filter }, { pgResource }, info) {
		try {
			const items = await pgResource.getItems(filter);
			return items;
		} catch (e) {
			throw 'No items not related to this user';
		}
	}
});

module.exports = queryResolvers;
