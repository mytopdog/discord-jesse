var web = require("./lib/connection.js");
var WebSocket = require("ws");
var event_list = require("./event_list.js");

module.exports = function (TOKEN) {
    var _this = this;

    _this.token || (_this.token = TOKEN);

    var wss = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");

    wss.on("open", () => {
        console.log("r");
    });
    wss.on("message", m => {
        var message = JSON.parse(m);

        if (message.op == 10) {
            _this.heartbeat_int = message.d.heartbeat_interval;

            console.log(_this.heartbeat_int);

            setInterval(function beginHeartbeat() {
                wss.send(JSON.stringify({
                    op: 1,
                    d: null
                }));
            }, _this.heartbeat_int);

            wss.send(JSON.stringify({
                op: 2,
                d: {
                    token: _this.token,
                    properties: {
                        "$os": "windows",
                        "$browser": "Jesse",
                        "$device": "Jesse"
                    },
                    compress: false,
                    large_threshold: 250,
                    shard: [0, 1],
                    presence: {}
                }
            }));
        }
        if (message.op == 1) {
            wss.send(JSON.stringify({
                op: 1,
                d: null
            }));
        }
        if (message.op == 0) {
            if (message.t == "READY") {
                _this._events[event_list[message.t]]();
            }
            if (message.t == "GUILD_CREATE") {
                _this.guilds[message.d.id] = _this.guilds[message.d];
            }
            if (message.t == "MESSAGE_CREATE") {
                _this.messages_methods().fromRaw(message.d)
                    .then(_this._events[event_list[message.t]])
                    .catch(console.log);
            }
        }
        console.log(message.t);
    });
}
