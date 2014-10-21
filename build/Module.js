///<reference path="typings/tsd.d.ts"/>
var path = require('path');
var ModuleFiles = require('./ModuleFiles');
var ModuleConfig = require('./ModuleConfig');
var Module = (function () {
    function Module(name, _dir) {
        this.name = name;
        this._dir = _dir;
        this._files = new ModuleFiles(this.dir, this);
        this.config = new ModuleConfig(path.join(this.dir, Module.CONFIG_FILE_NAME));
    }
    Object.defineProperty(Module.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "dependencies", {
        get: function () {
            return Object.keys(this.config.dependencies);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "files", {
        get: function () {
            return this._files;
        },
        enumerable: true,
        configurable: true
    });
    Module.CONFIG_FILE_NAME = 'grom.json';
    return Module;
})();
module.exports = Module;
//# sourceMappingURL=Module.js.map