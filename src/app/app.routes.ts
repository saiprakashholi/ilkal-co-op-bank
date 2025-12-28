import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
    },
    {
        path: 'about-us',
        loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule)
    },
    { path: 'gallery', loadComponent: () => import('./features/gallery/gallery').then(m => m.Gallery) },
    {
        path: 'others',
        loadChildren: () => import('./features/others/others.module').then(m => m.OthersModule)
    },
    { path: 'contact-us', loadComponent: () => import('./features/contact-us/contact-us').then(m => m.ContactUs) },
    { path: 'locations', loadComponent: () => import('./features/locations/locations').then(m => m.Locations) },
    { path: 'agm', loadComponent: () => import('./features/agm/agm').then(m => m.Agm) },
    {
        path: 'deposits',
        loadChildren: () => import('./features/deposits/deposits.module').then(m => m.DepositsModule)
    },
    {
        path: 'loans',
        loadChildren: () => import('./features/loans/loans.module').then(m => m.LoansModule)
    },
    {
        path: 'service',
        loadChildren: () => import('./features/service/service.module').then(m => m.ServiceModule)
    },
];
