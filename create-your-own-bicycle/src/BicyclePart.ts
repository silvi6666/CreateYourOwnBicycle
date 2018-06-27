export class BicyclePart {
  name: string;
  description: string;
  vendor: string;
  imageUrl: string[];
  cartType: PartType;
  color?: Color;
}

export enum PartType {

}

export enum Color {
  Red, Blue, Yellow, Black, Brown, Purple, Pink, Green, Orange
}
