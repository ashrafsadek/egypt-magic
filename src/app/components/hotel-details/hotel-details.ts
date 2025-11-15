import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Hotel, HotelService, Room } from '../../services/hotel-service';

declare var bootstrap: any;

@Component({
  selector: 'app-hotel-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './hotel-details.html',
  styleUrl: './hotel-details.css'
})
export class HotelDetails implements OnInit {

  hotel?: Hotel;
  selectedRoom!: Room | null;

  constructor(private _route: ActivatedRoute, private _hotelService: HotelService){}

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this.hotel = this._hotelService.getHotelById(id);
  }

  selectRoom(room: Room) {
    this.selectedRoom = room;
  }

  confirmBooking() {
  if (this.selectedRoom) {
    // Save booking in local storage
    this.saveBooking();

    // Close booking modal
    const bookingModal = document.getElementById('bookingModal');
    const modalInstance = bootstrap.Modal.getInstance(bookingModal!);
    modalInstance?.hide();

    // Show success modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal')!);
    successModal.show();
  }
}

  // Saving hotel to local storage 
  saveBooking() {
    if (this.hotel && this.selectedRoom) {
      const bookingData = {
        hotel: this.hotel,
        room: this.selectedRoom,
        date: new Date().toISOString()
      };
      localStorage.setItem('hotelBooking', JSON.stringify(bookingData));
    }
}

  // show stars
  getStars(rating: number): ('full' | 'empty')[] {
    const stars: ('full' | 'empty')[] = [];
    const rounded = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(i < rounded ? 'full' : 'empty');
    }
    return stars;
  }
}
