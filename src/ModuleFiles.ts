///<reference path="typings/tsd.d.ts"/>

import fs = require('fs');
import path = require('path');
import globule = require('globule');
import ModuleFile = require('./ModuleFile');
import Module = require('./Module');

class ModuleFiles {

  private tsFiles:ModuleFile[];

  constructor(private dir:string, private mod:Module) {
    this.tsFiles = globule.find(dir + '/**/*.ts').map((fpath:string):ModuleFile => {
      return new ModuleFile(fpath, mod);
    });
  }

  public forEach(func:(file:ModuleFile)=>any):void {
    this.tsFiles.forEach(func);
  }
}

export = ModuleFiles;