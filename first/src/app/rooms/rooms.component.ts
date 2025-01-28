import { Component,ViewEncapsulation} from '@angular/core';
import { Room,RoomList } from './rooms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsComponent {

  hotelName = 'Hotel SB';
  no_of_rooms = 10;
  hide = false;

  rooms:Room= {
    total: 10,
    available: 5,
    booked: 5
  
  }

  roomList: RoomList[]=[
    {
    roomType: 'Deluxe',
    ammenities: ['TV','AC','WIFI'],
    price: 5000,
    checkIn: new Date('2024-09-01'),
    checkOut: new Date('2024-09-10')

    },
    {
      roomType: 'Standard',
      ammenities: ['TV','AC','WIFI'],
      price: 3000,
      checkIn: new Date('2024-09-01'),
      checkOut: new Date('2024-09-03')
    }
  ];
  displayedColumns: string[] = ['roomType', 'ammenities', 'price', 'checkIn', 'checkOut'];

  constructor() { }
  ngOnInit(): void {
  }

  toggle(){
    this.hide = !this.hide;
  }

}
