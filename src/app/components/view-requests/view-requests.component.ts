import { Component } from '@angular/core';
import { ShoeRequest } from '../../ShoeRequest';
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
  requests: Request[] = [
    {
      phoneNumber: '8282758982',
      shoes: [
        {
          manufacturer: 'Nike',
          shoeName: 'Air Max 90',
          shoeSize: 10,
          shoeQuantity: 1,
        },
        {
          manufacturer: 'Nike',
          shoeName: 'Dunk Panda',
          shoeSize: 10,
          shoeQuantity: 1,
        },
      ],
      reminded: false,
    },
    {
      phoneNumber: '8282908765',
      shoes: [
        {
          manufacturer: 'Jordan',
          shoeName: 'Jordan 1 Travis Scott',
          shoeSize: 10,
          shoeQuantity: 1,
        },
        {
          manufacturer: 'Jordan',
          shoeName: 'Jordan 1 Bred',
          shoeSize: 10,
          shoeQuantity: 1,
        },
      ],
      reminded: false,
    },
    {
      phoneNumber: '8287671042',
      shoes: [
        {
          manufacturer: 'Adidas',
          shoeName: 'Yeezy 350 V2',
          shoeSize: 10,
          shoeQuantity: 1,
        },
        {
          manufacturer: 'Adidas',
          shoeName: 'Yeezy Slides Black',
          shoeSize: 10,
          shoeQuantity: 1,
        },
      ],
      reminded: false,
    },
    {
      phoneNumber: '8282229974',
      shoes: [
        {
          manufacturer: 'Nike',
          shoeName: 'Dunk Pandas',
          shoeSize: 10,
          shoeQuantity: 1,
        },
      ],
      reminded: false,
    },
    {
      phoneNumber: '8286203120',
      shoes: [
        {
          manufacturer: 'Nike',
          shoeName: 'Dunk SB Jarritos',
          shoeSize: 10,
          shoeQuantity: 1,
        },
      ],
      reminded: false,
    },
  ];

  constructor(private shoeRequestService: ShoeRequestServiceService) {}

  remind(request: Request): void {
    this.shoeRequestService
      .sendNotification(request.phoneNumber, 'in_stock')
      .subscribe();
    request.reminded = true;
  }

  delete(request: Request): void {
    const index = this.requests.indexOf(request);
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
