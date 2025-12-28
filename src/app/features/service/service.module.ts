import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service } from './service';
import { Upi } from './upi/upi';
import { Imps } from './imps/imps';
import { Atm } from './atm/atm';
import { RtgsNeft } from './rtgs-neft/rtgs-neft';
import { Locker } from './locker/locker';
import { Mobile } from './mobile/mobile';



@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: Service,
                children: [
                    { path: '', redirectTo: 'upi', pathMatch: 'full' },

                    { path: 'upi', component: Upi },
                    { path: 'imps', component: Imps },
                    { path: 'atm', component: Atm },
                    { path: 'rtgs-neft', component: RtgsNeft },
                    { path: 'locker', component: Locker },
                    { path: 'mobile', component: Mobile }

                ]
            }
        ])
    ]
})
export class ServiceModule { }
