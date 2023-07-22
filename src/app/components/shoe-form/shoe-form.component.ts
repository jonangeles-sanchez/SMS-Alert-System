import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';

@Component({
  selector: 'app-shoe-form',
  templateUrl: './shoe-form.component.html',
  styleUrls: ['./shoe-form.component.css'],
})
export class ShoeFormComponent {
  @Output() addToRequest: EventEmitter<ShoeRequest> =
    new EventEmitter<ShoeRequest>();
  manufacturer!: string;
  shoeName!: string;
  shoeSize!: number;
  quantity!: number;

  resetForm(): void {
    this.manufacturer = '';
    this.shoeName = '';
    this.shoeSize = 0;
    this.quantity = 0;
  }

  createShoeRequest(): ShoeRequest {
    return {
      manufacturer: this.manufacturer,
      name: this.shoeName,
      size: this.shoeSize,
      quantity: this.quantity,
    };
  }

  onAddToRequest(): void {
    const shoeRequest: ShoeRequest = this.createShoeRequest();
    this.addToRequest.emit(shoeRequest);
  }
}
