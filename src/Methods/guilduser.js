var request = require("../Connection/lib/connection.js");

module.exports = function () {
	var _this = this;

	return {
		fromRaw: function (raw, guild) {
			raw.ban = function (opt) {
				request.req("PUT", `/guilds/${guild.id}/bans/${raw.id}`, {
					days: opt.days || 0,
					reason: opt.reason || ""
				}, _this.token);
			}
			raw.kick = function (opt) {
				request.req("DELETE", `/guilds/${guild.id}/members/${raw.id}`, {
					days: opt.days || 0,
					reason: opt.reason || ""
				}, _this.token);
			}
			raw.message = function (message) {
				new Promise((res, rej) => {
					request.req("POST", `/users/@me/channels`, {
						recipient_id: raw.id
					}, _this.token).then(c => {
						request.req("POST", `/channels/${c.id}/messages`, {
							content: message
						}, _this.token).then(m => {
							res(_this.message_methods().fromRaw(m));
						}).catch(rej);
					}).catch(rej);
				});
			}

			return raw;
		}
	}
}
