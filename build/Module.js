///<reference path="typings/tsd.d.ts"/>
var fs = require('fs');
var path = require('path');
var Module = (function () {
    function Module(name, dir) {
        this.name = name;
        this.dir = dir;
        this.initConfig();
    }
    Object.defineProperty(Module.prototype, "dependencies", {
        get: function () {
            return Object.keys(this.config.dependencies);
        },
        enumerable: true,
        configurable: true
    });
    Module.getRawConfigFile = function () {
        return {
            dependencies: {}
        };
    };
    Module.prototype.initConfig = function () {
        var gromFilePath = path.join(this.dir, Module.GROM_FILE_NAME);
        if (fs.existsSync(gromFilePath)) {
            this.config = JSON.parse(fs.readFileSync(gromFilePath).toString());
        }
        else {
            this.config = Module.getRawConfigFile();
        }
    };
    Module.GROM_FILE_NAME = 'grom.json';
    return Module;
})();
module.exports = Module;
//# sourceMappingURL=Module.js.map