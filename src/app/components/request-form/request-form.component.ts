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

  newShoe: boolean = false;

  phoneLengthValid: boolean = false;

  shoes: ShoeRequest[] = [];

  constructor() {}

  submitForm(): void {
    //this.resetForm();
  }

  resetForm(): void {
    this.manufacturer = '';
    this.shoeName = '';
    this.shoeSize = 0;
    this.phoneNumber = '';
    this.quantity = 0;
    this.resetNewShoe();
  }

  resetNewShoeForm(e: any) {
    e.target.value = '';
  }

  addToRequest(): void {
    this.shoes.push({
      manufacturer: this.manufacturer,
      shoeName: this.shoeName,
      shoeSize: this.shoeSize,
      shoeQuantity: this.quantity,
    });

    console.log(this.shoes);

    this.resetForm();
  }

  checkLength(e: any): boolean {
    if (e.target.value.length >= 10) {
      return true;
    }
    return false;
  }

  onPhoneNumberChange(event: any): void {
    let isValid = this.checkLength(event);
    if (isValid) {
      this.setLengthValid();
      return;
    }
    this.setLengthInvalid();
  }

  setLengthValid(): void {
    this.phoneLengthValid = true;
  }

  setLengthInvalid(): void {
    this.phoneLengthValid = false;
  }

  onNewShoe() {
    this.setNewShoe();
  }

  setNewShoe() {
    this.newShoe = true;
  }

  resetNewShoe() {
    this.newShoe = false;
  }
}
