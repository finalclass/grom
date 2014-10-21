///<reference path="typings/tsd.d.ts"/>
var ModuleFile = (function () {
    function ModuleFile(_filePath, _mod) {
        this._filePath = _filePath;
        this._mod = _mod;
        var lastIndexOfDot = this.filePath.lastIndexOf('.');
        var lastIndexOfSlash = this.filePath.lastIndexOf('/');
        var modulesRootDir = this.filePath.substr(0, this.mod.dir.length - this.mod.name.length);
        this._basename = this.filePath.substr(lastIndexOfSlash + 1, lastIndexOfDot - lastIndexOfSlash - 1);
        this._type = this.filePath.substr(lastIndexOfDot + 1);
        this._namespace = this.filePath.substr(modulesRootDir.length, lastIndexOfSlash - modulesRootDir.length).replace('/', '.').replace('\\', '.');
    }
    Object.defineProperty(ModuleFile.prototype, "filePath", {
        get: function () {
            return this._filePath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleFile.prototype, "mod", {
        get: function () {
            return this._mod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleFile.prototype, "basename", {
        get: function () {
            return this._basename;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleFile.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModuleFile.prototype, "namespace", {
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    return ModuleFile;
})();
module.exports = ModuleFile;
//# sourceMappingURL=ModuleFile.js.map