import { ShoeRequest } from './ShoeRequest';

export interface ShoeRequestEntry {
  phoneNumber: string;
  requestedShoes: ShoeRequest[];
  reminded: boolean;
}
