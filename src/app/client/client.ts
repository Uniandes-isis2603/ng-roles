export class Client {
  private _id: number;
  private _name: string;
  private _address: string;

  constructor(id: number, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
  }

  get id():number {return this._id}
  get name():string {return this._name}
  get address():string {return this._address}

  set id(id:number){
    this._id = id;
  }

  set name(name:string){
    this._name = name;
  }

  set address(address:string){
    this._address = address;
  }
}
