import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LanguageService } from '../../../services/language.service';


@Component({
  selector: 'app-business-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-loan.html',
  styleUrl: './business-loan.scss',
})
export class BusinessLoan implements OnInit {
  constructor(public lang: LanguageService, @Inject(PLATFORM_ID) private platformId: Object) { }
  // loans : Array<any>= [];

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    // this.setData();

    // this.loans = this.lang.tArray('loans.business', 'loans');
    //   console.log("loans :", this.loans);
    // }
  }

  get loans(): Array<any> {
    {
      return this.lang.tArray<Array<any>>('loans.business', 'loans');
    }
  }
}
