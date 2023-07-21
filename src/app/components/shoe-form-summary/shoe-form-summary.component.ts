import { Component, Input } from '@angular/core';
import { ShoeRequest } from 'src/app/ShoeRequest';

@Component({
  selector: 'app-shoe-form-summary',
  templateUrl: './shoe-form-summary.component.html',
  styleUrls: ['./shoe-form-summary.component.css'],
})
export class ShoeFormSummaryComponent {
  @Input() shoes!: ShoeRequest[];
}
