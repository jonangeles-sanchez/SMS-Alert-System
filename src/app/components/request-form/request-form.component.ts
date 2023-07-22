import { Component } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';
import { ShoeRequestServiceService } from 'src/app/services/shoe-request-service.service';
import { ShoeRequestEntry } from 'src/app/ShoeRequestEntry';

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

  constructor(private shoeRequestService: ShoeRequestServiceService) {}

  submitForm(): void {
    let request: ShoeRequestEntry = {
      phoneNumber: this.phoneNumber,
      requestedShoes: this.shoes,
      reminded: false,
    };

    try {
      this.shoeRequestService.addNewRequest(request).subscribe((data) => {
        console.log('Successfully sent data: ' + data);
      });
      this.setSubmitted();
    } catch (e) {
      console.log('Error sending data: ' + e);
    }
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
    if (e.target.value.length >= 10 && !isNaN(e.target.value)) {
      return true;
    }
    return false;
  }

  onPhoneNumberChange(event: any): void {
    let isValid = this.checkLength(event);
    if (isValid) {
      this.setLengthValid(event);
      return;
    }
    this.setLengthInvalid();
  }

  setLengthValid(e: any): void {
    this.phoneLengthValid = true;
    this.phoneNumber = e.target.value;
  }

  setLengthInvalid(): void {
    this.phoneLengthValid = false;
    this.phoneNumber = '';
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

  setSubmitted() {
    this.submitted = true;
  }
}
