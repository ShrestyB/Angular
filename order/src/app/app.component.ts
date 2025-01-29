import { Component, OnInit} from '@angular/core';
import { OrderStatus } from './app.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  orderStatuses: OrderStatus[] = [
    {
      step: 1,
      label: 'Order Placed',
      state: 'completed',
      description: 'Your order has been successfully placed.',
      tooltip: 'Order Placed'
    },
    {
      step: 2,
      label: 'Payment Processed',
      state: 'completed',
      description: 'Your payment is successfully processed.',
      tooltip: 'Payment Processed'
    },
    {
      step: 3,
      label: 'Shipped',
      state: 'in-progress',
      description: 'Your order is on the way.',
      tooltip: 'Shipped'
    },
    {
      step: 4,
      label: 'Out for Delivery',
      state: 'pending',
      description: 'Your order is out for delivery.',
      tooltip: 'Out for Delivery'
    },
    {
      step: 5,
      label: 'Delivered',
      state: 'pending',
      description: 'Your order has been delivered.',
      tooltip: 'Delivered'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
  getProgress(state: 'completed' | 'in-progress' | 'pending'): number {
    switch (state) {
      case 'completed':
        return 100;
      case 'in-progress':
        return 60; // Example: Progress is at 60% for "in-progress"
      case 'pending':
        return 0;
      default:
        return 0;
    }
  }
  
}
