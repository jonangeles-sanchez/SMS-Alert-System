import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ShoeRequest } from 'src/app/ShoeRequest';

@Component({
  selector: 'app-shoe-form-summary',
  templateUrl: './shoe-form-summary.component.html',
  styleUrls: ['./shoe-form-summary.component.css'],
})
export class ShoeFormSummaryComponent {
  @Output() submitForm: EventEmitter<void> = new EventEmitter<void>();
  @Input() shoes!: ShoeRequest[];

  onSubmitRequest(): void {
    this.submitForm.emit();
  }
}
