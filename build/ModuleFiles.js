///<reference path="typings/tsd.d.ts"/>
var globule = require('globule');
var ModuleFile = require('./ModuleFile');
var ModuleFiles = (function () {
    function ModuleFiles(dir, mod) {
        this.dir = dir;
        this.mod = mod;
        this.tsFiles = globule.find(dir + '/**/*.ts').map(function (fpath) {
            return new ModuleFile(fpath, mod);
        });
    }
    ModuleFiles.prototype.forEach = function (func) {
        this.tsFiles.forEach(func);
    };
    return ModuleFiles;
})();
module.exports = ModuleFiles;
//# sourceMappingURL=ModuleFiles.js.map