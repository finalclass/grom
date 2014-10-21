///<reference path="typings/tsd.d.ts"/>

import fs = require('fs');
import path = require('path');
import Module = require('./Module');
import DependencyResolver = require('dependency-resolver');

class Compiler {

  private modules:Module[] = [];
  private compilationOrder:string[] = [];

  constructor(private dir:string, private target:string) {

  }

  public solveDependencies():void {
    var resolver:DependencyResolver = new DependencyResolver();

    this.modules.forEach((mod:Module):void => {
      resolver.add(mod.name);
      mod.dependencies.forEach((dep:string):void => {
        resolver.setDependency(mod.name, dep);
      });
    });

    this.compilationOrder = resolver.resolve(this.target);
  }

}

export = Compiler;