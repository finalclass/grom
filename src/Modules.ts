import Module = require('./Module');
import fs = require('fs');
import path = require('path');
import ModuleFile = require('./ModuleFile');

class Modules {

  private list:Module[] = [];

  constructor(private _dir:string) {
    this.list = fs.readdirSync(this.dir).map((moduleName:string):Module => {
      return new Module(moduleName, path.join(this.dir, moduleName));
    });
  }

  public get dir():string {
    return this._dir;
  }

  public forEachFile(func:(file:ModuleFile)=>any):void {
    this.list.forEach((mod:Module):void => {
      mod.files.forEach((file:ModuleFile):void => func(file));
    });
  }

  public get files():ModuleFile[] {
    var files:ModuleFile[] = [];
    this.forEachFile(file => files.push(file));
    return files;
  }

}

export = Modules;