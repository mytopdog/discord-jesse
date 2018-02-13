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
        messages_methods: require("./Methods/messages.js"),
        channel_methods: require("./Methods/channels.js")
    });
}
