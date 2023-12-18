export interface IStringObj {
  [key: string]: string;
}

interface IMove {
  move: IStringObj;
}

interface IOther {
  [key: string]: IHome;
}

interface IHome {
  [key: string]: string;
}

interface IType {
  slot: number;
  type: IStringObj;
}

export interface IPokemon {
  height: number;
  id: number;
  moves: IMove[];
  name: string;
  sprites: {
    other: IOther;
  };
  types: IType[];
}
