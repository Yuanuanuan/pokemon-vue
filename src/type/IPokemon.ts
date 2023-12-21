export type StringObj = Record<string, string>;
type Other = Record<string, StringObj>;
type Move = Record<string, StringObj>;

interface IType {
  slot: number;
  type: StringObj;
}

interface IStat {
  base_stat: number;
  stat: StringObj;
}

export type NavList = "about" | "moves";

export interface IPokemonInitialData {
  count: number;
  next: string;
  results: StringObj[];
}

export interface IPokemonWithId {
  height: number;
  weight: number;
  forms: StringObj[];
  id: number;
  moves: Move[];
  name: string;
  stats: IStat[];
  sprites: {
    other: Other;
  };
  types: IType[];
}
