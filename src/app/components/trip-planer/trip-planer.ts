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
            image: '/images/trip-planer/cairo2.webp',
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
            id: 'hatshepsut',
            name: 'Hatshepsut Temple',
            description: 'Terraced mortuary temple of Egypt’s female pharaoh.',
            image: 'data:image/jpeg;base64,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',
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