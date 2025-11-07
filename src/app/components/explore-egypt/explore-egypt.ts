import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-egypt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-egypt.html',
  styleUrls: ['./explore-egypt.css'],
})
export class ExploreEgypt {
  selectedCity: any = null;
  previewImage: string | null = null;

  cities = [
    {
      id: 'cairo',
      name: 'Cairo',
      title: 'The Capital of Egypt',
      image: '/images/cities/cairo.jpg',
      shortDesc: 'The heart of Egypt, full of history and culture.',
      description:
        'Cairo is Egypt’s bustling capital, home to ancient treasures and vibrant modern life. Explore the Great Pyramids, the Sphinx, and the Egyptian Museum.',
      attractions: [
        'Giza Pyramids',
        'The Egyptian Museum',
        'Khan El Khalili Bazaar',
        'Cairo Tower',
      ],
      gallery: [
        '/images/cities/pyramids.jpg',
        '/images/cities/museum.jpg',
        '/images/cities/khan-el-khalili.webp',
        '/images/cities/Tower.jpg',
      ],
    },
    {
      id: 'luxor',
      name: 'Luxor',
      title: 'The Ancient City of Thebes',
      image: '/images/cities/luxor.webp',
      shortDesc: 'A living museum of ancient Egyptian history.',
      description:
        'Luxor is often described as the world’s greatest open-air museum, filled with temples, tombs, and monuments from ancient Egypt.',
      attractions: ['Karnak Temple', 'Valley of the Kings', 'Luxor Temple', 'Hatshepsut Temple'],
      gallery: [
        '/images/cities/Karnak .webp',
        '/images/cities/Valley.jpg',
        '/images/cities/Luxor_Temple.jpg',
        '/images/cities/Hatshepsut.jpg',
      ],
    },
    {
      id: 'aswan',
      name: 'Aswan',
      title: 'The Jewel of the Nile',
      image: '/images/cities/aswan.jpg',
      shortDesc: 'A peaceful city with Nubian charm and Nile beauty.',
      description:
        'Aswan offers a tranquil escape with beautiful Nile views, ancient temples, and Nubian culture.',
      attractions: ['Philae Temple', 'Nubian Village', 'Aswan High Dam', 'Kom Ombo Temple'],
      gallery: [
        '/images/cities/Philae.jpg',
        '/images/cities/Nubian_Village.jpg',
        '/images/cities/High_Dam.jpg',
        '/images/cities/Kom_Ombo.jpg',
      ],
    },
    {
      id: 'alexandria',
      name: 'Alexandria',
      title: 'The Pearl of the Mediterranean',
      image: '/images/cities/alexandria.jpg',
      shortDesc: 'A coastal gem blending history and sea breeze.',
      description:
        'Founded by Alexander the Great, Alexandria offers a mix of culture, history, and the sea — from the Bibliotheca Alexandrina to Qaitbay Citadel.',
      attractions: [
        'Library of Alexandria',
        'Citadel of Qaitbay',
        'Montaza Palace',
        'Stanley Bridge',
      ],
      gallery: [
        '/images/cities/Library.jpg',
        '/images/cities/Qaitbay.jpg',
        '/images/cities/Montaza.jpg',
        '/images/cities/Stanley.jpg',
      ],
    },
    {
      id: 'sharm',
      name: 'Sharm El Sheikh',
      title: 'The Red Sea Paradise',
      image: '/images/cities/sharm.jpg',
      shortDesc: 'A world-famous resort city on the Red Sea.',
      description:
        'Sharm El Sheikh is one of Egypt’s most popular tourist destinations, known for its clear waters, coral reefs, and luxurious resorts. It’s a paradise for diving and relaxation.',
      attractions: ['Naama Bay', 'Ras Mohammed National Park', 'Tiran Island', 'Soho Square'],
      gallery: [
        '/images/cities/Naama.jpg',
        '/images/cities/Mohammed_National.jpg',
        '/images/cities/Tiran.jpg',
        '/images/cities/Hollywood.jpg',
      ],
    },
    {
      id: 'sinai',
      name: 'Sinai',
      title: 'The Land of Mountains and Miracles',
      image: '/images/cities/sinai.jpg',
      shortDesc: 'A blend of desert beauty and spiritual heritage.',
      description:
        'Sinai offers stunning desert landscapes, sacred mountains, and coastal towns like Dahab and Nuweiba. It’s a destination rich in nature and history.',
      attractions: ['Mount Moses', 'Saint Catherine\'s Monastery', 'Soldier\'s Castle', 'Nuweiba'],
      gallery: [
        '/images/cities/Moses.webp',
        '/images/cities/Saint.jpg',
        '/images/cities/Soldier\'s Castle.jpg',
        '/images/cities/Nuweiba.jpg',
      ],
    },
    {
      id: 'hurghada',
      name: 'Hurghada',
      title: 'The Red Sea Gem',
      image: '/images/cities/hurghada.jpg',
      shortDesc: 'A vibrant city for sea adventures and sunny escapes.',
      description:
        'Hurghada offers stunning beaches, water sports, and coral reefs. It’s one of Egypt’s most popular Red Sea resorts for relaxation and fun.',
      attractions: [
        'Giftun Island',
        'Marina Boulevard',
        'Hurghada Grand Aquarium',
        'El Dahar Old Town',
      ],
      gallery: [
        '/images/cities/Giftun.webp',
        '/images/cities/Marina Boulevard.jpg',
        '/images/cities/Grand Aquarium.jpg',
        '/images/cities/El Dahar Old Town.jpg',
      ],
    },
    {
      id: 'Upper Egypt',
      name: 'Upper Egypt',
      title: '(Minya, Assiut, Sohag, Qena)',
      image: '/images/cities/upper.jpg',
      shortDesc: 'A serene oasis surrounded by dunes and history.',
      description:
        'Upper Egypt is a land of timeless heritage, where ancient temples, rich traditions, and the flowing Nile reveal the true soul of Egypt’s history and culture.',
      attractions: ['Tel Amara (Minya)', 'Assiut Barrages (Assiut)', 'Temple of Seti I (Sohag)', 'Temple of Dendera (Qena)'],
      gallery: [
        '/images/cities/Tel_Amara.jpg',
        '/images/cities/Barrages.jpg',
        '/images/cities/Temple of Seti I.jpg',
        '/images/cities/Dendera.jpg',
      ],
    },
    {
      id: 'fayoum',
      name: 'Fayoum',
      title: 'Nature and History Combined',
      image: '/images/cities/fayoum.jpg',
      shortDesc: 'A perfect blend of desert beauty and ancient wonders.',
      description:
        'Fayoum offers stunning waterfalls, ancient ruins, and wildlife. It’s famous for Wadi El-Rayan, Wadi El-Hitan, and Lake Qarun.',
      attractions: ['Wadi El-Rayan Waterfalls', 'Wadi El-Hitan', 'Lake Qarun', 'Tunis Village'],
      gallery: [
        '/images/cities/Wadi El-Rayan Waterfalls.jpg',
        '/images/cities/Wadi El-Hitan.jpg',
        '/images/cities/Qarun.webp',
        '/images/cities/Tunis Village.jpg',
      ],
    },
  ];

  exploreCity(city: any, event: Event) {
    event.stopPropagation();
    this.selectedCity = city;

    // تأخير بسيط علشان الـDOM يحدث نفسه
    setTimeout(() => {
      const detailsSection = document.querySelector('.city-details');
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  // ✅ غلق سكشن التفاصيل
  closeDetails() {
    this.selectedCity = null;
  }

  // ✅ فتح الصورة في وضع المعاينة
  openPreview(image: string) {
    this.previewImage = image;
  }

  // ✅ غلق الصورة المكبرة
  closePreview() {
    this.previewImage = null;
  }
}