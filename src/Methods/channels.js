var request = require("../Connection/lib/connection.js");

module.exports = function () {
    var _this = this;

    return {
        fromRaw: function (raw) {
            return new Promise((res, rej) => {
                raw.message = function (message) {
                    request.req("POST", `/channels/${raw.id}/messages`, {
                        content: message
                    }, _this.token);
                }
                res(raw);
            });
        }
    }
}
