var Module = require('./Module');
var fs = require('fs');
var path = require('path');
var Modules = (function () {
    function Modules(_dir) {
        var _this = this;
        this._dir = _dir;
        this.list = [];
        this.list = fs.readdirSync(this.dir).map(function (moduleName) {
            return new Module(moduleName, path.join(_this.dir, moduleName));
        });
    }
    Object.defineProperty(Modules.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        enumerable: true,
        configurable: true
    });
    Modules.prototype.forEachFile = function (func) {
        this.list.forEach(function (mod) {
            mod.files.forEach(function (file) { return func(file); });
        });
    };
    Object.defineProperty(Modules.prototype, "files", {
        get: function () {
            var files = [];
            this.forEachFile(function (file) { return files.push(file); });
            return files;
        },
        enumerable: true,
        configurable: true
    });
    return Modules;
})();
module.exports = Modules;
//# sourceMappingURL=Modules.js.map