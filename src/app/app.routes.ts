import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { Hotels } from './components/hotels/hotels';
import { ExploreEgypt } from './components/explore-egypt/explore-egypt';
import { HotelDetails } from './components/hotel-details/hotel-details';
import { TripPlannerComponent } from './components/trip-planer/trip-planer';
import { YourTripComponent } from './components/your-trip/your-trip';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'hotels', component: Hotels},
    {path: 'hotels/:id', component: HotelDetails, data: { prerender: false }},
    {path: 'explore-egypt', component: ExploreEgypt},
    {path: 'trip-planer', component: TripPlannerComponent},
    {path: 'your-trip', component: YourTripComponent},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: '**', component: Notfound}
];
