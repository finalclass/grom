///<reference path="typings/tsd.d.ts"/>
var Modules = require('./Modules');
var modules = new Modules(process.cwd());
console.log(modules.files.map(function (f) { return [f.namespace, f.basename].join('.'); }));
//# sourceMappingURL=index.js.map