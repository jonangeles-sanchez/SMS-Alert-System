import { ShoeRequest } from './ShoeRequest';

export interface ShoeRequestEntry {
  PhoneNumber: string;
  Shoes: ShoeRequest[];
  Reminded: boolean;
}
