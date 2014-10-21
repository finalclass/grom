///<reference path="typings/tsd.d.ts"/>

import fs = require('fs');
import path = require('path');
import Compiler = require('./Compiler');
import Transcriptor = require('./Transcriptor');
import Modules = require('./Modules');

var modules:Modules = new Modules(process.cwd());
console.log(modules.files.map(f => [f.namespace, f.basename].join('.')));

//var transcriptor:Transcriptor = new Transcriptor(modules);
//var compiler:Compiler = new Compiler(process.cwd(), process.argv[2]);
