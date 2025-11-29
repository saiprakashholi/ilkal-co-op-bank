import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresidentsList } from './presidents-list/presidents-list';
import { AboutUs } from './about-us';
import { DirectorsList } from './directors-list/directors-list';
import { FoundersList } from './founders-list/founders-list';
import { FinKeyIndicators } from './fin-key-indicators/fin-key-indicators';

// import { AboutUsComponent } from './about-us.component';
// import { ExecutivesComponent } from './executives/executives.component';
// import { PresidentsListComponent } from './executives/presidents-list.component';
// import { MdListComponent } from './executives/md-list.component';
// import { BoardComponent } from './executives/board.component';
// import { KeyPersonnelComponent } from './executives/key-personnel.component';

@NgModule({
  declarations: [
    // AboutUsComponent,
    // ExecutivesComponent,
    // PresidentsListComponent,
    // MdListComponent,
    // BoardComponent,
    // KeyPersonnelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUs,
        children: [
          { path: '', redirectTo: 'founders', pathMatch: 'full' },
          // { path: 'presidents', component: PresidentsList },
          { path: 'directors', component: DirectorsList },
          { path: 'founders', component: FoundersList },
          { path: 'financials', component: FinKeyIndicators }
          //   { path: 'executives', component: ExecutivesComponent, children: [
          //       { path: 'presidents', component: PresidentsListComponent },
          //       { path: 'mds', component: MdListComponent },
          //       { path: 'board', component: BoardComponent },
          //       { path: 'key-personnel', component: KeyPersonnelComponent }
          //     ]
          //   }
        ]
      }
    ])
  ]
})
export class AboutUsModule { }
