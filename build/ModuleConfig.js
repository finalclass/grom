///<reference path="typings/tsd.d.ts"/>
var fs = require('fs');
var ModuleConfig = (function () {
    function ModuleConfig(configFilePath) {
        this.configFilePath = configFilePath;
        if (fs.existsSync(configFilePath)) {
            this.data = JSON.parse(fs.readFileSync(configFilePath).toString());
        }
        else {
            this.data = ModuleConfig.getRawConfigFile();
        }
    }
    ModuleConfig.getRawConfigFile = function () {
        return {
            dependencies: {}
        };
    };
    Object.defineProperty(ModuleConfig.prototype, "dependencies", {
        get: function () {
            return this.data.dependencies;
        },
        enumerable: true,
        configurable: true
    });
    return ModuleConfig;
})();
module.exports = ModuleConfig;
//# sourceMappingURL=ModuleConfig.js.map