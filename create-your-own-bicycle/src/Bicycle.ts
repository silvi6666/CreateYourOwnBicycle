import { BicyclePart } from './BicyclePart';

export class Bicycle {
  bicycleType: BicycleType;
  parts: BicyclePart[];

}

export enum BicycleType {
  Mountian, City, BMX
}
