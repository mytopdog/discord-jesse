////////////////////
// tests>Login.js //
////////////////////

var Jesse = require("discord-jesse");
var client = Jesse();

client.on("online", () => {
    console.log("online");
});

client.on("create message", m => {
    if (m.content == "/ping") {
        m.channel.message("pong!");
    }
});

client.connect("Mzg0MDYxMTU1OTEzNDk4NjI1.DWRfPw.pMMoqy75-aveo4zrCIEyr6ZHBS0");
