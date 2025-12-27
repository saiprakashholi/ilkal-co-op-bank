import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Deposits } from './deposits';
import { InterestRate } from './interest-rate/interest-rate';
import { Saving } from './saving/saving';
import { Current } from './current/current';
import { Term } from './term/term';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: Deposits,
                children: [
                    { path: '', redirectTo: 'interest-rate', pathMatch: 'full' },

                    { path: 'interest-rate', component: InterestRate },
                    { path: 'saving', component: Saving },
                    { path: 'current', component: Current },
                    { path: 'term', component: Term }

                ]
            }
        ])
    ]
})
export class DepositsModule { }
