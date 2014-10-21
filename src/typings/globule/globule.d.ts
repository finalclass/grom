declare module "globule" {

  export interface IFindConfig {
    src:string;
    filter?:any;
    nonull?:boolean;
    matchBase?:boolean;
    srcBase:string;
    cwd:string;
    prefixBase:boolean;
  }

  export function find(config:IFindConfig):string[];
  export function find(pattern:string, config:IFindConfig):string[];
  export function find(pattern:string, ...args:string[]):string[];



}