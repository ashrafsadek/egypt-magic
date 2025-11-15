// src/app/trip-planner/trip-planner.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
    selector: 'app-trip-planner',
    standalone: true,
    templateUrl: './trip-planer.html',
    styleUrls: ['./trip-planer.css'],
    imports: [CommonModule]
})
export class TripPlannerComponent implements OnInit, OnDestroy {
    constructor(private router: Router,
    ) { }

    // === CITIES ===
    allCities: City[] = [
        { id: 'cairo', name: 'Cairo' },
        { id: 'giza', name: 'Giza' },
        { id: 'luxor', name: 'Luxor' },
        { id: 'aswan', name: 'Aswan' },
        { id: 'alexandria', name: 'Alexandria' },
        { id: 'hurghada', name: 'Hurghada' },
        { id: 'sharm', name: 'Sharm El Sheikh' },
        { id: 'dahab', name: 'Dahab' },
        { id: 'siwa', name: 'Siwa Oasis' },
        { id: 'fayoum', name: 'Fayoum' }
    ];

    // === 40+ REAL EVENTS (all images work) ===
    allEvents: Event[] = [
        // === CAIRO ===
        {
            id: 'museum',
            name: 'Egyptian Museum',
            description: 'Home to Tutankhamun’s mask and 120,000+ artifacts.',
            image: '/images/trip-planer/cairo1.webp',
            cityId: 'cairo'
        },
        {
            id: 'khan',
            name: 'Khan El-Khalili Bazaar',
            description: 'Historic market with spices, jewelry, and lanterns.',
            image: '/images/trip-planer/cairo2.jpg',
            cityId: 'cairo'
        },
        {
            id: 'citadel',
            name: 'Saladin Citadel & Muhammad Ali Mosque',
            description: 'Iconic alabaster mosque with panoramic city views.',
            image: '/images/trip-planer/cairo3.webp',
            cityId: 'cairo'
        },
        {
            id: 'coptic',
            name: 'Coptic Cairo & Hanging Church',
            description: 'Ancient Christian quarter with churches and synagogues.',
            image: '/images/trip-planer/cairo4.jpg',
            cityId: 'cairo'
        },
        {
            id: 'nile-dinner',
            name: 'Nile Dinner Cruise',
            description: 'Dinner, belly dancing, and tanoura show on the Nile.',
            image: '/images/trip-planer/cairo5.jpg',
            cityId: 'cairo'
        },

        // === GIZA ===
        {
            id: 'pyramids',
            name: 'Pyramids of Giza & Sphinx',
            description: 'The last ancient wonder with the Great Sphinx.',
            image: '/images/trip-planer/giza1.jpg',
            cityId: 'giza'
        },
        {
            id: 'solar-boat',
            name: 'Solar Boat Museum',
            description: 'Khufu’s 4,600-year-old royal boat.',
            image: '/images/trip-planer/giza2.jpg',
            cityId: 'giza'
        },
        {
            id: 'sound-light',
            name: 'Giza Sound & Light Show',
            description: 'Night show narrating pharaohs’ stories.',
            image: '/images/trip-planer/giza3.webp',
            cityId: 'giza'
        },

        // === LUXOR ===
        {
            id: 'karnak',
            name: 'Karnak Temple Complex',
            description: 'Largest ancient religious site with 134 columns.',
            image: '/images/trip-planer/luxor1.webp',
            cityId: 'luxor'
        },
        {
            id: 'valley',
            name: 'Valley of the Kings',
            description: 'Tombs of Tutankhamun, Ramses II, and more.',
            image: '/images/trip-planer/luxor2.jpg',
            cityId: 'luxor'
        },
        {
            id: 'luxor-temple',
            name: 'Luxor Temple',
            description: 'Beautifully lit at night with Avenue of Sphinxes.',
            image: '/images/trip-planer/luxor3.jpg',
            cityId: 'luxor'
        },
        {
            id: 'medinet',
            name: 'Medinet Habu Temple',
            description: 'Well-preserved temple with vivid battle reliefs.',
            image: '/images/trip-planer/luxor4.jpg',
            cityId: 'luxor'
        },

        // === ASWAN ===
        {
            id: 'philae',
            name: 'Philae Temple',
            description: 'Rescued island temple of Goddess Isis.',
            image: '/images/trip-planer/aswan1.jpg',
            cityId: 'aswan'
        },
        {
            id: 'abu-simbel',
            name: 'Abu Simbel Temples',
            description: 'Ramses II’s colossal rock-cut temples.',
            image: '/images/trip-planer/aswan2.webp',
            cityId: 'aswan'
        },

        {
            id: 'unfinished',
            name: 'Unfinished Obelisk',
            description: 'Largest known ancient obelisk, abandoned in quarry.',
            image: '/images/trip-planer/aswan3.jpg',
            cityId: 'aswan'
        },

        // === ALEXANDRIA ===
        {
            id: 'qaitbay',
            name: 'Qaitbay Citadel',
            description: '15th-century fortress on the Mediterranean.',
            image: '/images/trip-planer/alex1.jpg',
            cityId: 'alexandria'
        },
        {
            id: 'library',
            name: 'Bibliotheca Alexandrina',
            description: 'Modern library honoring ancient knowledge.',
            image: '/images/trip-planer/alex2.jpg',
            cityId: 'alexandria'
        },
        {
            id: 'catacombs',
            name: 'Catacombs of Kom El Shoqafa',
            description: 'Underground Roman-Egyptian fusion necropolis.',
            image: '/images/trip-planer/alex3.jpg',
            cityId: 'alexandria'
        },
        {
            id: 'montaza',
            name: 'Montaza Palace & Gardens',
            description: 'Royal gardens and Mediterranean views.',
            image: '/images/trip-planer/alex4.webp',
            cityId: 'alexandria'
        },

        // === HURGHADA ===
        {
            id: 'snorkel-hur',
            name: 'Giftun Island Snorkeling',
            description: 'Coral reefs and tropical fish.',
            image: '/images/trip-planer/hurgada1.jpg',
            cityId: 'hurghada'
        },
        {
            id: 'quad-hur',
            name: 'Desert Quad Biking',
            description: 'High-speed adventure in the Eastern Desert.',
            image: '/images/trip-planer/hurgada2.jpg',
            cityId: 'hurghada'
        },
        {
            id: 'submarine',
            name: 'Sindbad Submarine',
            description: 'Underwater tour without getting wet.',
            image: '/images/trip-planer/hurgada3.jfif',
            cityId: 'hurghada'
        },

        // === SHARM EL SHEIKH ===
        {
            id: 'ras-mohammed',
            name: 'Ras Mohammed National Park',
            description: 'World-class diving and snorkeling.',
            image: '/images/trip-planer/sharm1.jpg',
            cityId: 'sharm'
        },
        {
            id: 'naama',
            name: 'Naama Bay Nightlife',
            description: 'Restaurants, shisha, and beach bars.',
            image: '/images/trip-planer/sharm2.jfif',
            cityId: 'sharm'
        },
        {
            id: 'quad-sharm',
            name: 'Bedouin Desert Safari',
            description: 'Sunset, dinner, and star gazing.',
            image: '/images/trip-planer/sharm3.jpg',
            cityId: 'sharm'
        },

        // === DAHAB ===
        {
            id: 'blue-hole',
            name: 'Blue Hole Diving',
            description: 'Famous sinkhole with coral walls.',
            image: '/images/trip-planer/dahab1.webp',
            cityId: 'dahab'
        },
        {
            id: 'lagoon',
            name: 'Dahab Lagoon Windsurfing',
            description: 'Ideal flat-water conditions for all levels.',
            image: '/images/trip-planer/dahab2.jpg',
            cityId: 'dahab'
        },

        // === SIWA OASIS ===
        {
            id: 'oracle',
            name: 'Temple of the Oracle',
            description: 'Alexander the Great consulted this ancient oracle.',
            image: '/images/trip-planer/siwa1.jfif',
            cityId: 'siwa'
        },
        {
            id: 'cleopatra',
            name: 'Cleopatra’s Pool',
            description: 'Natural spring bath in the desert.',
            image: '/images/trip-planer/siwa2.jpg',
            cityId: 'siwa'
        },


        // === FAYOUM ===
        {
            id: 'wadi-rayan',
            name: 'Wadi El Rayan Waterfalls',
            description: 'Man-made waterfalls and lakes in the desert.',
            image: '/images/trip-planer/fayom1.jfif',
            cityId: 'fayoum'
        },
        {
            id: 'whale-valley',
            name: 'Wadi Al-Hitan (Whale Valley)',
            description: 'UNESCO site with 40-million-year-old whale fossils.',
            image: '/images/trip-planer/fayom2.jpg',
            cityId: 'fayoum'
        },
        {
            id: 'lake-qarun',
            name: 'Lake Qarun Boat Ride',
            description: 'Birdwatching and fishing on Egypt’s largest natural lake.',
            image: '/images/trip-planer/fayom3.jpg',
            cityId: 'fayoum'
        }
    ];

