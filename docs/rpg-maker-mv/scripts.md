# Scripts
This section contain useful snippet that will improve your game

## Disable Gold Box
```js
(function() {
    Window_Gold.prototype.windowHeight = function() { return 0; };
    Window_Gold.prototype.windowWidth = function() { return 0; };
    Window_Gold.prototype.refresh = function() {};
})();
```

## Disable Click Move
```js
(function() {
    Scene_Map.prototype.isMapTouchOk = function() {
        return false;
    };
})();
```

## No Item Category
- Basiclly, List all item in the backpack, No matter what category they are in.
```js
(function() {
    Scene_Item.prototype.createCategoryWindow = function() {};
    Scene_Item.prototype.createItemWindow = function() {
        var wy = this._helpWindow.height;
        var wh = Graphics.boxHeight - wy;
        this._itemWindow = new Window_ItemList(0, wy, Graphics.boxWidth, wh);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
        this._itemWindow.setHandler('cancel', this.popScene.bind(this));
        this._itemWindow.activate();
        this._itemWindow.selectLast();
        this._helpWindow.setItem(this._itemWindow.item());
        this.addWindow(this._itemWindow);
    };

    Window_ItemList.prototype.includes = function() { return true; };
    Window_ItemList.prototype.initialize = function(x, y, width, height) {
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this._category = 'none';
        this._data = [];
        this.refresh();
        this.resetScroll();
    };
})();