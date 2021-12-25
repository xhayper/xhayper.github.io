# Updating
This section will teach you how to upgrade RPG Maker MV's component.

## NW.js

NW.js allow you to use [NodeJS](https://nodejs.org/en/) module inside [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), It's used by RPG Maker MV to... well... run the game...

RPG Maker MV came with [`NW.js 0.29.4`](https://nwjs.io/blog/v0.29.4/) and [`Node 9.11.1`](https://nodejs.org/en/blog/release/v9.11.1/)

By upgrading [NW.js](https://nwjs.io/), you also upgrade [NodeJS](https://nodejs.org/en/)

::: warning
Make sure to backup! If you messed up, you have to reinstall RPG Maker MV.
:::

### Resources

- [NW.js v0.29.4](https://nwjs.io/blog/v0.29.4/)
- [NW.js](https://nwjs.io/)

### Versions (when the guide was written)
- NW.js: [0.59.1](https://nwjs.io/blog/v0.29.4/)

### Instructions

#### Windows

##### Test

1. Head to [NW.js website](https://nwjs.io/) and download the SDK version.
2. Navigate to RPG Maker MV's folder.
3. Drag everything inside the downloaded zip into the `nwjs-win-test` folder.
4. Rename from `nw.exe` to `Game.exe`.

##### Deploy
1. Head to [NW.js website](https://nwjs.io/) and download the NORMAL version.
2. Navigate to RPG Maker MV's folder.
3. Drag everything inside the downloaded zip into the `nwjs-win` folder.
4. Rename from `nw.exe` to `Game.exe`.

#### Linux

- Please see [this guide](https://forums.rpgmakerweb.com/index.php?threads/how-to-update-nw-js-to-dramatically-improve-game-performance.131620), I don't know how to do it, I am really sorry.

#### Mac

- Please see [this guide](https://forums.rpgmakerweb.com/index.php?threads/how-to-update-nw-js-to-dramatically-improve-game-performance.131620), I don't know how to do it, I am really sorry.

## Pixi
[Pixi](https://pixijs.io/) is the rendering engine used by RPG Maker MV.

RPG Maker MV came with [Pixi 4.5.4](https://github.com/pixijs/pixijs/releases/tag/v4.5.4)

::: tip
Here's the [pre-made](/files/rpg-maker-mv/pixi-6.2.1.zip) one (Only script, Pixi 6.2.1), if you don't want to go through the trouble.
:::

::: warning
Make sure to backup! Upgrading Pixi is a very VERY hard process.

It involve modifying core script and modifying library files.

It can also break complatibility with some plugins, but that rarely happened (from [FeniXEngine MV's guide](https://fenixenginemv.gitlab.io/guides/pixi5-upgrade.html)).
:::

### Resources
- [FeniXEngine MV's PIXI 4.5.4 to PIXI 5.3.0 upgrade guide](https://fenixenginemv.gitlab.io/guides/pixi5-upgrade.html)
- [Pixi Tile Map](https://github.com/pixijs/tilemap)
- [Pixi 4.5.4](https://github.com/pixijs/pixijs/releases/tag/v4.5.4)
- [Pixi](https://pixijs.io/)

### Versions (when the guide was written)
- Pixi Tile Map: [3.2.1](https://github.com/pixijs/tilemap/releases/tag/v3.2.1)
- rpgmaker.js: [3.2.1](https://github.com/pixijs/tilemap/tree/e7d26dde5b47a9ea941c50e62ad151acfc7ca57b/demo/rpgmaker.js)
- Pixi: [6.2.1](https://github.com/pixijs/pixijs/releases/tag/v6.2.1)

### Instructions
1. Follow [FeniXEngine MV's PIXI 4.5.4 to PIXI 5.3.0 upgrade guide](https://fenixenginemv.gitlab.io/guides/pixi5-upgrade.html).
2. Download Pixi from [Github](https://github.com/pixijs/pixijs/releases/tag/v6.2.1) and replace the old one (located inside `root/js/lib`).
2. Download Pixi Tilemap from [Github](https://github.com/pixijs/tilemap/releases/tag/v3.2.1) (Download source, and it's located in `dist` folder) and replace the old one (located inside `root/js/lib/`).
3. The latest version of Pixi Tilemap doesn't include the function that RPG Maker MV use so we have to download the [rpgmaker.js](https://github.com/pixijs/tilemap/tree/e7d26dde5b47a9ea941c50e62ad151acfc7ca57b/demo/rpgmaker.js) from the demo folder and put it in `root/js/lib/`.
4. Open up `index.html` in your project root and
```html:no-line-numbers
<!-- Replace from -->
<script type="text/javascript" src="js/libs/pixi-tilemap.js"></script>
<!-- To -->
<script type="text/javascript" src="js/libs/pixi-tilemap.js"></script>
<script type="text/javascript" src="js/libs/rpgmaker.js"></script>
```

## Credits
- [FeniXEngine MV's PIXI 4.5.4 to PIXI 5.3.0 upgrade guide](https://fenixenginemv.gitlab.io/guides/pixi5-upgrade.html)
- [KillerGin's NW.js upgrade guide](https://forums.rpgmakerweb.com/index.php?threads/how-to-update-nw-js-to-dramatically-improve-game-performance.131620/)