    selectedCities: City[] = [];
    days: Day[] = [];
    currentDayForModal: Day | null = null;
    showCityModal = false;
    showActivityModal = false;
    private saveTimeout: any;

    ngOnInit() {
        this.loadPlan();
    }

    ngOnDestroy() {
        if (this.saveTimeout) clearTimeout(this.saveTimeout);
    }

    // === LOCALSTORAGE ===
    private savePlanToStorage() {
        const plan: SavedPlan = {
            selectedCities: this.selectedCities,
            days: this.days.map(d => ({ ...d, activities: d.activities.map(a => ({ event: a.event })) }))
        };
        localStorage.setItem('egypt-trip-plan', JSON.stringify(plan));
    }

    private loadPlan() {
        const saved = localStorage.getItem('egypt-trip-plan');
        if (saved) {
            try {
                const plan: SavedPlan = JSON.parse(saved);
                this.selectedCities = plan.selectedCities || [];
                this.days = (plan.days || []).map(d => ({
                    ...d,
                    activities: d.activities.map(a => ({ event: a.event }))
                }));
            } catch (e) {
                console.error('Load error', e);
            }
        }
    }

    private autoSave() {
        if (this.saveTimeout) clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(() => this.savePlanToStorage(), 800);
    }

    // === CITY ===
    addCity(city: City) {
        if (!this.selectedCities.some(c => c.id === city.id)) {
            this.selectedCities.push(city);
            this.autoSave();
        }
        this.showCityModal = false;
    }

