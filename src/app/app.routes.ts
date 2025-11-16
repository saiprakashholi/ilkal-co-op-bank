import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
    { path: 'about-us', loadComponent: () => import('./features/about-us/about-us').then(m => m.AboutUs) },
    { path: 'gallery', loadComponent: () => import('./features/gallery/gallery').then(m => m.Gallery) },
    { path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us').then(m => m.ContactUs) },
    { path: 'locations', loadComponent: () => import('./features/locations/locations').then(m => m.Locations) },
    { path: 'agm', loadComponent: () => import('./features/agm/agm').then(m => m.Agm) },
    { path: 'deposits', loadComponent: () => import('./features/deposits/deposits').then(m => m.Deposits) },
    { path: 'loans', loadComponent: () => import('./features/loans/loans').then(m => m.Loans) },


];
