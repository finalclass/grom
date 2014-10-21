///<reference path="typings/tsd.d.ts"/>

import path = require('path');
import ModuleFiles = require('./ModuleFiles');
import ModuleConfig = require('./ModuleConfig');

class Module {

  private static CONFIG_FILE_NAME:string = 'grom.json';

  private config:ModuleConfig;
  private _files:ModuleFiles;

  constructor(public name:string, private _dir:string) {
    this._files = new ModuleFiles(this.dir, this);
    this.config = new ModuleConfig(path.join(this.dir, Module.CONFIG_FILE_NAME));
  }

  public get dir():string {
    return this._dir;
  }

  public get dependencies():string[] {
    return Object.keys(this.config.dependencies);
  }

  public get files():ModuleFiles {
    return this._files;
  }

}

export = Module;