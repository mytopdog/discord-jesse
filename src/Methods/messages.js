var request = require("../Connection/lib/connection.js");

module.exports = function () {
    var _this = this;

    return {
        fromRaw: function (raw) {
            return new Promise((res, rej) => {
                raw.channel = {};

                request.req("GET", `/channels/${raw.channel_id}`, {}, _this.token).then(channelP => {
                    _this.channel_methods().fromRaw(channelP).then(channel => {
                        raw.channel = channel

                        res(raw);
                    }).catch(rej);
                }).catch(rej);
            });
        }
    }
}
