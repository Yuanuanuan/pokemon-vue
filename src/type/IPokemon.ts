// Record

// Record

// Record

// Record

// Record

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
  forms: IStringObj[];
  id: number;
  moves: IMove[];
  name: string;
  stats: IStat[];
  sprites: {
    other: IOther;
  };
  types: IType[];
}

// export interface IPokemonInfo {
//   id: number;
//   name: string;
//   sprites: {
//     front_default: string;
//   };
//   pokemon: IStringObj;
//   types: IType[];
// }
