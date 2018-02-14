////////////////////
// tests>Login.js //
////////////////////

var Jesse = require("../src/Jesse");
var client = Jesse();

client.on("online", () => {
	console.log(Object.keys(client.guilds).length);
});

client.on("create message", m => {
	if (m.content == "/ping") {
		m.reply("pong!");
	}
});

client.connect("Mzg0MDYxMTU1OTEzNDk4NjI1.DWRfPw.pMMoqy75-aveo4zrCIEyr6ZHBS0");
