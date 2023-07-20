import { Component } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  phoneNumber!: string;
  manufacturer!: string;
  shoeName!: string;
  shoeSize!: number;
  quantity!: number;

  shoes: ShoeRequest[] = [];

  submitForm(): void {
    console.log(this.phoneNumber);
    console.log(this.shoes);

    //this.resetForm();
  }

  resetForm(): void {
    this.manufacturer = '';
    this.shoeName = '';
    this.shoeSize = 0;
    this.phoneNumber = '';
    this.quantity = 0;
  }

  addToRequest(): void {
    this.shoes.push({
      manufacturer: this.manufacturer,
      shoeName: this.shoeName,
      shoeSize: this.shoeSize,
      shoeQuantity: this.quantity,
    });

    console.log(this.shoes);
  }
}
