import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Hotel, HotelService } from '../../services/hotel-service';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, FormsModule],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels implements OnInit {

  constructor(private _hotelService:HotelService, private _router:Router){}

  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];

  // Default filter values
  selectedCity: string = 'All Cities';
  selectedPrice: string = 'Any Price';
  selectedRating: string = 'Any Rating';

  ngOnInit(): void {
    this.hotels = this._hotelService.getHotels();
    this.filteredHotels = [...this.hotels]; // show all by default
  }

  // Function to filter hotels
  filterHotels(): void {
    this.filteredHotels = this.hotels.filter(hotel => {
      const cityMatch =
        this.selectedCity === 'All Cities' || hotel.city === this.selectedCity;

      const priceMatch = (() => {
        if (this.selectedPrice === 'Any Price') return true;
        const price = hotel.price;
        if (this.selectedPrice === '$50 - $100') return price >= 50 && price <= 100;
        if (this.selectedPrice === '$100 - $200') return price >= 100 && price <= 200;
        if (this.selectedPrice === '$200 - $500') return price >= 200 && price <= 500;
        if (this.selectedPrice === '$500+') return price > 500;
        return true;
      })();

      const ratingMatch = (() => {
        if (this.selectedRating === 'Any Rating') return true;
        if (this.selectedRating === '★★★★★') return hotel.rating === 5;
        if (this.selectedRating === '★★★★☆ & up') return hotel.rating >= 4;
        if (this.selectedRating === '★★★☆☆ & up') return hotel.rating >= 3;
        return true;
      })();

      return cityMatch && priceMatch && ratingMatch;
    });
  }

  // Navigate to details page
  viewDetails(hotel: Hotel): void {
    this._router.navigate(['/hotels', hotel.id]);
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
