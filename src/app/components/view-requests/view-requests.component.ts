import { Component } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';
import { ShoeRequestEntry } from 'src/app/ShoeRequestEntry';
import { ShoeRequestServiceService } from '../../services/shoe-request-service.service';

interface Request {
  phoneNumber: string;
  shoes: ShoeRequest[];
  reminded: boolean;
}

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css'],
})
export class ViewRequestsComponent {
  requests!: ShoeRequestEntry[];

  constructor(private shoeRequestService: ShoeRequestServiceService) {
    /*
    this.requests = [
      {
        phoneNumber: '8282758982',
        requestedShoes: [
          {
            manufacturer: 'Nike',
            name: 'Air Max 90',
            size: 10,
            quantity: 1,
          },
          {
            manufacturer: 'Nike',
            name: 'Dunk Panda',
            size: 10,
            quantity: 1,
          },
        ],
        reminded: false,
      },
      {
        phoneNumber: '8282908765',
        requestedShoes: [
          {
            manufacturer: 'Jordan',
            name: 'Jordan 1 Travis Scott',
            size: 10,
            quantity: 1,
          },
          {
            manufacturer: 'Jordan',
            name: 'Jordan 1 Bred',
            size: 10,
            quantity: 1,
          },
        ],
        reminded: false,
      },
      {
        phoneNumber: '8287671042',
        requestedShoes: [
          {
            manufacturer: 'Adidas',
            name: 'Yeezy 350 V2',
            size: 10,
            quantity: 1,
          },
          {
            manufacturer: 'Adidas',
            name: 'Yeezy Slides Black',
            size: 10,
            quantity: 1,
          },
        ],
        reminded: false,
      },
      {
        phoneNumber: '8282229974',
        requestedShoes: [
          {
            manufacturer: 'Nike',
            name: 'Dunk Pandas',
            size: 10,
            quantity: 1,
          },
        ],
        reminded: false,
      },
      {
        phoneNumber: '8286203120',
        requestedShoes: [
          {
            manufacturer: 'Nike',
            name: 'Dunk SB Jarritos',
            size: 10,
            quantity: 1,
          },
        ],
        reminded: false,
      },
    ];
    */
  }

  ngOnInit(): void {
    this.shoeRequestService.getAllRequests().subscribe((data) => {
      this.requests = data;
    });
  }

  remind(request: ShoeRequestEntry): void {
    this.shoeRequestService
      .sendNotification(request.phoneNumber, 'in_stock')
      .subscribe();
    this.shoeRequestService.setReminded(request.phoneNumber).subscribe();
    request.reminded = true;
  }

  delete(request: ShoeRequestEntry): void {
    const index = this.requests.indexOf(request);
    this.shoeRequestService.deleteRequestByPhoneNumber(request.phoneNumber);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
  }

  remindAll(): void {
    this.requests.forEach((request) => (request.reminded = true));
  }

  deleteAll(): void {
    this.requests = [];
  }
}
