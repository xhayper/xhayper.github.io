
# Using Node Module
This section will teach you how to use NodeJS module.

::: warning
Some NodeJS module doesn't seems to work, for some reason, More info needed.
:::

# Instructions
1. Download [NodeJS](https://nodejs.org/en/) according to your NW.js version.
::: tip
RPG Maker MV came with [NodeJS 9.11.1](https://nodejs.org/en/blog/release/v9.11.1/).

To upgrade Node version, You have to upgrade NW.js, Guide could be found [here](/rpg-maker-mv/updating)
:::
2. Navigate to your project root folder (where it contains `package.json`).
3. Open terminal and run
```bash:no-line-numbers
npm install <PACKAGE NAME>
```
4. You can now use the package inside a plugin by writing
```js
var package = require('<PACKAGE NAME>');
```

# Example
```bash:no-line-numbers
npm install discord-rpc
```
`js/plugins/DiscordRPC.js`
```js
(function() {
    const RPC = require('discord-rpc');

    const clientId = '287406016902594560';
    const scopes = ['rpc', 'rpc.api', 'messages.read'];

    const client = new RPC.Client({ transport: 'websocket' });

    client.on('ready', () => {
        console.log('Logged in as', client.application.name);
        console.log('Authed for user', client.user.username);

    client.selectVoiceChannel('81384788862181376');
    });

    // Log in to RPC with client id
    client.login({ clientId, scopes });
})();
// See also: https://www.npmjs.com/package/discord-rpc
```