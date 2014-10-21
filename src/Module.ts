///<reference path="typings/tsd.d.ts"/>

import fs = require('fs');
import path = require('path');

interface IModuleConfig {
  dependencies:{[id:string]:string};
}

class Module {

  private static GROM_FILE_NAME:string = 'grom.json';

  private config:IModuleConfig;

  constructor(public name:string, private dir:string) {
    this.initConfig();
  }

  public get dependencies():string[] {
    return Object.keys(this.config.dependencies);
  }

  private static getRawConfigFile():IModuleConfig {
    return {
      dependencies: {}
    };
  }

  private initConfig():void {
    var gromFilePath:string = path.join(this.dir, Module.GROM_FILE_NAME);
    if (fs.existsSync(gromFilePath)) {
      this.config = JSON.parse(fs.readFileSync(gromFilePath).toString());
    } else {
      this.config = Module.getRawConfigFile();
    }
  }

}

export = Module;