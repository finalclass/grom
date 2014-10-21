///<reference path="typings/tsd.d.ts"/>

import Module = require('./Module');
import path = require('path');

class ModuleFile {

  private _basename:string;
  private _namespace:string;
  private _type:string;

  constructor(private _filePath:string, private _mod:Module) {
    var lastIndexOfDot:number = this.filePath.lastIndexOf('.');
    var lastIndexOfSlash:number = this.filePath.lastIndexOf('/');
    var modulesRootDir:string = this.filePath.substr(0, this.mod.dir.length - this.mod.name.length);

    this._basename = this.filePath.substr(lastIndexOfSlash + 1, lastIndexOfDot - lastIndexOfSlash - 1);
    this._type = this.filePath.substr(lastIndexOfDot + 1);
    this._namespace = this.filePath
      .substr(modulesRootDir.length, lastIndexOfSlash - modulesRootDir.length)
      .replace('/', '.')
      .replace('\\', '.');
  }

  public get filePath():string {
    return this._filePath;
  }

  public get mod():Module {
    return this._mod;
  }

  public get basename():string {
    return this._basename;
  }
  public get type():string {
    return this._type;
  }
  public get namespace():string {
    return this._namespace;
  }

}

export = ModuleFile;