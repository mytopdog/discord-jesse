# Discord-Jesse
##### Important: Discord-Jesse is a brand-new project and is not, what-so-ever finished, please think before using as there are much better alternatives at this time.


## Examples:

```js
var Jesse = require("discord-jesse");
var client = Jesse();

client.on("create message", function (message) {
  if (message.content == "/ping") {
    message.channel.message("pong!");
  }
});

client.connect("{token}");
```

## Docs:

### Session

* `.connect({string: token});`
	- `string: token`: The token it gives when you create a bot user for [your app](https://discordapp.com/developers/applications/me).

