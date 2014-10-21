///<reference path="typings/tsd.d.ts"/>
var Compiler = require('./Compiler');
var compiler = new Compiler(process.cwd(), process.argv[2]);
compiler.initModules();
compiler.solveDependencies();
//# sourceMappingURL=index.js.map