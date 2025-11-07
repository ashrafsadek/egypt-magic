import { Component } from '@angular/core';
import { Weather } from "../weather/weather";
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Reviews } from '../reviews/reviews';

@Component({
  selector: 'app-home',
  imports: [Weather, RouterLink, CommonModule, Reviews],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // cities section
  destinations = [
    {
      name: 'Cairo',
      description:
        'The vibrant capital, home to ancient treasures and bustling bazaars.',
      image:
      '/images/city1.png'
    },
    {
      name: 'Luxor',
      description:
        "Known as the world's greatest open-air museum.",
      image:
      '/images/city2.png'
    },
    {
      name: 'Aswan',
      description:
        'A serene city on the Nile, perfect for relaxing and exploring Nubian culture.',
      image:
      '/images/city3.png'
    }
  ];

  // hotels section
  hotels = [
    {
      name: 'The Nile Ritz-Carlton, Cairo',
      price: 350,
      rating: 5,
      image:
        '/images/hotel1.png'
    },
    {
      name: 'Winter Palace Luxor',
      price: 280,
      rating: 4.5,
      image:
        '/images/hotel2.png'
    },
    {
      name: 'Movenpick Resort Aswan',
      price: 220,
      rating: 4.6,
      image:
        '/images/hotel3.png'
    }
  ];

  // interactive map
  currentCity: string | null = 'cairo';
isactive: number | null = 0;

  toggleCity(city: string , index : number) {
    this.currentCity = this.currentCity === city ? null : city;
    this.isactive = this.isactive ===index ? null : index;
  }

  // show rating stars
  getStars(rating: number): ('full' | 'empty')[] {
    const stars: ('full' | 'empty')[] = [];
    const rounded = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(i < rounded ? 'full' : 'empty');
    }
    return stars;
  }
}
