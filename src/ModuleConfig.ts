///<reference path="typings/tsd.d.ts"/>
import fs = require('fs');

interface IModuleConfig {
  dependencies:{[id:string]:string};
}

class ModuleConfig {

  private data:IModuleConfig;

  constructor(private configFilePath:string) {
    if (fs.existsSync(configFilePath)) {
      this.data = JSON.parse(fs.readFileSync(configFilePath).toString());
    } else {
      this.data = ModuleConfig.getRawConfigFile();
    }
  }

  private static getRawConfigFile():IModuleConfig {
    return {
      dependencies: {}
    };
  }

  public get dependencies() : {[id:string]:string} {
    return this.data.dependencies;
  }
}

export = ModuleConfig;