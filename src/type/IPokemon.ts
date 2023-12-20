export type IStringObj = Record<string, string>;
type IOther = Record<string, IStringObj>;
type IMove = IOther;

interface IType {
  slot: number;
  type: IStringObj;
}

interface IStat {
  base_stat: number;
  stat: IStringObj;
}

export interface IPokemonInitialData {
  count: number;
  next: string;
  results: IStringObj[];
}

export interface IPokemonWithId {
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
