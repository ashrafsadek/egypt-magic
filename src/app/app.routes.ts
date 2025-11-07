import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { TripPlaner } from './components/trip-planer/trip-planer';
import { Hotels } from './components/hotels/hotels';
import { ExploreEgypt } from './components/explore-egypt/explore-egypt';
import { HotelDetails } from './components/hotel-details/hotel-details';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'hotels', component: Hotels},
    {path: 'hotels/:id', component: HotelDetails},
    {path: 'explore-egypt', component: ExploreEgypt},
    {path: 'trip-planer', component: TripPlaner},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: '**', component: Notfound}
];
