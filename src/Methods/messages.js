var request = require("../Connection/lib/connection.js");

module.exports = function () {
	var _this = this;
	return {
		fromRaw: function (raw) {
			raw.channel = _this.channels[raw.channel_id];

			if (raw.channel.guild) {
				raw.guild = raw.channel.guild;
				raw.author = _this.gu_methods().fromRaw(raw.author, raw.guild);
			}

			raw.reply = function (content) {
				return new Promise((res, rej) => {
					request.req("POST", `/channels/${raw.channel.id}/messages`, {
						content: content
					}, _this.token).then(m => {
						res(_this.message_methods().fromRaw(m));
					}).catch(rej);
				});
			}

			return raw;
		}
	}
}
