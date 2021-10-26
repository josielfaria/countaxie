export class AxieModel {
  name: string;
  parts: Array<string>;
  cardList: Array<AxieCardModel>;
}

export class AxieCardModel {
  id?: number;
  name: string;
  attack: number;
  defense: number;
  cost: number;
  effect?: string;
}