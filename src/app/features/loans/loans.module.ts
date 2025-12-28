import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InterestRate } from './interest-rate/interest-rate';
import { Loans } from './loans';
import { PersonalLoan } from './personal-loan/personal-loan';
import { HousingLoan } from './housing-loan/housing-loan';
import { SghJlgLoan } from './sgh-jlg-loan/sgh-jlg-loan';
import { VehicalLoan } from './vehical-loan/vehical-loan';
import { GoldLoan } from './gold-loan/gold-loan';
import { BusinessLoan } from './business-loan/business-loan';
import { TermLoan } from './term-loan/term-loan';


@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: Loans,
                children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },

                    { path: 'interest-rate', component: InterestRate },
                    { path: 'personal', component: PersonalLoan },
                    { path: 'housing', component: HousingLoan },
                    { path: 'sgh-jlg', component: SghJlgLoan },
                    { path: 'vehical', component: VehicalLoan },
                    { path: 'gold', component: GoldLoan },
                    { path: 'business', component: BusinessLoan },
                    { path: 'term', component: TermLoan }

                ]
            }
        ])
    ]
})
export class LoansModule { }