    removeCity(city: City) {
        this.selectedCities = this.selectedCities.filter(c => c.id !== city.id);
        this.cleanupEventsOnCityRemoval(city.id);
        this.autoSave();
    }

    cleanupEventsOnCityRemoval(cityId: string) {
        this.days.forEach(day => {
            day.activities = day.activities.filter(a => a.event.cityId !== cityId);
        });
    }

    // === DAY ===
    addDay() {
        this.days.push({ id: `day-${Date.now()}`, activities: [] });
        this.autoSave();
    }

    removeDay(day: Day) {
        this.days = this.days.filter(d => d !== day);
        this.autoSave();
    }

    // === ACTIVITY ===
    openActivityModal(day: Day) {
        this.currentDayForModal = day;
        this.showActivityModal = true;
    }

    addActivityToDay(event: Event) {
        if (this.currentDayForModal && !this.isEventUsed(event.id)) {
            this.currentDayForModal.activities.push({ event });
            this.showActivityModal = false;
            this.autoSave();
        }
    }

    removeActivity(day: Day, i: number) {
        day.activities.splice(i, 1);
        this.autoSave();
    }

    isEventUsed(id: string): boolean {
        return this.days.some(d => d.activities.some(a => a.event.id === id));
    }

    getAvailableEvents(): Event[] {
        const used = this.days.flatMap(d => d.activities.map(a => a.event.id));
        return this.allEvents.filter(e =>
            this.selectedCities.some(c => c.id === e.cityId) && !used.includes(e.id)
        );
    }

    getEventsByCity() {
        const available = this.getAvailableEvents();
        const map = new Map<string, Event[]>();
        available.forEach(e => {
            if (!map.has(e.cityId)) map.set(e.cityId, []);
            map.get(e.cityId)!.push(e);
        });
        return Array.from(map.entries())
            .map(([cityId, events]) => ({
                city: this.allCities.find(c => c.id === cityId)!,
                events
            }))
            .filter(g => g.events.length > 0);
    }

    // === NAVIGATE TO YOUR TRIP ===
    viewTripPlan() {
        if (this.selectedCities.length === 0 && this.days.length === 0) {
            alert('Your plan is empty! Add cities and activities first.');
            return;
        }

        // Save to service

        // Navigate
        this.router.navigate(['/your-trip']);
    }
    // === DELETE PLAN ===
    deletePlan() {
        if (confirm('Delete your entire plan?')) {
            this.selectedCities = [];
            this.days = [];
            localStorage.removeItem('egypt-trip-plan');
            alert('Plan deleted.');
        }
    }

    // === SAFE CITY LOOKUP ===
    getCityName(cityId: string): string {
        return this.allCities.find(c => c.id === cityId)?.name ?? 'Unknown City';
    }
}