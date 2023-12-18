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

interface IStat {
  base_stat: number;
  stat: IStringObj;
}

export interface IPokemon {
  height: number;
  weight: number;
  id: number;
  moves: IMove[];
  name: string;
  stats: IStat[];
  sprites: {
    other: IOther;
  };
  types: IType[];
}
