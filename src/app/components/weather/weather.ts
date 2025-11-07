import { Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class Weather implements OnInit {

  scrollContainer = viewChild<ElementRef>('scrollContainer');
  // governorates of egypt
  governorates = [
    'Cairo', 'Alexandria', 'Giza', 'Aswan', 'Luxor', 'Suez', 'Port Said',
    'Ismailia', 'Faiyum', 'Minya', 'Sohag', 'Qena', 'Beni Suef', 'Beheira',
    'Sharqia', 'Gharbia', 'Dakahlia', 'Kafr el-Sheikh', 'Matrouh', 'Asyut'
  ];

  weatherData: any[] = [];
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  constructor(private _weatherService: WeatherService){}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  // loop over gov arr and get its weather then push it ti weather arr
  loadWeatherData() {
    this.governorates.forEach(city => {
      this._weatherService.getWeather(city).subscribe({
        next: (data) => this.weatherData.push(data),
        error: (err) => console.error('Error fetching weather for', city, err)
      });
    });
  }
  

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.scrollContainer()!.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollContainer()!.nativeElement.scrollLeft;
  }

  stopDrag() {
    this.isDragging = false;
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - this.scrollContainer()!.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.scrollContainer()!.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
