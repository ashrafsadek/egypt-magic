import { Injectable } from '@angular/core';

export interface Room {
  type: string;
  price: number;
  includes: string;
}

export interface Hotel {
  id: number;
  name: string;
  city: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  rooms: Room[];
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'The Nile Grand Hotel',
      city: 'Cairo',
      image: '/images/hotel4.png',
      price: 90,
      rating: 4.9,
      description: 'A luxury hotel overlooking the majestic Nile River, The Nile Grand Hotel offers sophisticated rooms, fine dining experiences, and an infinity pool with stunning city views. Perfect for travelers who want to enjoy modern comfort in the heart of historic Cairo.',
      rooms: [
      { type: 'Deluxe Room with Nile View', price: 150, includes: 'Breakfast buffet included' },
      { type: 'Executive Suite', price: 220, includes: 'Breakfast & private lounge access' },
      { type: 'Presidential Suite', price: 400, includes: 'All meals & private terrace with panoramic view' }
    ]
    },
    {
      id: 2,
      name: 'Pyramids View Resort',
      city: 'Giza',
      image: '/images/hotel5.png',
      price: 120,
      rating: 4.7,
      description: 'Located just minutes from the Great Pyramids, Pyramids View Resort provides breathtaking views of one of the world’s wonders. Guests can enjoy spacious rooms, authentic Egyptian cuisine, and warm hospitality in a relaxing atmosphere that blends history with modern luxury.',
      rooms: [
      { type: 'Standard Room with Pyramid View', price: 120, includes: 'Breakfast included' },
      { type: 'Superior Room with Balcony', price: 160, includes: 'Breakfast & dinner included' },
      { type: 'Royal Suite', price: 280, includes: 'Full-board meals & private terrace' }
    ]
    },
    {
      id: 3,
      name: 'Luxor Oasis Spa & Resort',
      city: 'Luxor',
      image: '/images/hotel6.png',
      price: 180,
      rating: 4.8,
      description: 'Discover serenity and culture at Luxor Oasis Spa & Resort, a peaceful haven near Luxor’s ancient temples. The resort features a full-service spa, palm-fringed pools, and beautifully designed suites — ideal for guests seeking relaxation and history in equal measure.',
      rooms: [
      { type: 'Garden View Room', price: 180, includes: 'Breakfast included' },
      { type: 'Spa Suite', price: 230, includes: 'Breakfast & 1 spa session per stay' },
      { type: 'Temple View Suite', price: 310, includes: 'Full-board & free temple shuttle' }
    ]
    },
    {
      id: 4,
      name: 'Red Sea Coral Bay',
      city: 'Sharm El Sheikh',
      image: '/images/hotel7.png',
      price: 135,
      rating: 4.6,
      description: 'Situated along the crystal-clear waters of the Red Sea, Red Sea Coral Bay is a paradise for beach lovers and divers. Offering elegant rooms, seaside dining, and access to vibrant coral reefs, this resort promises an unforgettable tropical escape.',
      rooms: [
      { type: 'Sea View Room', price: 135, includes: 'Breakfast included' },
      { type: 'Family Suite', price: 190, includes: 'Breakfast & dinner included' },
      { type: 'Coral Beach Villa', price: 310, includes: 'All-inclusive & private beach access' }
    ]
    },
    {
      id: 5,
      name: 'Aswan Dream Lodge',
      city: 'Aswan',
      image: '/images/hotel8.png',
      price: 210,
      rating: 4.9,
      description: 'Nestled along the peaceful banks of the Nile, Aswan Dream Lodge combines Nubian charm with contemporary elegance. Guests can enjoy breathtaking sunset views, boat rides, and authentic cultural experiences in one of Egypt’s most beautiful southern cities.',
      rooms: [
      { type: 'Standard Room', price: 210, includes: 'Breakfast included' },
      { type: 'Nile View Deluxe Room', price: 260, includes: 'Breakfast & boat tour' },
      { type: 'Royal Nubian Suite', price: 350, includes: 'Full meals & private terrace' }
    ]
    },
    {
      id: 6,
      name: 'Cairo Cityscape Hotel',
      city: 'cairo',
      image: '/images/hotel9.png',
      price: 110,
      rating: 4.5,
      description: 'Centrally located in Cairo’s bustling downtown, Cairo Cityscape Hotel offers stylish accommodations with easy access to major attractions, shopping districts, and nightlife. Its rooftop terrace, modern amenities, and welcoming atmosphere make it perfect for business and leisure travelers alike.',
      rooms: [
      { type: 'Standard Room', price: 110, includes: 'Breakfast included' },
      { type: 'Deluxe Room with City View', price: 150, includes: 'Breakfast & welcome drink' },
      { type: 'Executive Suite', price: 230, includes: 'Breakfast & late checkout' }
    ]
    }
  ];

  getHotels(): Hotel[] {
    return this.hotels;
  }

  getHotelById(id: number): Hotel | undefined {
    return this.hotels.find(hotel => hotel.id === id);
  }
}
