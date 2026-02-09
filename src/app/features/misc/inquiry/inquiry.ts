import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { MiscService } from '../../../services/misc-service';
import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../core/loading/loading.service';


@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inquiry.html',
  styleUrl: './inquiry.scss',
})
export class Inquiry {
  constructor(
    public lang: LanguageService,
    private miscService: MiscService,
    private loadingService: LoadingService
  ) { }

  loading = false;
  success = false;
  error = false;

  enquiryTypes = ['general', 'loan', 'deposit', 'account', 'other'];

  form = {
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  };

  submit() {
    this.loading = true;
    this.success = false;
    this.error = false;
    this.loadingService.show();

    this.miscService.submitEnquiry(this.form).subscribe({
      next: () => {
        this.loading = false;
        this.loadingService.hide();
        this.success = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          type: '',
          message: '',
        };
      },
      error: () => {
        this.loading = false;
        this.loadingService.hide();
        this.error = true;
      },
    });
  }
}
