import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {

  reviews = [
    {
      name: 'Sophia Clark',
      date: 'May 15, 2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl2th8kV_vzmTDLxa2VHm6yAmSS3BcMQD8CE3r4CxyXtb79Zl9Er1H_r3xxNpATb6nbU8ckpM6dnU308NvolXkQ6O-dyNLNGqLmvYoG5ZmVzWF2IvTJ6ZpV75hCuleBqlLxeoqIJ5b38CAxkx_xZmpCW3GhLJUVMQ8wjjMLw5a0TQmjd-OP5dAnd7_YtTbbmwPpbZYds2xPLpKke6ljV2mDaqbgIOwHUiGiVaTvQ7xYFK6i_2Ln1oxnweXGpSA9cHH_kLvMRhKi-5H',
      rating: 5,
      comment: `"My trip to Egypt with Magic of Egypt was truly magical! The itinerary was well-planned, and the guides were knowledgeable and friendly. I highly recommend their services."`
    },
    {
      name: 'Ethan Bennett',
      date: 'June 22, 2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-fYHAnqsuBUf9JaG_VZ6EO4Pd7WhlY3eH4YzzBzRkUnkroC2_MTNGwHP6xpEHle6uJLR0LQDL2eiCcPG_VBM_tv3lW14L2U5pWtVIGVZbCEmPcW3W0H3vSmKonHtlF5W5tKYEPaXsMAJEbLf-UlHXOo4f8Sa7a2ZQAOPJTCOqoPgDfWoxyYmUYNwdTwbuck1dI6d2muKm0PuHFd8RXu3sKGurO46n-rJqCELiLh6NarhSBwmoNelbX0r-eY-O4sUAEmkBruhTqPCn',
      rating: 4,
      comment: `"The hotels were excellent, and the tours were well-organized. However, I felt some of the activities were a bit rushed. Overall, a great experience."`
    },
    {
      name: 'Olivia Carter',
      date: 'July 10, 2023',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb87--ug5epP3KxUACatk7ovMJietOcMjhU-rWLKowwQuFlX4LAFNMLvBjaUI_UrpRcf4hYUYIKqxqJTQl3CShdxOyb9XzArDLcAynNHRcTM3nO0gUoKMHpFaXV0JEDfFEq6Kpee1-zPvhfiT8QCn9N4NyF4VJHsGrVV8l1dHG3U_VOVAlVBB-8ZTONqehbulm87shI73MgZpJd7i4eUKPE0Fe15cJlDrHUFJrlbMvD_Jmnk_07BvmhUrzhWQsdEl52CPgrfryaq68',
      rating: 5,
      comment: `"From the moment I booked my trip, everything was seamless. The staff was incredibly helpful, and the experience exceeded my expectations. I can't wait to return!"`
    }
  ];

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
