import { Component } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css'],
})
export class RequestFormComponent {
  phoneNumber!: string;
  newShoe: boolean = false;
  phoneLengthValid: boolean = false;
  shoes: ShoeRequest[] = [];
  submitted: boolean = false;

  constructor() {}

  submitForm(): void {
    //this.resetForm();
  }

  addToRequest(data: ShoeRequest): void {
    console.log(data);

    this.shoes.push(data);

    console.log(this.shoes);

    this.resetNewShoe();
  }

  resetNewShoeForm(e: any) {
    e.target.value = '';
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
