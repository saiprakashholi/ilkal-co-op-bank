import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Misc } from './misc';
import { Inquiry } from './inquiry/inquiry';
import { LodgeAComplaint } from './lodge-a-complaint/lodge-a-complaint';
import { Career } from './career/career';



@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: Misc,
                children: [
                    { path: '', redirectTo: 'inquiry', pathMatch: 'full' },

                    { path: 'inquiry', component: Inquiry },
                    { path: 'lodge-a-complaint', component: LodgeAComplaint },
                    { path: 'career', component: Career }

                ]
            }
        ])
    ]
})
export class MiscModule { }
