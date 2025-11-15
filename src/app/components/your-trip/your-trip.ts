import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import html2canvas from 'html2canvas';

interface City {
    id: string;
    name: string;
}

interface Event {
    id: string;
    name: string;
    description: string;
    image: string;
    cityId: string;
}

interface Activity {
    event: Event;
}

interface Day {
    id: string;
    activities: Activity[];
}

interface SavedPlan {
    selectedCities: City[];
    days: Day[];
}

@Component({
    selector: 'app-your-trip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './your-trip.html',
    styleUrls: ['./your-trip.css']
})
export class YourTripComponent implements OnInit {

    @ViewChild('captureArea', { static: false }) captureArea!: ElementRef;

async takeScreenshotHtml2Canvas() {
  const element = this.captureArea.nativeElement;

  const canvas = await html2canvas(element, {
    useCORS: true,
    backgroundColor: '#ffffff',
    scale: window.devicePixelRatio
  });

  const dataUrl = canvas.toDataURL('image/png');

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `screenshot_${Date.now()}.png`;
  link.click();
}


    plan: SavedPlan | null = null;

    ngOnInit() {
        this.loadPlan();
    }

    loadPlan() {
        const saved = localStorage.getItem('egypt-trip-plan');
        if (saved) {
            this.plan = JSON.parse(saved);
        }
    }

    
}
