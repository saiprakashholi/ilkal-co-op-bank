import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OthersComponent } from './others.component';
import { ServiceCharges } from './service-charges/service-charges';
import { SafeBanking } from './safe-banking/safe-banking';
import { Downloads } from './downloads/downloads';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
          {
            path: '',
            component: OthersComponent,
             children: [
                  { path: '', redirectTo: 'service-charges', pathMatch: 'full' },
                  { path: 'service-charges', component: ServiceCharges },
                  { path: 'safe-banking', component: SafeBanking },
                  { path: 'download', component: Downloads },
                ],
          }
        ])
      ]
})
export class OthersModule { }
