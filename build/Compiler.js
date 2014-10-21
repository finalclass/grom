///<reference path="typings/tsd.d.ts"/>
var fs = require('fs');
var path = require('path');
var Module = require('./Module');
var DependencyResolver = require('dependency-resolver');
var Compiler = (function () {
    function Compiler(dir, target) {
        this.dir = dir;
        this.target = target;
        this.modules = [];
        this.compilationOrder = [];
    }
    Compiler.prototype.initModules = function () {
        var _this = this;
        this.modules = fs.readdirSync(this.dir).map(function (moduleName) {
            return new Module(moduleName, path.join(_this.dir, moduleName));
        });
    };
    Compiler.prototype.solveDependencies = function () {
        var resolver = new DependencyResolver();
        this.modules.forEach(function (mod) {
            resolver.add(mod.name);
            mod.dependencies.forEach(function (dep) {
                resolver.setDependency(mod.name, dep);
            });
        });
        this.compilationOrder = resolver.resolve(this.target);
    };
    return Compiler;
})();
module.exports = Compiler;
//# sourceMappingURL=Compiler.js.map