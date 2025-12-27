import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUs } from './about-us';
import { DirectorsList } from './directors-list/directors-list';
import { FoundersList } from './founders-list/founders-list';
import { FinKeyIndicators } from './fin-key-indicators/fin-key-indicators';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUs,
        children: [
          { path: '', redirectTo: 'founders', pathMatch: 'full' },
         
          { path: 'directors', component: DirectorsList },
          { path: 'founders', component: FoundersList },
          { path: 'financials', component: FinKeyIndicators }
         
        ]
      }
    ])
  ]
})
export class AboutUsModule { }
