///<reference path="typings/tsd.d.ts"/>

import fs = require('fs');
import path = require('path');
import Compiler = require('./Compiler');

var compiler:Compiler = new Compiler(process.cwd(), process.argv[2]);
compiler.initModules();
compiler.solveDependencies();
