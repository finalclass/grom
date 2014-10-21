///<reference path="typings/tsd.d.ts"/>
var globule = require('globule');
var File = require('./File');
var Files = (function () {
    function Files(dir, mod) {
        this.dir = dir;
        this.mod = mod;
        this.tsFiles = globule.find(dir + '/**/*.ts').map(function (fpath) {
            return new File(fpath, mod);
        });
    }
    Files.prototype.forEach = function (func) {
        this.tsFiles.forEach(func);
    };
    return Files;
})();
module.exports = Files;
//# sourceMappingURL=Files.js.map