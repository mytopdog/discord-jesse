module.exports = function () {
	return Object.assign({}, {
		connect: require("./Connection/connect.js"),
		token: "",
		_events: {},
		on: function (event, callback) {
			this._events[event] = callback;
		},
		guilds: {},
		channels: {},
		amOfGuilds: 0,
		message_methods: require("./Methods/messages.js"),
		channel_methods: require("./Methods/channels.js"),
		guild_methods: require("./Methods/guilds.js"),
		permission_methods: require("./Methods/permissions.js"),
		role_methods: require("./Methods/roles.js"),
		emoji_methods: require("./Methods/emojis.js"),
		cat_methods: require("./Methods/category.js")
	});
}
