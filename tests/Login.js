////////////////////
// tests>Login.js //
////////////////////

var Jesse = require("../src/Jesse");
var client = Jesse();

client.on("online", () => {
	console.log("online");
});

client.on("create message", m => {
	if (m.content == ".") m.author.message("ok");
});

client.connect("Mzg0MDYxMTU1OTEzNDk4NjI1.DWX2EA.AOG2rVSZWfrWaOH7ZMMVGuRJ8sI");
