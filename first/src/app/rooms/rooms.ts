export interface Room{
    total?: number;
    available?: number
    booked?: number;
}

export interface RoomList{
    roomType:string,
    ammenities:string[],
    price:number
    checkIn:Date,
    checkOut:Date
}