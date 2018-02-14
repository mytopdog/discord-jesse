var request = require("../Connection/lib/connection.js");

module.exports = function () {
	var _this = this;

	return {
		fromRaw: function (raw, op) {
			raw.type = ["text", "dm", "voice", "group_dm", "category"][raw.type];
			if (raw.type == "category") {
				return _this.cat_methods().fromRaw(raw);
			}

			if (op && op.id) {
				raw.guild_id = op.id;
				raw.guild = _this.guilds[op.id];
			}

			raw.message = function (message) {
				request.req("POST", `/channels/${raw.id}/messages`, {
					content: message
				}, _this.token);
			}
			raw.lastMessage = function (cb) {
				request.req("GET",
						`/channels/${raw.id}/message/${raw.last_message_id}`, {}, _this.token)
					.then(m => {
						cb(_this.message_methods().fromRaw(m));
					})
					.catch(console.log);
			}

			return raw;
		}
	}
}
